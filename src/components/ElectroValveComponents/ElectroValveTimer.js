import React, { useRef, useState } from "react";
import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import Swal from 'sweetalert2';

export const ElectroValveTimer = (props) => {
	//Time Slector
    console.log(props)
	const timerRef = useRef("");

	const handleTimeSelect = (e) => {

		e.preventDefault();

		let initHour = e.target[0].value;
		let setMins = e.target[1].value;
        
		setMins.length === 0
			? timerRef.current.classList.add("invalid")
			: console.log("Irrigation starting...");
		setMins.length === 0
			? (Swal.fire({
                title: 'Invalid frame time',
                text: 'Please select a frame time',
                icon: 'error',
                confirmButtonText: 'Ok'
              }))
			: (Swal.fire({
                title: 'Frame time selected',
                text: 'Irrigation programmed',
                icon: 'success',
                confirmButtonText: 'Ok'
              }))
	};

	//Placeholder Timer
	const [timer01, setTimer01] = useState("");
	const handleChange = (event) => {
		setTimer01(event.target.value);
	};


	return (
		<>
			<form className="valves__time-form" noValidate onSubmit={handleTimeSelect}>
				<TextField
					id={props.initId}
					label="Init Hour"
					type="time"
					defaultValue="00:00"
					className="dashboard__textfield"
					InputLabelProps={{
						shrink: true,
					}}
					inputProps={{
						step: 300, // 5 min
					}}
				/>
				<InputLabel id="label-timer-valve1-01">Irrigation Time</InputLabel>
				<Select
					labelId="label-timer-valve1-01"
					id={props.timerId}
					value={timer01}
					onChange={handleChange}
					ref={timerRef}
				>
					<MenuItem value={5}>5 min</MenuItem>
					<MenuItem value={15}>15 min</MenuItem>
					<MenuItem value={30}>30 min</MenuItem>
					<MenuItem value={45}>45 min</MenuItem>
					<MenuItem value={59}>60 min</MenuItem>
				</Select>
				<input type="submit" value="Done" />
			</form>
		</>
	);
};
