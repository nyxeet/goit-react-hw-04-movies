import { lazy } from 'react'

export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: lazy(() => import('./views/HomePage' /* webpackChunkName: "home-page" */))
    },
    {
        path: '/movies',
        label: 'Movies',
        exact: true,
        component: lazy(() => import('./views/MoviesPage' /* webpackChunkName: "movies" */))
    },
    {
        path: '/movies/:movieId',
        label: 'Home',
        exact: true,
        component: lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName: "movie-page" */))
    },
    {
        path: '/movies/:movieId/cast',
        label: 'Home',
        exact: true,
        component: lazy(() => import('./views/Cast' /* webpackChunkName: "cast-page" */))
    },
    {
        path: '/movies/:movieId/reviews',
        label: 'Home',
        exact: true,
        component: lazy(() => import('./views/Reviews' /* webpackChunkName: "reviews-page" */))
    },

]