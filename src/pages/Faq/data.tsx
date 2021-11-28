export const FAQ_ITEMS_DATA = [
  {
    title: `About Pangolin`,
    faqItems: [
      {
        question: `What is Pangolin Exchange?`,
        answer: `Pangolin is a decentralized exchange (DEX) which runs on Avalanche, uses the same automated market-making (AMM) model as Uniswap's. Pangolin offers three critically important benefits: fast and cheap trades, community-driven development, and a fair and open token distribution.`,
      },
      {
        question: `Who is behind Pangolin Exchange?`,
        answer: `Pangolin is a community-driven project. The initial development work was done by Ava Labs. A community-hired team are now the lead developers.`,
      },
      {
        question: `What is Pangolin's roadmap?`,
        answer: (
          <>
            Our{' '}
            <a
              className="hover:no-underline"
              href="https://pangolindex.medium.com/how-pangolin-becomes-a-premier-dex-in-defi-roadmap-for-2021-8303aca66f37"
            >
              2021 roadmap
            </a>{' '}
            includes a UX redesign, CEX listings, PNG staking, Governance
            improvements, and much more.
          </>
        ),
      },
    ],
  },

  {
    title: `PNG token`,
    faqItems: [
      {
        question: `What is the PNG token used for?`,
        answer: `PNG is the Pangolin governance token. PNG holders can use their
        tokens to provide liquidity in Pangolin's pools and vote on
        proposals.`,
      },
      {
        question: `Can I stake my PNG on Pangolin?`,
        answer: `PNG staking is on our 2021 roadmap and coming soon`,
      },
      {
        question: `What exchanges is PNG listed on?`,
        answer: (
          <>
            A list of exchanges supporting PNG can be found{' '}
            <a
              className="hover:no-underline"
              href="https://coinmarketcap.com/currencies/pangolin/markets/"
            >
              here
            </a>
            .
          </>
        ),
      },
    ],
  },

  {
    title: `Swapping Tokens`,
    faqItems: [
      {
        question: `What fees do I have to pay when trading on Pangolin?`,
        answer: `There is a 0.3% liquidity provider fee for each swap on Pangolin.`,
      },
      {
        question: `Which wallets can I use to swap on Pangolin?`,
        answer: `Pangolin currently supports MetaMask and MetaMask compatible
        devices like Ledger.`,
      },
      {
        question: `How much trading volume happens on Pangolin?`,
        answer: (
          <>
            Our{' '}
            <a
              className="hover:no-underline"
              href="https://info.pangolin.exchange/"
            >
              analytics page{' '}
            </a>{' '}
            has a daily, weekly, and monthly volume chart.
          </>
        ),
      },
    ],
  },

  {
    title: `Providing Liquidity`,
    faqItems: [
      {
        question: `How can I see the pools offered in Pangolin and their APYs?`,
        answer: (
          <>
            Go to the New PNG page{' '}
            <a
              className="hover:no-underline"
              href="https://app.pangolin.exchange/#/png/1"
            >
              here
            </a>{' '}
            to see all the PNG-incentivized pools offered in Pangolin along with
            their current APYs.
          </>
        ),
      },
      {
        question: `Are there any risks involved in being a liquidity provider on Pangolin?`,
        answer: (
          <>
            No. Pangolin is a fork of Uniswap V2. You can find all our contracts{' '}
            <a
              className="hover:no-underline"
              href="https://github.com/pangolindex/exchange-contracts"
            >
              here
            </a>
            . Note that your overall position may decrease in value due to
            impermanent loss. Please do your own research before providing
            liquidity.
          </>
        ),
      },
      {
        question: `I’m a liquidity provider. How can I see my deposited liquidity?`,
        answer: (
          <>
            Go to the analytics page{' '}
            <a
              className="hover:no-underline"
              href="https://info.pangolin.exchange/#/accounts"
            >
              here
            </a>
            , enter your wallet address and click on "Load Account Details".
            This will show you how much tokens you'd get if you were to withdraw
            your liquidity at this specific moment.
          </>
        ),
      },
    ],
  },

  {
    title: `Troubleshooting`,
    faqItems: [
      {
        question: `My transaction is pending on Metamask for some time now, what can I do?`,
        answer: (
          <>
            If your transaction is stuck, try resetting your Metamask by
            Clicking the account icon on the top-right corner of MetaMask →
            Select Settings → Select Advanced → Scroll down and click Reset
            Account.
            <br />
            <br />
            Please note, resetting your account <u>will not</u> disrupt your
            funds or wallet address.
          </>
        ),
      },
      {
        question: `Why did my transaction fail?`,
        answer: `If your transaction failed, it's either because you don't have enough slippage or use enough gas. You'll have to
        increase your allowed slippage to account for the fee taken during the swap. Click on the gear icon for settings
        and adjust slippage tolerance accordingly.`,
      },
      {
        question: `Why isn’t my ERC-20 token showing in my Metamask wallet?`,
        answer: (
          <>
            This is due to the token address changing. When you transfer
            ERC-20’s across the{' '}
            <a className="hover:no-underline" href="https://aeb.xyz/#/transfer">
              Avalanche-Ethereum Bridge
            </a>
            , the Token contract address changes. Token contract addresses are
            different on Ethereum and Avalanche despite being the same
            represented token.
            <br />
            <br />
            To import the Avalanche token address of any Avalanche supported
            ERC-20 follow these steps:
            <ol>
              <li>Open Metamask</li>
              <li>Scroll down to "Add Token"</li>
              <li>Tap on the "Custom Token" tab</li>
              <li>
                Navigate to: the{' '}
                <a
                  className="hover:no-underline"
                  href="https://tokenlists.org/token-list?url=https://raw.githubusercontent.com/pangolindex/tokenlists/main/aeb.tokenlist.json"
                >
                  Avalanche Token List
                </a>
              </li>
              <li>
                Find the token you wish to import and copy the contract address
              </li>
              <li>Paste the contract address inside Metamask</li>
              <li>Tap Next</li>
              <li>Done!</li>
            </ol>
          </>
        ),
      },
    ],
  },
];
