import React from 'react';
import styled from 'styled-components';

const StyledAPOD = styled.div`
width: 80%;
margin: 2% 0;
background-color: #f1f2f6;
border-radius: 25px;
display:flex;
flex-direction: column;
align-items: center;

img{
width: 40%;
border-radius: 15px;
}

p{
width: 60%;
}
`

export default function APOD(props){
    const { title, imgUrl, explanation} = props;
    return (
        <StyledAPOD>
            <h2>{title}</h2>
            <img src={imgUrl} alt=""/>
            <p>{explanation}</p>
        </StyledAPOD>
    )
}

