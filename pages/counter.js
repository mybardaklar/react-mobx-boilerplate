import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import DefaultLayout from '../components/Layouts/DefaultLayout';

@inject('CounterStore')
@observer
class Counter extends Component {
  render() {
    const { CounterStore } = this.props;

    return (
      <DefaultLayout title="Counter">
        <h1>Counter: { CounterStore.counter }</h1>
        <button onClick={ CounterStore.decrement }>Decrement -</button>
        <button onClick={ CounterStore.increment }>Increment +</button>
        <br/>
        <br/>
      </DefaultLayout>
    );
  };
};

export default Counter;
