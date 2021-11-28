import Layout from 'components/Layout';
import { Faq } from 'pages/Faq';
import { PangolinMain } from 'pages/HomePage';
import { Litepaper } from 'pages/Litepaper';
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
  },
  {
    path: '/litepaper',
    component: Litepaper,
    exact: true,
    layout: Layout,
  },
  {
    path: '/tutorials',
    component: Tutorials,
    exact: true,
    layout: Layout,
  },
  {
    path: '/tutorials/getting-started',
    component: GettingStarted,
    exact: true,
    layout: Layout,
  },
  {
    path: '/tutorials/manage-liquidity',
    component: ManageLiquidity,
    exact: true,
    layout: Layout,
  },
  {
    path: '/tutorials/swap-tokens',
    component: SwapTokens,
    exact: true,
    layout: Layout,
  },
  {
    path: '/tutorials/transfer-from-ethereum',
    component: TransferFromEtherenum,
    exact: true,
    layout: Layout,
  },
  {
    path: '/tutorials/earn-png',
    component: EarnPng,
    exact: true,
    layout: Layout,
  },
  {
    path: '/tutorials/stake-png',
    component: StakePng,
    exact: true,
    layout: Layout,
  },
  {
    path: '/faq',
    component: Faq,
    exact: true,
    layout: Layout,
  },
];
export default routes;
