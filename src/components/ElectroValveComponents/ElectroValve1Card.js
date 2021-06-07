import moment from "moment";
import React, { useState } from "react";
import { removeArrayItem } from "../../helpers/removeArrayItem";
import { ElectroValveTimer } from "./ElectroValveTimer";

export const ElectroValve1Card = () => {
	//NOW TIME
	// const time = moment().format("HH:mm:ss");
	const time = moment().valueOf(); //UNIQUE ID

	//NEW COMPONENT
	const [enterTimer, setEnterTimer] = useState([]);
	//NEW COMPONENT ID
	const [timerNumber, setTimerNumber] = useState(1);

	console.log(timerNumber)
	//REMOVE TIMER COMPONENT
	const removeTimer = () => {
		setTimerNumber( timerNumber > 0 ? timerNumber => timerNumber - 1 : timerNumber);

		if(enterTimer.length > 1){
			setEnterTimer(enterTimer.splice(timerNumber, timerNumber))
		}else{
			setEnterTimer([])};

		console.log(enterTimer)
	}

	//ADD TIMER COMPONENT
	const newTimer = () => {
		setTimerNumber(timerNumber => timerNumber+1);
		setEnterTimer(
			enterTimer.concat(
				<section className="dashboard__timer-section"key={time}>
				<ElectroValveTimer
					initId={`init-valve1-${timerNumber}`}
					timerId={`timer-valve1-${timerNumber}`}
				/>
				</section>
			)
		);
	};
	return (
		<div className="dashboard__valve-card">
			<div className="dashboard__valve-card-topbar">
				<h1>Valve 1</h1>
				<h2>
					<i className="far fa-plus-square" onClick={newTimer}></i>
					<i class="fas fa-trash" onClick={removeTimer}></i>
				</h2>
				<h2 className="active">
					<i className="fas fa-power-off"></i>
				</h2>
			</div>
			<div>
			{enterTimer}
			</div>
		</div>
	);
};
