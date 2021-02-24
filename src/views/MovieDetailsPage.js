import React, { Suspense, Component, lazy } from 'react';
import api from '../api/tv-api';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ShowDetails extends Component {
  state = {
    show: null,
  };
  componentDidMount() {
    api
      .fetchShowDetails(this.props.match.params.movieId)
      .then(show => this.setState({ show }));
  }
  render() {
    const { show } = this.state;
    const defaultImgUrl = `https://image.tmdb.org/t/p/w500`;
    const lazyCast = lazy(() =>
      import('./Cast' /* webpackChunkName: "cast" */),
    );
    const lazyReviews = lazy(() =>
      import('./Reviews' /* webpackChunkName: "reviews" */),
    );
    return (
      <div>
        {show && (
          <div>
            <img src={defaultImgUrl + show.poster_path} width="250" />
            <h1>
              {show.original_title}
              {show.original_name}
            </h1>
            <Link
              to={{
                pathname: `/movies/${show.id}/cast`,
                state: { from: this.props.location },
              }}
            >
              <p>cast</p>
            </Link>
            <Link
              to={{
                pathname: `/movies/${show.id}/reviews`,
                state: { from: this.props.location },
              }}
            >
              <p>reviews</p>
            </Link>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Route path="/movies/:movieId/cast" exact component={lazyCast} />
              <Route
                path="/movies/:movieId/reviews"
                exact
                component={lazyReviews}
              />
            </Suspense>
          </div>
        )}
      </div>
    );
  }
}

export default ShowDetails;
