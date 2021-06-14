import moment from "moment";
import React, { useRef, useState } from "react";
import { ElectroValveTimer } from "./ElectroValveTimer";
import Swal from 'sweetalert2';



export const ElectroValve3Card = () => {
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
		Swal.fire({
			title: 'Are you sure?',
			text: 'Timer will be remove',
			icon: 'warning',
			confirmButtonText: 'Yes',
			showDenyButton: true
	  }).then((result) => {  
		
		
		//TIMER REMOVE
		if (result.isConfirmed) {  
			
			//ALERT
			Swal.fire('Program was deleted', '', 'success') 
			//ID NUMBER -1 
			setTimerNumber( timerNumber > 0 ? timerNumber => timerNumber - 1 : timerNumber);
			//FRONT TIMER DELETE
			timerComponents.current[time].remove()
			//VALVE ACTIONS =>
			//localstorage
			localStorage.removeItem(`init-valve3-${timerNumber}`);

		} else if (result.isDenied) {    
			Swal.fire('Program was not deleted', '', 'info')  
		 }
	});
	

	}

	//ADD TIMER COMPONENT
	const newTimer = () => {

		if(timerNumber < 6){
		setEnterTimer(
			enterTimer.concat(
				<section className="valves__timer-section"key={time} ref={item => (timerComponents.current[time] = item)} id={time}>
					<i 	className="fas fa-trash" 
						onClick={removeTimer}
						id = {`valve3-${timerNumber}`}
					>
					</i>

					<ElectroValveTimer
						initId={`init-valve3-${timerNumber}`}
						timerId={`timer-valve3-${timerNumber}`}
						/>
				</section>
			)
			);
		setTimerNumber(timerNumber => timerNumber+1);
	}else{
		Swal.fire({
			title: 'Max timers are 5',
			text: 'If you want another timer you need to remove one first',
			icon: 'error',
			confirmButtonText: 'Ok'
		  })
	}
	};
	return (
		<div className="valves__valve-card">
			<div className="valves__valve-card-topbar">
				<h1>Valve 3</h1>
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
