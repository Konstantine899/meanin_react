import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  updateCounter(value) {
    this.setState({ counter: this.state.counter + value });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          Счетчик <strong>{this.props.counter}</strong>
        </h1>
        <div>
          <button onClick={this.props.onAdd}>Добавить</button>
          <button onClick={this.props.onSub}>Вычесть</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({ type: 'ADD' }),
    onSub: () => dispatch({ type: 'SUB' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
