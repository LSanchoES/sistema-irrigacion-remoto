import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiResp } from "../api/apiResp";
import { Humedad } from "../components/ControlComponents/Humedad";
import { Temperatura } from "../components/ControlComponents/Temperatura";
import { ElectroValve1Card } from "../components/ElectroValveComponents/ElectroValve1Card";
import { ElectroValve2Card } from "../components/ElectroValveComponents/ElectroValve2Card";
import { ElectroValve3Card } from "../components/ElectroValveComponents/ElectroValve3Card";
import { Reloj } from "./ControlComponents/Reloj";
import { Camera } from "./ControlComponents/Camera";
import { TemperaturaScreen } from "./ControlComponents/TemperaturaScreen";

export const Dashboard = () => {
	// PRUEBA PETICIONES AJAX PARA PROYECTO (GET Y POST CON AXIOS)

	//POST on / off

	// const apiOnOff = "http://127.0.0.1:5000/api/v1/resources/electro-valve/on";

	// useEffect(() => {
	// 	const onAndOff = "true";

	// 	// const headers ={
	// 	//   'Content-type': 'application/json; charset=UTF-8',
	// 	// }

	// 	apiResp
	// 		.post(apiOnOff, onAndOff) //, headers (si se pusieran)
	// 		.then((resp) => {
	// 			console.log("RESPONSE RECEIVED: ", resp.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log("AXIOS ERROR: ", err);
	// 		});
	// }, []);
	// // Model Request

	// const apiModel = "http://127.0.0.1:5000/api/v1/resources/electro-valve/model";

	// const [model, setModel] = useState("");

	// const getModel = async () => {
	// 	const resp = await apiResp.get(apiModel);
	// 	setModel(resp);
	// };

	// useEffect(() => {
	// 	model.length < 1 ? getModel() : console.log(model.data);
	// }, [model]);

	// // Pin Request
	// const apiPin = "http://127.0.0.1:5000//api/v1/resources/electro-valve/pin";

	// const [pin, setPin] = useState("");

	// const getPin = async () => {
	// 	const resp = await apiResp.get(apiPin);
	// 	setPin(resp);
	// };

	// useEffect(() => {
	// 	pin.length < 1 ? getPin() : console.log(pin.data);
	// }, [pin]);

	// isOn Request
	// const isOnApi = "http://127.0.0.1:5000//api/v1/resources/electro-valve/ison";

	// const [isOn, setIsOn] = useState("");

	// const getisOn = async () => {
	// 	const resp = await apiResp.get(isOnApi);
	// 	setIsOn(resp);
	// };

	// useEffect(() => {
	// 	isOn.length < 1 ? getisOn() : console.log(isOn.data);
	// }, [isOn]);

	return (
		<>
			<div className="dashboard__container">
				<div className="dashboard__sidebar">
					<Reloj />

					<Humedad />

					<Temperatura />

					<Camera />
				</div>
				<div className="dashboard__content">

					    <div className="dashboard__valves">
					    	<ElectroValve1Card />
					    	<ElectroValve2Card />
					    	<ElectroValve3Card />
					    </div>
      
					    <div className="dashboard__charts">
					    	<TemperaturaScreen />
					    </div>

				</div>
			</div>
		</>
	);
};
