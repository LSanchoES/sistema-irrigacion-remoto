import React  from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import { CameraScreen } from '../components/ControlComponents/CameraScreen';
import { HumedadScreen } from '../components/ControlComponents/HumedadScreen';
import { TemperaturaScreen } from '../components/ControlComponents/TemperaturaScreen';
import { Dashboard } from '../components/Dasboard';
import { ElectroValve1Status } from '../components/ElectroValveComponents/ElectroValve1Status';
import { ElectroValve2Status } from '../components/ElectroValveComponents/ElectroValve2Status.';
import { ElectroValve3Status } from '../components/ElectroValveComponents/ElectroValve3Status';

export const AppRouter = () => {
  

    return (
        <Router>
            <div>
                <Switch>                     
                    <Route exact path="/" component={ Dashboard } />
                    <Route exact path="/electroValve1" component={ ElectroValve1Status } />
                    <Route exact path="/electroValve2" component={ ElectroValve2Status } />
                    <Route exact path="/electroValve3" component={ ElectroValve3Status } />
                    <Route exact path="/temperatura" component={ TemperaturaScreen } />
                    <Route exact path="/humedad" component={ HumedadScreen } />
                    <Route exact path="/camera" component={ CameraScreen } />
                </Switch>
            </div>
        </Router>
    )
}