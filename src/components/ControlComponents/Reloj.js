import React from 'react'
import Clock from 'react-digital-clock';

export const Reloj = () => {
    return (
        <div className="dashboard__control-components">
            <h1>Raspberry Irrigation System</h1>
            <Clock hour12= {false}  />
        </div>
    )
}
