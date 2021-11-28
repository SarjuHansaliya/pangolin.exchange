import one from 'assets/tutorials/earn-png/001.png';
import two from 'assets/tutorials/earn-png/002.png';
import three from 'assets/tutorials/earn-png/003.png';
import four from 'assets/tutorials/earn-png/004.png';
import five from 'assets/tutorials/earn-png/005.png';
import six from 'assets/tutorials/earn-png/006.png';
import seven from 'assets/tutorials/earn-png/007.png';
import eight from 'assets/tutorials/earn-png/008.png';
import nine from 'assets/tutorials/earn-png/009.png';
import ten from 'assets/tutorials/earn-png/010.png';
import eleven from 'assets/tutorials/earn-png/011.png';
import twelve from 'assets/tutorials/earn-png/012.png';
import { ContentsLayout } from 'components/ContentsLayout';

export const EarnPng = () => {
  return (
    <ContentsLayout selectors="h3,h4">
      <article
        slot="content"
        className="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl"
      >
        <h2>
          Using your Liquidity Provider (PGL) Tokens to Earn the Pangolin (PNG)
          Governance Token
        </h2>

        <p>
          After you successfully create a pool or add liquidity to an existing
          pool, you receive PGL tokens. These tokens are a representation of
          your ownership in a pool. You may use those PGL tokens to earn the PNG
          governance token by depositing them into one of your participating
          pools.
        </p>

        <p>
          <strong>
            Note: You may only receive PNG rewards from supported pools, which
            can be found under the following section on the{' '}
            <a
              href="/litepaper#distribution-breakdown"
              target="_blank"
              className="hover:no-underline"
            >
              litepaper
            </a>
            : Community - Liquidity Mining Allocation (95% of PNG)
          </strong>
        </p>

        <h3
          className="flex whitespace-pre-wrap group"
          id="depositing-pgl-tokens"
        >
          <a
            href="#depositing-pgl-tokens"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Depositing PGL Tokens</span>
        </h3>

        <ol>
          <li>
            Select "PNG"
            <img src={one} alt="img" />
          </li>
          <li>
            Find the pool you are participating in
            <img src={two} alt="img" />
          </li>
          <li>Select "Deposit"</li>
          <li>
            Select "Deposit PGL Tokens"
            <img src={three} alt="img" />
          </li>
          <li>
            Enter the amount of PGL tokens you would like to deposit
            <img src={four} alt="img" />
          </li>
          <li>Select "Approve" and sign the transaction</li>
          <li>Select "Deposit" and confirm the transaction</li>
        </ol>

        <h3
          className="flex whitespace-pre-wrap group"
          id="claim-png-without-withdrawing"
        >
          <a
            href="#claim-png-without-withdrawing"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Claiming PNG Tokens without Withdrawing PGL Tokens</span>
        </h3>

        <p>
          After depositing your PGL tokens into a pool, you will accrue PNG
          tokens. You can claim your earned PNG tokens without having to remove
          your PGL tokens.
        </p>

        <ol>
          <li>
            Select "PNG"
            <img src={five} alt="img" />
          </li>
          <li>
            Select "Manage" on the pool you would like to claim your PNG tokens
            from
            <img src={six} alt="img" />
          </li>
          <li>
            Select "Claim"
            <img src={seven} alt="img" />
          </li>
          <li>
            Select "Claim" again and confirm the transaction through MetaMask
            <img src={eight} alt="img" />
          </li>
        </ol>

        <p>
          Congratulations! You have just received your PNG rewards without
          removing your PGL tokens.
        </p>

        <h3
          className="flex whitespace-pre-wrap group"
          id="withdrawing-pgl-tokens"
        >
          <a
            href="#withdrawing-pgl-tokens"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Withdrawing PGL Tokens</span>
        </h3>

        <p>
          After depositing your PGL tokens into a pool, you may claim your PNG
          tokens by withdrawing your PGL tokens.
        </p>

        <ol>
          <li>
            Select "PNG"
            <img src={nine} alt="img" />
          </li>
          <li>
            Select "Manage" on the pool you would like to withdraw from
            <img src={ten} alt="img" />
          </li>
          <li>
            Select "Withdraw"
            <img src={eleven} alt="img" />
          </li>
          <li>
            Select "Withdraw & Claim"
            <img src={twelve} alt="img" />
          </li>
          <li>Confirm the transaction on MetaMask</li>
        </ol>

        <p>
          Congratulations! You have successfully withdrawn your PGL tokens and
          PNG token rewards.
        </p>
      </article>
    </ContentsLayout>
  );
};
