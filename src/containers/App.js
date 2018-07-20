import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField);
        });

        return isPending ?
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
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
});

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);