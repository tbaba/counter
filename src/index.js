import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './contexts/counter';
import Counter from './components/counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      count: 0,
    };
  }

  increment() {
    const { count } = this.state;

    this.setState({ count: count + 1 });
  }

  decrement() {
    const { count } = this.state;

    this.setState({ count: count - 1 });
  }

  render() {
    const { count } = this.state;

    return (
      <CounterContext.Provider value={{
        count,
        increment: this.increment,
        decrement: this.decrement
      }}>
        <Counter />
      </CounterContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
