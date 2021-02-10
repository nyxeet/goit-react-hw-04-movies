import React from 'react'
import api from '../api/tv-api'
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../views/Home'


const func = () => {

    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=7f708811f1643542b21c8f4bf6e8e2f6`)
        .then(res => res.json()).then(console.log);
    
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact component={Home} />
            </Switch>
        </Layout>
    )
}
export default func;