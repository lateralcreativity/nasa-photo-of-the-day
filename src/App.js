import React, { useState, useEffect } from "react";
import axios from 'axios'
import APOD from './components/APOD'
import Header from './components/Header'
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
  if (!data.url) return <h3 className="loading">Loading...</h3>
  return (
    <div className="App">
      <Header date={data.date}/>
      <APOD title={data.title} imgUrl={data.url} explanation={data.explanation}/>
    </div>
  );
}

export default App;
