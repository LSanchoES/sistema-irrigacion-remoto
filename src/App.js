import React, { useEffect, useState } from 'react';
import { apiResp } from "./api/apiResp";
import { Head } from './components/Head';

const App = () => {
  
  // PRUEBA PETICIONES AJAX PARA PROYECTO (GET Y POST CON AXIOS)
  
  
  //POST on / off
  
  const apiOnOff = 'http://127.0.0.1:5000/api/v1/resources/electro-valve/on'
  
  useEffect(() => {
    
    const onAndOff = {
      on: "true"
    }
    
    // const headers ={
    //   'Content-type': 'application/json; charset=UTF-8',
    // }
     
        apiResp.post(apiOnOff, onAndOff) //, headers (si se pusieran)
        .then((resp) => {
          console.log("RESPONSE RECEIVED: ", resp.data);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
      
  
    }, [])
  // Model Request
	
	const apiModel = 'http://127.0.0.1:5000/api/v1/resources/electro-valve/model';
	
  const [model, setModel] = useState('')
  
	const getModel = async () => {
    const resp = await apiResp.get(apiModel);
		setModel(resp);
	};

  useEffect(() => {
    model.length < 1 ?
    getModel()
    :
    console.log(model.data)
  }, [model]);

  // Pin Request
	const apiPin = 'http://127.0.0.1:5000//api/v1/resources/electro-valve/pin';
	
  const [pin, setPin] = useState('')
  
	const getPin = async () => {
    const resp = await apiResp.get(apiPin);
		setPin(resp);
	};

  useEffect(() => {
    pin.length < 1 ?
    getPin()
    :
    console.log(pin.data)
  }, [pin]);
  
  // isOn Request
	const isOnApi = 'http://127.0.0.1:5000//api/v1/resources/electro-valve/ison';
	
  const [isOn, setIsOn] = useState('')
  
	const getisOn = async () => {
    const resp = await apiResp.get(isOnApi);
		setIsOn(resp);
	};

  useEffect(() => {
    isOn.length < 1 ?
    getisOn()
    :
    console.log(isOn.data)
  }, [isOn]);
  
  
  
  
  return (
    <>
      <Head props = {model.data}/>

    </>
  )
}

export default App
