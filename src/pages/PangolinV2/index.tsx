import React from 'react';
import { Helmet } from 'react-helmet';
import icon from 'assets/images/icon.svg';
import { ContentsLayout } from 'components/ContentsLayout';
import { Tab } from 'pages/CommonTab';
export const PangolinV2 = () => {
  return (
    <>
      <Helmet 
        script={[{ 
          type: 'text/javascript', 
          innerHTML: `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          // Insert Twitter Pixel ID and Standard Event data below
          twq('init','o6stc');
          twq('track','PageView');`
        }]} 
      />
      <div className="flex flex-wrap mt-10 space-y-4 text-center sm:space-y-0 sm:space-x-4">
        <Tab />
      </div>
      <ContentsLayout selectors="h2, h3">
        <article
          slot="content"
          className="mt-10 mb-8 sm:mt-14 sm:mb-10 prose lg:prose-xl"
        >
          <h1>Introducing Pangolin V2</h1>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XNutIHqKgKY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>

          <h2 className="flex whitespace-pre-wrap group" id="Introduction">
            <a
              href="#Introduction"
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
            Pangolin v1 was launched in February 2021 as a proven concept for
            automated market makers (AMMs), but native to the Avalanche network.
            Avalanche is the fastest smart contracts platform in the blockchain
            industry, as measured by time-to-finality, it’s also low cost, and
            is environmentally friendly.
          </p>
          <p>
            Since then, Pangolin has established itself as a safe, secure, and
            low-cost decentralized exchange and the premier DEX on Avalanche.
            Less than one year since its launch, the Pangolin v1 DEX has
            facilitated over $8.7bn in trading volume, and serves as a critical
            piece of DeFi infrastructure.
          </p>
          <p>
            Today, we are excited to announce an overview of Pangolin V2. We are
            targeting the launch of our new smart contracts on November 21st
            with deployment on Avalanche Mainnet.
          </p>

          <h2 className="flex whitespace-pre-wrap group" id="overview">
            <a
              href="#overview"
              className="absolute no-underline opacity-0 group-hover:opacity-100 after:hash"
              aria-label="Anchor"
              style={{
                marginLeft: '-1em',
                paddingRight: '0.5em',
                boxShadow: 'none',
                color: 'rgb(161, 161, 170)',
              }}
            ></a>
            <span>Overview of Pangolin 2.0</span>
          </h2>
          <ul>
            <li>
              <b>Improved Tokenomics</b>, reducing the $PNG emissions schedule,
              previously 28 years, to a new 4-year emissions schedule
            </li>
            <li>
              <b>Dramatically reduced $PNG supply</b>, the biggest token burn
              ever in DeFi’s history. We’ll be burning 57% of all remaining $PNG
              tokens, making them substantially more scarce.
            </li>
            <li>
              <b>Liquidity Provider Optimization</b>, enabled by making our
              smart contracts even smarter, allowing Pangolin to now offer even
              higher incentives to liquidity providers
            </li>
            <li>
              <b>Additional LP Rewards</b>, Pangolin will distribute the $4
              Million USD of PNG tokens as rewards to liquidity providers in
              priority farms during the next 30 days to celebrate Pangolin V2
            </li>
            <li>
              <b>A new UX</b>, releasing phase 1 of a redesigned UI, including a
              migration tool to help users migrate from old pools to the new
              Pangolin pools. Phase 2 of our redesigned UI will cover the entire
              Dapp UI.
            </li>
          </ul>

          <p>
            We will be releasing further updates, additional information, and
            initial documentation over the coming days and welcome all feedback
            and involvement from the community.
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>
              <b>Pangolin Team</b>
            </span>
            <img className="ml-5" width="30px" src={icon} alt="PNG icon" />
          </div>
        </article>
      </ContentsLayout>
      <div className="flex flex-wrap mt-10 space-y-4 text-center sm:space-y-0 sm:space-x-4">
        <Tab />
      </div>
    </>
  );
};
