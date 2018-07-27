import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }
    filteredRobots = robots => {
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField);
        });
    }
    render() {
        const { onSearchChange, robots, isPending } = this.props;
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
                    <CardList robots={this.filteredRobots(robots)} />
                </Scroll>
            </div>
        );
    }
}

export default MainPage;