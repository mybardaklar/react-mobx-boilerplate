import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'mobx-react';

import initializeStore from '../stores';

class MobxApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return(
      <Container>
        <Head>
          <link rel="stylesheet" href="/static/css/main.min.css"/>
        </Head>
        <Provider { ...initializeStore }>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  };
};

export default MobxApp;
