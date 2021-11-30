import React, { useEffect, useState } from 'react';
import { Tab } from 'pages/CommonTab';
import { DATA_INFO } from 'pages/HomePage/data';
import { getTotalStats } from 'utils';

type StateParams = {
  totalLiquidity: number;
  totalVolume: number;
  maxAPR: number;
};
export const PangolinInfo: React.FC = () => {
  const [status, setStatus] = useState<StateParams>({
    totalLiquidity: 0,
    totalVolume: 0,
    maxAPR: 0,
  });
  const formatStat = (num: number) => {
    if (num > 1e9) {
      return Math.floor(num / 1e7) / 1e2 + 'B+';
    } else if (num > 1e6) {
      return Math.floor(num / 1e6) + 'M+';
    }
    return Math.floor(num / 1e3) + 'k+';
  };
  useEffect(() => {
    async function fetchData() {
      await Promise.all([getTotalStats().then((data) => setStatus(data))]);
    }
    fetchData();
  }, []);
  return (
    <>
      <div>
        <h1 className="mt-10 mb-8 max-w-screen-lg text-4xl font-extrabold tracking-tight leading-none text-gray-900 sm:mt-14 sm:mb-10 sm:text-6xl lg:text-7xl">
          Scale Your DeFi Trading with Pangolin
        </h1>

        <div className="flex my-5 space-x-2 sm:my-10 sm:space-x-6">
          {DATA_INFO.map((items, index) => {
            return (
              <div
                className="flex flex-col py-4 px-4 bg-gray-900 rounded-xl"
                key={index}
              >
                <span className="text-xl font-semibold text-orange-500 sm:text-4xl">
                  {items.name === 'Total Volume' &&
                    '$' + formatStat(status.totalVolume)}
                  {items.name === 'Total Liquidity' &&
                    '$' + formatStat(status.totalLiquidity)}
                  {items.name === 'Earn up to' && status.maxAPR + '%'}
                </span>
                <span className="mt-2 font-semibold text-gray-100">
                  {items.name}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mb-10 max-w-screen-lg text-lg font-medium text-gray-700 sm:mb-11 sm:text-2xl sm:leading-10">
          A community-driven decentralized exchange for Avalanche and Ethereum
          assets with
          <strong className="text-gray-900"> fast settlement</strong>,
          <strong className="text-gray-900"> low transaction fees</strong>, and
          <strong className="text-gray-900"> a democratic distribution</strong>
          –powered by Avalanche. Pangolin brings you the best trading
          opportunities to find and maximize your yield.
        </p>
        <div className="flex flex-wrap space-y-4 text-center sm:space-y-0 sm:space-x-4">
          <Tab />
        </div>
      </div>
    </>
  );
};
