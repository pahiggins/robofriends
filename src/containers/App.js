import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
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
        const { robots, searchText } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchText);
        });

        return !robots.length ?
            (
            <div className="tc">
                <h2>Loading...</h2>
            </div>
        ) : (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;