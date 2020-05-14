import React from 'react';

export default function APOD(props){
    const { title, imgUrl, explanation} = props;
    return (
        <div className="apod">
            <h2>{title}</h2>
            <img src={imgUrl} alt=""/>
            <p>{explanation}</p>
        </div>
    )
}

