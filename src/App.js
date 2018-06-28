import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchText: ''
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));
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

        if (this.state.robots.length === 0) {
            return (
                <div className="tc">
                    <h2>Loading...</h2>
                </div>
            );
        } else {
            return (
                <div className="tc">
                    <h2 className="f1">Robofriends</h2>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            );
        }
    }
}

export default App;