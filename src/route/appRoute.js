import React  from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import App from '../App';

export const AppRouter = () => {
  

    return (
        <Router>
            <div>
                <Switch>                     
                    <Route exact path="/" component={ App } />
                </Switch>
            </div>
        </Router>
    )
}