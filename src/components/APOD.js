import React from 'react';

export default function APOD(props){
    const { title, imgUrl, explanation} = props;
    return (
        <div>
            <h1>{title}</h1>
            <img src={imgUrl} alt=""/>
            <p>{explanation}</p>
        </div>
    )
}

