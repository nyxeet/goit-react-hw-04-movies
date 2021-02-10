import React, { Component } from 'react'
import api from '../api/tv-api'


class Cast extends Component {
    state = {
        show: null,
    }
    componentDidMount() {
        api
            .fetchMovieCast(this.props.match.params.movieId)
            .then(show => this.setState({ show }))
    }
    
    
    render() {
        const { show } = this.state;
        return (
            <ul>
                {show && show.cast.map(elem => <p>{elem.name}</p>)}
            </ul>
        )
    }
}

export default Cast;