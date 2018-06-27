import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        return this.props.robots.map(robot => <Card key={robot.id} name={robot.name} email={robot.email} />);
    }
}

export default CardList;