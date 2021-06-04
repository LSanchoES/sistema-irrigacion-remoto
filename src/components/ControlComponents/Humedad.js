import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const Humedad = () => {

    const percentage = 66;


    return (
        <div div className="dashboard__control-components">

                <h1>Humidity</h1> 
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
    )
}
