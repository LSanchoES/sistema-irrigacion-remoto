import React from "react";
import { Humedad } from "../components/ControlComponents/Humedad";
import { Temperatura } from "../components/ControlComponents/Temperatura";
import { ElectroValve1Card } from "../components/ElectroValveComponents/ElectroValve1Card";
import { ElectroValve2Card } from "../components/ElectroValveComponents/ElectroValve2Card";
import { ElectroValve3Card } from "../components/ElectroValveComponents/ElectroValve3Card";
import { Reloj } from "./ControlComponents/Reloj";
import { Camera } from "./ControlComponents/Camera";

export const Dashboard = () => {

	return (
		<>
			<div className="dashboard__container">
				<Reloj />
				<div className="dashboard__valves">
					<ElectroValve1Card />
					<ElectroValve2Card />
					<ElectroValve3Card />
				</div>
				<div className="dashboard__control-components">
					<Temperatura />
					<Humedad />
				</div>

				<Camera />
				{/* <div className="dashboard__sidebar">

				</div> */}


			</div>
		</>
	);
};
