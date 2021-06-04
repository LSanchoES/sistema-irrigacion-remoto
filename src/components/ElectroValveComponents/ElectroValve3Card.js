import React from 'react'
import { ElectroValve3Status } from './ElectroValve3Status'

export const ElectroValve3Card = () => {
    return (
        <div className="dashboard__valve-card">
            <h1>Valve 3</h1>
            <h2 className="active"><i className="fas fa-power-off"></i></h2>
            <ElectroValve3Status />
        </div>
    )
}
