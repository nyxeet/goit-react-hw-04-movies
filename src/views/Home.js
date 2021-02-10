import React, { Component } from 'react';
import api from '../api/tv-api'

class Home extends Component {
    state = {
        shows: null,
    }
    componentDidMount() {
        api.fetchPopular().then(shows => this.setState({shows: shows.results}))
    }
    
    render() {
        const { shows } = this.state;
        return (
            <div>
                <h1>Добро пожаловать!</h1>
                <ul>
                {shows && shows.map(elem => {
                    return <li key={elem.id}>{elem.title}</li>
                })}
                </ul>
            </div>
        )
    }
  
};

export default Home;