import {Home, Counter} from '../pages';

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
    includedHeader: true,
    includedFooter: true
  },
  {
    title: 'Counter',
    path: '/counter',
    component: Counter,
    exact: true,
    includedHeader: true,
    includedFooter: true
  }
];

export default routes;
