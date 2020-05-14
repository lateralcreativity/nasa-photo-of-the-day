import React, { useState, useEffect } from "react";
import axios from 'axios'
import APOD from './components/APOD'
import Header from './components/Header'
import Loading from './components/Loading'
import { BASE_URL, API_KEY } from './constants'
import styled from 'styled-components';
import "./App.css";

const StyledApp = styled.div`
width: 100%;
min-height: 100vh;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

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
    <StyledApp className="App">
      {
        !data.url ? <Loading>Loading...</Loading>
        :
        <>
          <Header date={data.date} />
          <APOD title={data.title} imgUrl={data.url} explanation={data.explanation} />
        </>
      }
    </StyledApp>
  );
}

export default App;
