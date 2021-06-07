import moment from "moment";
import React, { useRef, useState } from "react";
import { ElectroValveTimer } from "./ElectroValveTimer";

export const ElectroValve1Card = () => {
	//NOW TIME
	// const time = moment().format("HH:mm:ss");
	const time = moment().valueOf(); //UNIQUE ID

	//NEW COMPONENT
	const [enterTimer, setEnterTimer] = useState([]);
	//NEW COMPONENT ID
	const [timerNumber, setTimerNumber] = useState(1);
	//NEW COMPONENT REF
	const timerComponents = useRef([])
	//REMOVE TIMER COMPONENT
	const removeTimer = () => {
	
		 setTimerNumber( timerNumber > 0 ? timerNumber => timerNumber - 1 : timerNumber);
		 timerComponents.current[time].remove()
	}

	//ADD TIMER COMPONENT
	const newTimer = () => {

		
		setEnterTimer(
			enterTimer.concat(
				<section className="dashboard__timer-section"key={time} ref={item => (timerComponents.current[time] = item)} id={time}>
					<i className="fas fa-trash" onClick={removeTimer}></i>

					<ElectroValveTimer
						initId={`init-valve1-${timerNumber}`}
						timerId={`timer-valve1-${timerNumber}`}
						/>
				</section>
			)
			);
		setTimerNumber(timerNumber => timerNumber+1);
	};
	return (
		<div className="dashboard__valve-card">
			<div className="dashboard__valve-card-topbar">
				<h1>Valve 1</h1>
				<h2>
					<i className="far fa-plus-square" onClick={newTimer}></i>
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
