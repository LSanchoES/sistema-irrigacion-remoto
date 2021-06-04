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

            <Popup trigger={<span className="active-hour">00:00</span>} position="right center">
                <form onSubmit={ prevent } className="valves__form">
                    <label for="valve1-00">How much minutes?</label>
                    <input type="number" id="valve1-00" name="valve1-00" min="1" max="59" />
                    <input type="submit" value="Done"/>
                </form>
            </Popup>
            
            <span className="">01:00</span>
            <span className="">02:00</span>
            <span className="">03:00</span>
            <span className="">04:00</span>
            <span className="">05:00</span>
            <span className="">06:00</span>
            <span className="active-hour">07:00</span>
            <span className="">08:00</span>
            <span className="">09:00</span>
            <span className="">10:00</span>
            <span className="">11:00</span>
            <span className="active-hour">12:00</span>
            <span className="">13:00</span>
            <span className="">14:00</span>
            <span className="">15:00</span>
            <span className="">16:00</span>
            <span className="">17:00</span>
            <span className="">18:00</span>
            <span className="">19:00</span>
            <span className="">20:00</span>
            <span className="active-hour">21:00</span>
            <span className="">22:00</span>
            <span className="">23:00</span>
        </div> 
        </>
    )
}
