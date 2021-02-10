import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../views/Home'
import ShowDetails from '../views/ShowDetails'
import MoviesPage from '../views/MoviesPage'
import Cast from '../views/Cast'
import Reviews from '../views/Reviews'


const func = () => {

    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=7f708811f1643542b21c8f4bf6e8e2f6`)
        .then(res => res.json()).then(console.log);
    
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/movies'} exact component={MoviesPage}/>
                <Route path={'/movies/:movieId'} exact  component={ShowDetails} />
                <Route path={'/movies/:movieId/cast'} component={Cast} />
                <Route path={'/movies/:movieId/reviews'} component={Reviews} />
            </Switch>
        </Layout>
    )
}
export default func;