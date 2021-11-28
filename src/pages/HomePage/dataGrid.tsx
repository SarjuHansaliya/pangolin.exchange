import { useEffect, useState } from 'react';
import { getAvaxPriceStats, getTableData } from 'utils';
import { TableData } from 'utils/getTableData';

type StateParams = {
  now: number;
  history: number;
};

export const PangolinDataGrid = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [avaxPrice, setAvaxPrice] = useState<StateParams>({
    now: 0,
    history: 0,
  });
  const TABLE_HEADER = [
    { name: 'Name' },
    { name: 'Volume (24 hrs)' },
    { name: 'Price' },
    { name: 'Price Change' },
  ];
  useEffect(() => {
    async function fetchData() {
      await Promise.all([
        getAvaxPriceStats().then(({ usd, usd_24h_change }) => {
          setAvaxPrice({
            now: usd,
            history: ((100 - usd_24h_change) * usd) / 100,
          });
        }),
        getTableData().then((data) => setTableData(data)),
      ]);
    }
    fetchData();
  }, []);
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <>
      <div className="flex flex-col mt-16">
        <div className="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    {TABLE_HEADER.map((items, index) => {
                      return (
                        <th
                          key={index}
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase whitespace-nowrap bg-gray-50"
                        >
                          {items.name}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableData &&
                    tableData.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-10 h-10 rounded-full"
                                  src={`https://raw.githubusercontent.com/pangolindex/tokens/main/assets/${item.addr}/logo.png`}
                                  alt={item.symbol}
                                />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {item.symbol}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {item.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm tabular-nums text-gray-800 whitespace-nowrap">
                            {formatter.format(item.volume)}
                          </td>
                          <td className="py-4 px-6 text-sm tabular-nums text-gray-800 whitespace-nowrap">
                            {formatter.format(item.price.now * avaxPrice.now)}
                          </td>
                          <td className="py-4 px-6 text-sm tabular-nums text-gray-800 whitespace-nowrap">
                            <span
                              className={`${
                                item.price.now * avaxPrice.now -
                                  item.price.history * avaxPrice.history >=
                                0
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              } inline-flex items-center px-2 py-1 text-xs font-semibold leading-5 rounded-full space-x-1`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                className="h-4"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d={
                                    item.price.now * avaxPrice.now -
                                      item.price.history * avaxPrice.history >=
                                    0
                                      ? 'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
                                      : 'M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                                  }
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span>
                                {Math.abs(
                                  (100 *
                                    (item.price.now * avaxPrice.now -
                                      item.price.history * avaxPrice.history)) /
                                    (item.price.history * avaxPrice.history)
                                ).toFixed(2)}
                                %
                              </span>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
