import one from 'assets/tutorials/stake-png/001.png';
import two from 'assets/tutorials/stake-png/002.png';
import three from 'assets/tutorials/stake-png/003.png';
import four from 'assets/tutorials/stake-png/004.png';
import five from 'assets/tutorials/stake-png/005.png';
import six from 'assets/tutorials/stake-png/006.png';
import seven from 'assets/tutorials/stake-png/007.png';
import eight from 'assets/tutorials/stake-png/008.png';
import nine from 'assets/tutorials/stake-png/009.png';
import ten from 'assets/tutorials/stake-png/010.png';
import { ContentsLayout } from 'components/ContentsLayout';

export const StakePng = () => {
  return (
    <ContentsLayout selectors="h3,h4">
      <article
        slot="content"
        className="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl"
      >
        <h2>Stake PNG tokens to earn WAVAX (Wrapped AVAX)</h2>

        <p>
          Users can stake PNG tokens to earn WAVAX (Wrapped AVAX). This is part
          of the Avalanche Rush incentives program.
        </p>
        <img src={one} alt="img" />
        <p>Deposits start: 16:00 UTC Wednesday September 8th, 2021</p>
        <p>Rewards start: 04:00 UTC Thursday September 9th, 2021</p>
        <p>Total incentives: $2M AVAX</p>
        <p>Duration: 3 months</p>

        <h3 className="flex whitespace-pre-wrap group" id="staking-tokens">
          <a
            href="#staking-tokens"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Depositing PNG Tokens</span>
        </h3>

        <ol>
          <li>
            Select "Stake"
            <img src={two} alt="img" />
          </li>
          <li>
            Find the Earn WAVAX card
            <img src={three} alt="img" />
          </li>
          <li>Select "Deposit"</li>
          <li>
            Select "Stake PNG Tokens"
            <img src={four} alt="img" />
          </li>
          <li>
            Enter the amount of PNG tokens you would like to stake
            <img src={five} alt="img" />
          </li>
          <li>Select "Approve" and sign the transaction</li>
          <li>Select "Deposit" and confirm the transaction</li>
        </ol>

        <h3 className="flex whitespace-pre-wrap group" id="claim-wavax">
          <a
            href="#claim-wavax"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Claiming Rewards</span>
        </h3>

        <p>
          After depositing your PNG tokens, you will accrue WAVAX tokens. You
          can claim your earned WAVAX tokens without having to remove your PNG
          tokens.
        </p>

        <ol>
          <li>
            Select "Stake"
            <img src={two} alt="img" />
          </li>
          <li>
            Select "Manage" on the Earn WAVAX card
            <img src={six} alt="img" />
          </li>
          <li>
            Select "Claim"
            <img src={seven} alt="img" />
          </li>
          <li>
            Select "Claim" again and confirm the transaction through MetaMask
          </li>
        </ol>

        <p>Congratulations! You have just received your WAVAX rewards</p>

        <h3 className="flex whitespace-pre-wrap group" id="convert-wavax">
          <a
            href="#convert-wavax"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Convert WAVAX to AVAX</span>
        </h3>

        <p>
          WAVAX is the wrapped version of AVAX. If you want to un-wrap your
          WAVAX to AVAX, you can do this on the swap page for a 1:1 conversion.
        </p>

        <ol>
          <li>
            Select "Swap"
            <img src={nine} alt="img" />
          </li>
          <li>
            Select WAVAX as the first token and AVAX as the second token
            <img src={ten} alt="img" />
          </li>
          <li>Approve and Swap</li>
        </ol>

        <p>Congratulations! You have just received your WAVAX rewards</p>

        <h3 className="flex whitespace-pre-wrap group" id="unstaking-tokens">
          <a
            href="#unstaking-tokens"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Unstaking PNG Tokens</span>
        </h3>

        <ol>
          <li>
            Select "Stake"
            <img src={two} alt="img" />
          </li>
          <li>
            Select "Manage" on the Earn WAVAX card
            <img src={six} alt="img" />
          </li>
          <li>
            Select "Unstake"
            <img src={eight} alt="img" />
          </li>
          <li>Confirm the transaction in Metamask.</li>
        </ol>

        <p>Congratulations! You have successfully unstaked your PNG tokens.</p>
      </article>
    </ContentsLayout>
  );
};
