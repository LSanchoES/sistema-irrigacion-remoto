import moment from 'moment'
import React, { useState } from 'react'
import Countdown from 'react-countdown';

export const ElectroValve1Card = () => {
    const time = moment().format('HH:mm:ss');
    console.log(time)


    const handleTimeSelect = (e) => {
        e.preventDefault()
    }
    return (
        <div className="dashboard__valve-card">
            
            <h1>Valve 1</h1>
            <h2 className="active"><i className="fas fa-power-off"></i></h2>
            <form onSubmit={handleTimeSelect} className="dashboard__time-form">
            
                 <label for="valve1-01">Init Time </label>
                 <input type="time" id="valve1-01" name="valve1-01" />
                 <input type="submit" value="Done"/>
            </form>
                 {/* <Countdown date={Date.now() + 10000} /> */}
        </div>
    )
}
