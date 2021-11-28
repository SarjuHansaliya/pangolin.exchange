/* eslint-disable max-lines */
import React from 'react';
import distribution from 'assets/images/distribution.png';
import hero from 'assets/images/hero.png';
import { ContentsLayout } from 'components/ContentsLayout';
import {
  LITEPAPER_POOLS,
  LITEPAPER_TABLE_DATA
} from 'pages/Litepaper/data';

export const Litepaper = () => {
  return (
    <ContentsLayout selectors="h2,h3">
      <article
        slot="content"
        className="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl"
      >
        <h1>Introducing Pangolin and the PNG Token</h1>
        <figure>
          <img src={hero} alt="PNG hero" />
        </figure>
        <h2 className="flex whitespace-pre-wrap group" id="introduction">
          <a
            href="#introduction"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Introduction</span>
        </h2>
        <p>
          Pangolin is a decentralized exchange (DEX) which runs on Avalanche,
          uses the{' '}
          <a
            className="hover:no-underline"
            href="https://uniswap.org/docs/v2/protocol-overview/how-uniswap-works/"
          >
            same automated market-making (AMM) model as Uniswap
          </a>
          , features a native governance token called PNG that is fully
          community distributed and is capable of trading all tokens issued on
          Ethereum and Avalanche. In a crowded marketplace with multiple
          contenders, Pangolin offers three critically important benefits:
          <strong> fast and cheap trades</strong>,
          <strong> community-driven development</strong>, and a
          <strong> fair and open token distribution</strong>.
        </p>
        <p>
          First, Pangolin can finalize trades quickly and cheaply. Since
          Pangolin is built on Avalanche, it enables users to swap assets while
          enjoying sub-second transaction finality and transaction fees as low
          as a few cents. Oftentimes, trades on Pangolin will feel as fast as
          trades on centralized exchanges. Second, beyond the significant
          performance upgrades to the technical status quo, Pangolin is
          community-driven. The native governance token, PNG, enables the
          community to drive the development of the product in full. Third, but
          not least, Pangolin features a 100% community-focused token
          distribution model, meaning that all tokens are distributed directly
          to the community, without any allocations to team, advisors,
          investors, or insiders.
        </p>
        <p>
          Users of existing AMMs, such as Uniswap and Sushiswap, are already
          familiar with their mechanism of action. Therefore, the rest of this
          post does not discuss how Pangolin achieves its trading capabilities.
          Instead, we discuss the PNG token in more detail, including its
          distribution mechanism and governance rules.
        </p>
        <h2 className="flex whitespace-pre-wrap group" id="png-distribution">
          <a
            href="#png-distribution"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>
            PNG Distribution: A 100% Community-Driven Governance Token
          </span>
        </h2>
        <p>
          To reinforce the project’s commitment to being created solely for the
          benefit of users, Pangolin is following a fair launch model with its
          governance token (PNG). However, while PNG will enable all the
          governance activities of Pangolin, and therefore its future
          development, governance proposals will not start until three months
          after the launch of Pangolin. This waiting period of three months is
          to ensure that enough PNG is distributed to the community.
        </p>
        <h3
          className="flex whitespace-pre-wrap group"
          id="distribution-breakdown"
        >
          <a
            href="#distribution-breakdown"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Distribution Breakdown</span>
        </h3>
        <p>
          No PNG tokens are allocated to the team, investors, advisors, or any
          sort of insiders. Therefore, Pangolin is entirely community-driven and
          entirely community-owned. PNG is capped at a supply of 538 million
          tokens, 100% of which will be distributed to the community according
          to
          <strong> Chart 1</strong>. The first 95% of tokens, or 512 million
          tokens, are dedicated to the community treasury, where they will
          initially be used to fund liquidity mining. The remaining 5%, or 26
          million tokens, are dedicated to a community airdrop.
        </p>
        <figure>
          <img src={distribution} alt="PNG distribution" />
          <figcaption>
            <strong>Chart 1</strong>. PNG distribution. 95% of the tokens are
            given to liquidity miners and 5% to airdrop recipients.
          </figcaption>
        </figure>
        <h4>Community - Liquidity Mining Allocation (95% of PNG)</h4>
        <p>
          The vesting schedule is algorithmically specified as follows: starting
          from 256 M tokens for the first four years, the number of tokens
          distributed halves every additional four years, meaning that the next
          four years contribute roughly a quarter, and so on. This pattern
          continues into perpetuity. For reference, during the first four years,
          roughly 175,342 PNG will be distributed per day to liquidity miners.
          The full schedule of distribution of PNG in the liquidity mining
          allocation is shown below:
        </p>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Total PNG Distributed</th>
              <th>PNG / Day</th>
            </tr>
          </thead>
          <tbody>
            {LITEPAPER_TABLE_DATA.map((items, index) => {
              return (
                <tr key={index}>
                  {items.data &&
                    items.data.map((tabledata, index) => {
                      return (
                        <React.Fragment key={index}>
                          <td>{tabledata.val}</td>
                        </React.Fragment>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <p>
          The liquidity mining program starts on mainnet launch and will cover
          the following pools on Pangolin:
        </p>

        <ul>
          {LITEPAPER_POOLS.map((items, index) => {
            return (
              <li key={index}>
                <p>
                  <strong>{items.title}</strong>
                </p>
                <ul>
                  {items.li &&
                    items.li.map((items, index) => {
                      return <li key={index}>{items.val}</li>;
                    })}
                </ul>
              </li>
            );
          })}
        </ul>

        <p>
          The PNG will be allocated per pool proportional to liquidity as
          calculated by the total AVAX value in the pool. In non-AVAX pools, the
          proportional liquidity is calculated by looking at the price of the
          base token in comparison to AVAX.
        </p>

        <p>
          Here’s an example. Suppose we only have AVAX/USDT, AVAX/PNG, and
          PNG/USDT pools. We are trying to calculate the proportional amount of
          rewards for each. Now, suppose the price of AVAX is 4 USDT and 40 PNG.
          For the AVAX/USDT pool, there’s 1 AVAX of liquidity, and thus 4 USDT.
          For AVAX/PNG there is 1 of liquidity, and thus 40 PNG. For PNG/USDT,
          there’s 80 PNG of liquidity. To calculate the amount of AVAX, we
          calculate that the 80 PNG of liquidity equals 2 AVAX. Therefore, the
          final liquidities are 1, 1, and 2 for the three pools respectively.
          This total 4 AVAX, and thus the first two pools receive 25% of the
          rewards, and the third pool receives 50%.
        </p>

        <h4>Community - Airdrop Allocation (5% of PNG)</h4>

        <p>
          The airdrop allocation will be distributed on the basis of ownership
          of UNI and SUSHI. In order to claim the PNG in the airdrop, UNI and
          SUSHI holders that had tokens on December 7th, 2020 will need to call
          withdraw on a distribution contract. This transaction must be from
          <i>the same address</i>
          that holds UNI/SUSHI on Ethereum and must be sent within one month of
          Pangolin’s launch. The steps are as follows:
        </p>

        <ol>
          <li>
            First, a user deposits SUSHI or UNI from their Ethereum address that
            stored tokens on December 7th, 2020, onto the Ethereum &lt;&gt;
            Avalanche bridge contract sitting on Ethereum.
          </li>
          <li>
            Second, the holder withdraws SUSHI or UNI from the Ethereum &lt;&gt;
            Avalanche bridge contract sitting on Avalanche. The withdrawal
            address on the Avalanche side must be the same as the address on the
            Ethereum side. This is possible since Avalanche supports Metamask
            and other tools out of the box, therefore Ethereum addresses resolve
            to the same Avalanche addresses.
          </li>
          <li>
            Third, and finally, the user will be able to instantly withdraw PNG.
          </li>
        </ol>

        <p>
          The conversion formula from SUSHI or UNI onto PNG is not linear, but
          rather slightly quadratic. Specifically, PNG will be claimable
          pro-rata based on the following formula:
        </p>

        <pre>
          <code>
            PNG amount = 0.3 * (SUSHI amount ^ 0.8)
            <br />
            PNG amount = 0.7 * (UNI amount ^ 0.8)
          </code>
        </pre>

        <p>
          These conversion rates were chosen in order to reduce wealth
          concentration onto large holders of SUSHI and UNI and redistribute
          more evenly onto smaller holders of SUSHI and UNI. 70% of the airdrop
          allocation -- or 18.2M PNG -- will be distributed to UNI holders and
          30% -- or 7.8M PNG -- to SUSHI holders.
        </p>

        <h2 className="flex whitespace-pre-wrap group" id="png-governance">
          <a
            href="#png-governance"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>PNG Governance</span>
        </h2>

        <p>
          A big part of the value proposition of PNG’s governance is that it is
          highly community-driven. Because there are no insiders, such as
          investors, team members, or other such stakeholders, the development
          of Pangolin remains entirely up to the wider community. Pangolin
          governance will be live three months after launch and will enable
          several key actions, including:
        </p>

        <ul>
          <li>
            <p>
              <strong>Modifications to the liquidity pools</strong>
            </p>
            <p>
              Initially, the distribution of tokens will be entirely through the
              liquidity mining pools listed in the previous section. The
              liquidity mining period will remain active until the pools are
              altered or another community initiative is accepted as a formal
              governance proposal. Proposals may add and subtract liquidity
              mining pools or may allocate PNG directly to a user or smart
              contract such as a community treasury.
            </p>
          </li>
          <li>
            <p>
              <strong>Fee switch</strong>
            </p>
            <p>
              The community will also have the ability to enable the Pangolin
              fee switch. This fee switch can divert .05% of all swap fees to a
              designated address. Swap fees will remain fixed at .30%, but
              liquidity providers will only receive at most .25% of these fees.
              This provides the community with the opportunity to acquire extra
              funds to support any significant community initiatives. The
              Pangolin fee switch is subject to a 90-day timelock delay and is
              disabled by default.
            </p>
          </li>
        </ul>

        <p>
          Read more about governance in our{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gov.pangolin.exchange/t/how-governance-works/1082"
          >
            Governance Forum
          </a>
        </p>

        <h2 className="flex whitespace-pre-wrap group" id="conclusion">
          <a
            href="#conclusion"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Conclusion: A Public Good for Avalanche and Ethereum</span>
        </h2>

        <p>
          In the summer of 2020, we discovered the limits of the then-current
          network infrastructure amidst the skyrocketing use of decentralized
          finance (DeFi) apps, and the equally sharp falls as liquidity shocks
          rang throughout. The resulting network congestion introduced
          untenable, systemic risks and led to liquidations not from individuals
          without sufficient collateral, but from individuals who couldn’t fit
          their collateral deposit into a block on Ethereum. As avid users and
          believers in DeFi, we feel there must be back-ups and resources that
          avoid centralizing the nearly $15B locked in DeFi protocols onto one
          network that is undergoing a significant, multi-year upgrade.
          Furthermore, we believe that such applications require deep ownership
          from the community, and should be highly democratic and distributed.
        </p>

        <p>
          Pangolin is a response to these two critical issues that other AMMs
          face: subpar performance and governance controls that benefit a few
          large holders. With Pangolin, users will be able to enjoy
          centralized-exchange-like speeds without having to compromise access
          to their existing portfolio of assets and without having to give
          control to large insiders.
        </p>
      </article>
    </ContentsLayout>
  );
};
/* eslint-enable */
