import moment from "moment";
import React, { useState } from "react";

import { ElectroValveTimer } from "./ElectroValveTimer";


export const ElectroValve1Card = () => {
	const time = moment().format("HH:mm:ss");
	// console.log(time);

	return (
		
		<div className="dashboard__valve-card">

			<h1>Valve 1</h1>
			<h2 className="active">
				<i className="fas fa-power-off"></i>
			</h2>
			<ElectroValveTimer 
				initId="init-valve1-01"
				timerId="timer-valve1-01"	
			/>
			<ElectroValveTimer 
				initId="init-valve1-02"
				timerId="timer-valve1-02"	
			/>

		</div>
	);
};
