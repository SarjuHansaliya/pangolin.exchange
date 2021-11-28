import one from 'assets/tutorials/transfer-from-ethereum/001.png';
import two from 'assets/tutorials/transfer-from-ethereum/002.png';
import three from 'assets/tutorials/transfer-from-ethereum/003.png';
import four from 'assets/tutorials/transfer-from-ethereum/004.png';
import five from 'assets/tutorials/transfer-from-ethereum/005.png';
import six from 'assets/tutorials/transfer-from-ethereum/006.png';
import { ContentsLayout } from 'components/ContentsLayout';

export const TransferFromEtherenum = () => {
  return (
    <ContentsLayout selectors="h3,h4">
      <article
        slot="content"
        className="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl"
      >
        <h2>Transfer from Ethereum</h2>

        <p>
          If you have Ethereum ERC-20 tokens, you can use the{' '}
          <a
            href="https://bridge.avax.network/"
            rel="noreferrer"
            target="_blank"
          >
            Avalanche Bridge
          </a>{' '}
          to bring them to Avalanche and use Pangolin. The bridge allows you to
          transfer assets between both blockchain networks.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RLnNMfINwS0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h3 className="flex whitespace-pre-wrap group" id="transfer-eth">
          <a
            href="#transfer-eth"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Transferring Ethereum ERC-20 Tokens to Avalanche</span>
        </h3>

        <ol>
          <li>
            Access the{' '}
            <a
              href="https://bridge.avax.network/"
              rel="noreferrer"
              target="_blank"
            >
              Avalanche Bridge
            </a>
          </li>
          <li>
            Select "Metamask" and log in to your wallet
            <img src={one} alt="img" />
          </li>
          <li>
            Ensure that the UI says "From Ethereum" as shown below. If it does
            not, press the "Switch" button and click "Switch Network" when
            Metamask prompts you to.
            <img src={two} alt="img" />
          </li>
          <li>
            Select the token you would like to bridge and enter the amount you
            would like to bridge.
            <img src={three} alt="img" />
          </li>
          <li>
            Select "Transfer"
            <img src={four} alt="img" />
          </li>
          <li>
            Wait for the Ethereum transaction and the Avalanche transaction to
            confirm.
            <img src={five} alt="img" />
          </li>
          <li>
            After your tokens are successfully bridged, you can review the
            transaction details:
            <img src={six} alt="img" />
          </li>
        </ol>

        <p>
          Congratulations! You bridged your ERC-20 tokens to Avalanche. These
          tokens can now be used on Pangolin to swap for another token or add
          liquidity to a pool on Pangolin.
        </p>
      </article>
    </ContentsLayout>
  );
};
