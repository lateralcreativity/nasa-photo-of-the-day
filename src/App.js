import React, { useState, useEffect } from "react";
import axios from 'axios'
import APOD from './components/APOD'
import { BASE_URL, API_KEY } from './constants'
import "./App.css";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(resolve => {
      setData(resolve.data)
    })
    .catch(error => {
      debugger
    })
  }, [])

  return (
    <div className="App">
      <APOD title={data.title} imgUrl={data.url} explanation={data.explanation}/>
    </div>
  );
}

export default App;
