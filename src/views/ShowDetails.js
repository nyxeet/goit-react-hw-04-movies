import React, { Component } from 'react'
import api from '../api/tv-api'


class ShowDetails extends Component {
    state = {
        show: null,
    }
    componentDidMount() {
        api.
            fetchShowDetails(this.props.match.params.movieId).then(show => this.setState({show}))
    }
    render() {
        return (
            <div>
                {this.state.show && <p>{this.state.show.id}</p>}
            </div>
        )
    }
}

export default ShowDetails;