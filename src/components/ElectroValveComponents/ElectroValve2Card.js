import React from 'react'
import { ElectroValve2Status } from './ElectroValve2Status.'

export const ElectroValve2Card = () => {
    return (
        <div className="dashboard__valve-card">
            <h1>Valve 2</h1>
            <h2 className="inactive"><i className="fas fa-power-off"></i></h2>
            <ElectroValve2Status />
        </div>
    )
}
