import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, increment, decrement } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    counter: state.counter.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onIncrement: e => dispatch(increment()),
    onDecrement: e => dispatch(decrement())
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  render() {
    const { robots } = this.state;
    const { searchField, counter, onSearchChange, onIncrement, onDecrement } = this.props;

    const filteredRobots = robots.filter(
      robot => robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return !robots.length ?
      <h1>Loading...</h1> :
      (
        <div className="tc">
          <h1>RoboFriends</h1>
          <button onClick={onIncrement}>+</button>
          <h2>Counter: {counter}</h2>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);