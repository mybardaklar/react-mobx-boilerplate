import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import DefaultLayout from '../components/Layouts/DefaultLayout';

class User extends Component {
  static getInitialProps({ query }) {
    return query;
  }

  render() {
    console.log(this.props);
    return (
      <DefaultLayout title="Counter">
        <h1>Counter: { this.props.username }</h1>
      </DefaultLayout>
    );
  };
};

export default User;
