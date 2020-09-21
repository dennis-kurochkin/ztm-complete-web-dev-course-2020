import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
    setSearchField();
  }

  render() {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter(
      robot => robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return !robots.length ?
      <h1>Loading...</h1> :
      (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);