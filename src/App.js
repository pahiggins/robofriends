import React, { Component } from 'react';
import { robots } from './robots';
import SearchBox from './SearchBox';
import CardList from './CardList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots,
            searchText: ''
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }
    onSearchChange(e) {
        this.setState({
            searchText: e.target.value
        });
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchText);
        });

        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;