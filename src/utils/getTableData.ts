import {
  BLOCK_SUBGRAPH_URL,
  PANGOLIN_SUBGRAPH_URL,
  TABLE_ADDRESSES,
} from './constants';

const TokenFields = `
  fragment TokenFields on Token {
    id
    name
    symbol
    derivedETH
    tradeVolumeUSD
  }
`;

async function getBlockFromTimestamp(timestamp: number) {
  const query = `
    query blocks($timestampFrom: Int!, $timestampTo: Int!) {
      blocks(
        first: 1
        orderBy: timestamp
        orderDirection: asc
        where: { timestamp_gt: $timestampFrom, timestamp_lt: $timestampTo }
      ) {
        id
        number
        timestamp
      }
    }
  `;

  const req = await fetch(BLOCK_SUBGRAPH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      variables: {
        timestampFrom: timestamp,
        timestampTo: timestamp + 60 * 60 * 24 * 7,
      },
    }),
  });

  const result = await req.json();

  return result?.data?.blocks?.[0]?.number;
}

type CurrentTokenType = {
  id: string;
  name: string;
  symbol: string;
  derivedETH: string;
  tradeVolumeUSD: string;
};

async function getCurrentTokens(): Promise<CurrentTokenType[]> {
  const query = `
    ${TokenFields}
    query tokens {
      tokens(first: 200, orderBy: tradeVolumeUSD, orderDirection: desc) {
        ...TokenFields
      }
    }
  `;

  const req = await fetch(PANGOLIN_SUBGRAPH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const result = await req.json();

  return result?.data?.tokens;
}

type HistoryToken = {
  id: string;
  derivedETH: string;
  tradeVolumeUSD: string;
};

async function getHistoryTokens(): Promise<HistoryToken[]> {
  const block = await getBlockFromTimestamp(
    Math.floor(new Date().getTime() / 1000) - 86400
  );

  const query = `
    ${TokenFields}
    query tokens {
      tokens(block: {number: ${block}} first: 200, orderBy: tradeVolumeUSD, orderDirection: desc) {
        ...TokenFields
      }
    }
  `;

  const req = await fetch(PANGOLIN_SUBGRAPH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const result = await req.json();

  return result?.data?.tokens;
}

export type TableData = {
  addr: string;
  name: string;
  symbol: string;
  price: {
    now: number;
    history: number;
  };
  volume: number;
};

export async function getTableData(): Promise<TableData[]> {
  const [currentTokens, historyTokens] = await Promise.all([
    getCurrentTokens(),
    getHistoryTokens(),
  ]);

  return Promise.all(
    TABLE_ADDRESSES.map((addr) => {
      const token = currentTokens.find(
        ({ id }) => id.toLowerCase() === addr.toLowerCase()
      );
      const historyToken = historyTokens.find(
        ({ id }) => id.toLowerCase() === addr.toLowerCase()
      );

      if (token && historyToken) {
        const {
          name,
          symbol,
          derivedETH: now,
          tradeVolumeUSD: currentVolume,
        } = token;

        const { derivedETH: history, tradeVolumeUSD: historyVolume } =
          historyToken;

        return {
          addr,
          name,
          symbol,
          price: {
            now: parseFloat(now),
            history: parseFloat(history),
          },
          volume: parseFloat(currentVolume) - parseFloat(historyVolume),
        };
      }
      return {} as TableData;
    })
  );
}
