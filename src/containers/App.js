import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../actions';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        };
        // this.onSearchChange = this.onSearchChange.bind(this);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));
    }
    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField);
        });

        return !robots.length ?
            (
            <div className="tc">
                <h2>Loading...</h2>
            </div>
        ) : (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    searchField: state.searchField
});

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);