import React  from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import { CameraScreen } from '../components/ControlComponents/CameraScreen';
import { Dashboard } from '../components/Dasboard';


export const AppRouter = () => {
  

    return (
        <Router>
            <div>
                <Switch>                     
                    <Route exact path="/" component={ Dashboard } />
                    <Route exact path="/camera" component={ CameraScreen } />
                </Switch>
            </div>
        </Router>
    )
}