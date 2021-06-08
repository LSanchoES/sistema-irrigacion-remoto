import React, { useRef, useState } from "react";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import Swal from 'sweetalert2';

export const ElectroValveTimer = (props) => {
	//Time Slector

    // REFS
	const initRef = useRef("");
	const timerRef = useRef("");
	const formCardRef = useRef("");
	const formCardSectionRef = useRef("");
	const buttonCardRef = useRef("");

	//VALIDATION

	const [isDisabled, setisDisabled] = useState(false);

	const handleTimeSelect = (e) => {

		e.preventDefault();

		let initHour = e.target[0].value;
		let setMins = e.target[1].value;

		
		if(initHour.length === 0) 
		{
			initRef.current.classList.add("invalid")
		}
		if(setMins.length === 0) 
		{
			timerRef.current.classList.add("invalid")
		}

		if(initHour.length === 0 || setMins.length === 0) 
		{	
			//FORM INVALID =>
			Swal.fire({
				title: 'Please complete all fields',
				text: 'Hour and Timer ',
				icon: 'error',
				confirmButtonText: 'Ok'
		  })};
		if(initHour.length !== 0 && setMins.length !== 0) {
			//FORM VALID => ALERT
			(Swal.fire({
			title: 'Are you sure?',
			text: 'Irrigation will start in selected time',
			icon: 'warning',
			confirmButtonText: 'Yes',
			showDenyButton: true
		  		}).then((result) => {  

					
					if (result.isConfirmed) {   
						Swal.fire('Irrigation programmed', '', 'success') 
						//FORM VALID => STYLES
						formCardRef.current.classList.add("active-hour")
						buttonCardRef.current.classList.add("active-hour-button")
						formCardSectionRef.current.classList.add("active-hour")
						//FORM VALID => ACTION
						setisDisabled(true)

					} else if (result.isDenied) {    
						Swal.fire('Changes are not saved', '', 'info')  
					 }
				})
		  	);

		}
	};

	//Placeholder Timer
	const [timer01, setTimer01] = useState("");
	const handleChangeTimer = (event) => {
		setTimer01(event.target.value);
	};
	//Placeholder Init
	const [init01, setInit01] = useState("");
	const handleChangeInit = (event) => {
		setInit01(event.target.value);
	};


	return (
		<>
			<form className="valves__time-form " 
			noValidate onSubmit={handleTimeSelect}
			ref={formCardRef}
			>
			<section>
			<InputLabel id="label-init-valve1-01">Init</InputLabel>
			<InputLabel id="label-timer-valve1-01">Time</InputLabel>
			</section>
			<section className="valves__selectors" ref={formCardSectionRef}>
				<Select
					labelId="label-init-valve1-01"
					id={props.initId}
					value={init01}
					onChange={handleChangeInit}
					ref={initRef}
					disabled={isDisabled}
				>
					<MenuItem value={0}>00:00</MenuItem>
					<MenuItem value={1}>01:00</MenuItem>
					<MenuItem value={2}>02:00</MenuItem>
					<MenuItem value={3}>03:00</MenuItem>
					<MenuItem value={4}>04:00</MenuItem>
					<MenuItem value={5}>05:00</MenuItem>
					<MenuItem value={6}>06:00</MenuItem>
					<MenuItem value={7}>05:00</MenuItem>
					<MenuItem value={8}>08:00</MenuItem>
					<MenuItem value={9}>09:00</MenuItem>
					<MenuItem value={10}>10:00</MenuItem>
					<MenuItem value={11}>11:00</MenuItem>
					<MenuItem value={12}>12:00</MenuItem>
					<MenuItem value={13}>13:00</MenuItem>
					<MenuItem value={14}>14:00</MenuItem>
					<MenuItem value={15}>15:00</MenuItem>
					<MenuItem value={16}>16:00</MenuItem>
					<MenuItem value={17}>17:00</MenuItem>
					<MenuItem value={18}>18:00</MenuItem>
					<MenuItem value={19}>19:00</MenuItem>
					<MenuItem value={20}>20:00</MenuItem>
					<MenuItem value={21}>21:00</MenuItem>
					<MenuItem value={22}>22:00</MenuItem>
					<MenuItem value={23}>23:00</MenuItem>
				</Select>
				<Select
					labelId="label-timer-valve1-01"
					id={props.timerId}
					value={timer01}
					onChange={handleChangeTimer}
					ref={timerRef}
					disabled={isDisabled}
				>
					<MenuItem value={5}>5 min</MenuItem>
					<MenuItem value={15}>15 min</MenuItem>
					<MenuItem value={30}>30 min</MenuItem>
					<MenuItem value={45}>45 min</MenuItem>
					<MenuItem value={59}>60 min</MenuItem>
				</Select>
				</section>
				<input type="submit" value="Done" ref={buttonCardRef} />

			</form>
		</>
	);
};