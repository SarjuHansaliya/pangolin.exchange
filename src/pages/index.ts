import Layout from 'components/Layout';
import { Faq } from 'pages/Faq';
import { PangolinMain } from 'pages/HomePage';
import { Litepaper } from 'pages/Litepaper';
import { PangolinV2 } from 'pages/PangolinV2'
import { Tutorials } from 'pages/Tutorials';
import { EarnPng } from 'pages/Tutorials/earnPng';
import { GettingStarted } from 'pages/Tutorials/gettingStarted';
import { ManageLiquidity } from 'pages/Tutorials/manageLiquidity';
import { StakePng } from 'pages/Tutorials/stakePng';
import { SwapTokens } from 'pages/Tutorials/swapTokens';
import { TransferFromEtherenum } from 'pages/Tutorials/transferFromEthereum';

export const routes = [
  {
    path: '/',
    component: PangolinMain,
    layout: Layout,
    title: 'Pangolin - Scale Your DeFi Trading'
  },
  {
    path: '/litepaper',
    component: Litepaper,
    exact: true,
    layout: Layout,
    title: 'Platform and PNG Token Litepaper - Pangolin'
  },
  {
    path: '/tutorials',
    component: Tutorials,
    exact: true,
    layout: Layout,
    title: 'Tutorials - Pangolin'
  },
  {
    path: '/tutorials/getting-started',
    component: GettingStarted,
    exact: true,
    layout: Layout,
    title: 'Getting Started - Pangolin'
  },
  {
    path: '/tutorials/manage-liquidity',
    component: ManageLiquidity,
    exact: true,
    layout: Layout,
    title: 'Manage Liquidity - Pangolin'
  },
  {
    path: '/tutorials/swap-tokens',
    component: SwapTokens,
    exact: true,
    layout: Layout,
    title: 'Swap Tokens - Pangolin'
  },
  {
    path: '/tutorials/transfer-from-ethereum',
    component: TransferFromEtherenum,
    exact: true,
    layout: Layout,
    title: 'Transfer from Ethereum - Pangolin'
  },
  {
    path: '/tutorials/earn-png',
    component: EarnPng,
    exact: true,
    layout: Layout,
    title: 'Earn PNG - Pangolin'
  },
  {
    path: '/tutorials/stake-png',
    component: StakePng,
    exact: true,
    layout: Layout,
    title: 'Stake PNG - Pangolin'
  },
  {
    path: '/faq',
    component: Faq,
    exact: true,
    layout: Layout,
    title: 'FAQ - Pangolin'
  },
  {
    path: '/pangolin_v2',
    component: PangolinV2,
    exact: true,
    layout: Layout,
    title: 'Introducing Pangolin V2'
  },
];
export default routes;
