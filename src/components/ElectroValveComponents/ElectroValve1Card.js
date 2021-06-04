import React from 'react'
import { ElectroValve1Status } from './ElectroValve1Status'

export const ElectroValve1Card = () => {
    return (
        <div className="dashboard__valve-card">
            
            <h1>Valve 1</h1>
            <h2 className="active"><i className="fas fa-power-off"></i></h2>
            <ElectroValve1Status />
        </div>
    )
}
