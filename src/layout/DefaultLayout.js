import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import {Header, Footer} from '../partials';

export const DefaultLayout = props => (
  <Fragment>
    <Helmet title={props.title + ' - MobX Boilerplate'} />
    { props.includedHeader ? (<Header />):null}
    <Route {...props} />
    { props.includedFooter ? (<Footer />):null}
  </Fragment>
);

export default DefaultLayout;
