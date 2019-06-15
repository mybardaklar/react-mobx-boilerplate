import React, { Fragment } from 'react';
import Head from 'next/head';

import { Header } from '../../partials';

const DefaultLayout = props => {
  return(
    <Fragment>
      <Head>
        <title>{ props.title }</title>
      </Head>
      <Header />
      {props.children}
    </Fragment>
  );
};

export default DefaultLayout;
