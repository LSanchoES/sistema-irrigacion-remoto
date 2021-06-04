import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const ElectroValve1Status = () => {

    const prevent = (e) =>{
        e.preventDefault()
    }
    return (
        <>
        <div className="dashboard__valve-status">
        </div> 
        </>
    )
}
