import one from 'assets/tutorials/swap-tokens/001.png';
import two from 'assets/tutorials/swap-tokens/002.png';
import three from 'assets/tutorials/swap-tokens/003.png';
import swappingToken from 'assets/videos/swapping-tokens-on-pangolin.mp4';
import { ContentsLayout } from 'components/ContentsLayout';

export const SwapTokens = () => {
  return (
    <ContentsLayout selectors="h3,h4">
      <article
        slot="content"
        className="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl"
      >
        <h2>Swap Tokens</h2>

        <video controls>
          <source src={swappingToken} type="video/mp4" />
          Your browser does not support the video tag. Click
          <a
            href="https://www.youtube.com/watch?v=kNQp4t03lOQ"
            rel="noreferrer"
            target="_blank"
            className="hover:no-underline"
          >
            here
          </a>{' '}
          to watch the video on YouTube.
        </video>

        <p>
          <i>Swap tokens on Pangolin</i>
        </p>

        <h3 className="flex whitespace-pre-wrap group" id="swap-tokens">
          <a
            href="#swap-tokens"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Swap Tokens</span>
        </h3>

        <p>
          By using the swap function, you can exchange tokens. In this example,
          there is .01 AVAX that can swap for 0.0496027 UNI at a rate of
          0.201602 AVAX per UNI.
        </p>

        <img src={one} alt="img" />

        <p>
          If you decide to increase the amount you want to swap in an
          inefficient pool, a warning will indicate that you are about to swap
          at an unfavorable rate. To avoid this, simply lower the amount you
          want to swap or wait for the pool to increase in liquidity.
        </p>

        <img src={two} alt="img" />

        <h3 className="flex whitespace-pre-wrap group" id="interface-settings">
          <a
            href="#interface-settings"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Interface Settings</span>
        </h3>

        <p>
          With interface settings, you can adjust slippage, transaction
          timeouts, and the interface from light to dark mode. In the top right
          corner, there is a cog wheel that gives you the option to change these
          settings.
        </p>

        <img src={three} alt="img" />

        <h4
          className="flex whitespace-pre-wrap group"
          id="transaction-settings"
        >
          <a
            href="#transaction-settings"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Transaction Settings</span>
        </h4>

        <p>
          Slippage tolerance: set limits on how much you are willing to let the
          price change for the swap. If it falls out of the limit, the
          transaction is canceled.
        </p>

        <p>
          Transaction deadline: set a time limit for the transaction to be
          fulfilled, otherwise, it is canceled.
        </p>

        <h4
          className="flex whitespace-pre-wrap group"
          id="interface-settings-2"
        >
          <a
            href="#interface-settings-2"
            className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
            aria-label="Anchor"
            style={{
              marginLeft: '-1em',
              paddingRight: '0.5em',
              boxShadow: 'none',
              color: 'rgb(161, 161, 170)',
            }}
          ></a>
          <span>Interface Settings</span>
        </h4>

        <p>
          Toggle Expert Mode <strong>[Not Recommended]</strong>: can be set to
          allow unlimited slippage.
        </p>
        <p>Toggle Dark Mode: set Pangolin to light or dark mode.</p>
      </article>
    </ContentsLayout>
  );
};
