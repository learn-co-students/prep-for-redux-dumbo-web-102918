import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  count: 0
}

updateCount = (count) =>{
  this.setState({count: count})
}

  render() {
    return (
      <div className="App">
        <Header count={this.state.count}/>
        <Counter updateCount={this.updateCount}/>
      </div>
    );
  }
}

class Header extends Component {


  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };



  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }),()=>this.props.updateCount(this.state.count));
  
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }),()=> this.props.updateCount(this.state.count));

  };


  render() {
    return (
      <div className="Counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
