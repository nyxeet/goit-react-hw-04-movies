import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() =>
      import('./views/HomePage' /* webpackChunkName: "home-page" */),
    ),
  },
  {
    path: '/movies',
    label: 'Movies',
    exact: true,
    component: lazy(() =>
      import('./views/MoviesPage' /* webpackChunkName: "movies" */),
    ),
  },
  {
    path: '/movies/:movieId',
    label: 'Home',
    exact: false,
    component: lazy(() =>
      import('./views/MovieDetailsPage' /* webpackChunkName: "movie-page" */),
    ),
  },
];
