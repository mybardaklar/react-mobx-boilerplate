import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('CounterStore')
@observer
class Counter extends Component {
  render() {
    const { CounterStore } = this.props;

    return (
      <div>
        <h1>Counter: { CounterStore.counter }</h1>
        <button onClick={ CounterStore.decrement }>Decrement -</button>
        <button onClick={ CounterStore.increment }>Increment +</button>
        <br/>
        <br/>
      </div>
    )
  }
}

export default Counter;
