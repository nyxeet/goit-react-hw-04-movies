import React, { Component } from 'react'
import api from '../api/tv-api'
import getQueryParams from '../utils/getQueryParams';
import Searchbox from '../components/Searchbox'


class MoviesPage extends Component {
    state = {
        shows: null,
    }
    componentDidMount() {

        const { query } = getQueryParams(this.props.location.search);
        if (query) {
            api
                .fetchShowWithQuery(query).then(shows => this.setState({shows}))
        }
    }
    

    handleChangeQuery = query => {
        this.props.history.push({
            ...this.props.location,
            search: `query=${query}`,
        });
    }
    render() {
        return (
            <div>
                <Searchbox onSubmit={this.handleChangeQuery} />
            </div>
        )
    }
}

export default MoviesPage;