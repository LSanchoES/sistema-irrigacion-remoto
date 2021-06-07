import React  from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import { Dashboard } from '../components/Dasboard';


export const AppRouter = () => {
  

    return (
        <Router>
            <div>
                <Switch>                     
                    <Route exact path="/" component={ Dashboard } />
                </Switch>
            </div>
        </Router>
    )
}