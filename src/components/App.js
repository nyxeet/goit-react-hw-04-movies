import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import routes from '../routes'


const func = () => {

    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=7f708811f1643542b21c8f4bf6e8e2f6`)
        .then(res => res.json()).then(console.log);
    
    return (
        <Layout>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    {routes.map(route => (
                        <Route key={route.path} {...route} />
                    ))}
                </Switch>
            </Suspense>
        </Layout>
    )
}
export default func;