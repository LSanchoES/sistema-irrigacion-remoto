import React, { useEffect, useState } from 'react';
import { apiResp } from "./api/apiResp";

const App = () => {

  // PRUEBA PETICIONES AJAX PARA PROYECTO (GET Y POST CON AXIOS)

  
  // //Api petition COMPLETE INFO
	
	// const apiModel = 'https://jsonplaceholder.typicode.com/posts'
	
  // const [model, setModel] = useState('')

  // const user = {
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1
  // }
  // const headers ={
  //   'Content-type': 'application/json; charset=UTF-8',
  // }
  
  // const postData = async () => {
  //   const posting = await apiResp.post(apiModel, user , headers)
  //   .then((res) => {
  //     console.log("RESPONSE RECEIVED: ", res);
  //   })
  //   .catch((err) => {
  //     console.log("AXIOS ERROR: ", err);
  //   })
  // }

  // useEffect(() => {
    
  //   postData()
  // }, [])

	// const getData = async () => {
  //   const resp = await apiResp.get(apiModel);
	// 	setModel(resp);
	// };
  
  // useEffect(() => {
  //   model.length < 1 ?
  //   getData()
  //   :
  //   console.log(model.data)
  // }, [model]);



  return (
    <div className="static__title">
      Irrigation App
    </div>
  )
}

export default App
