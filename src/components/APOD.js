import React from 'react';

export default function APOD(props){
    const { title, imgUrl, explanation} = props;
    if (!imgUrl) return <h3>Loading...</h3>
    return (
        <div className="apod">
            <h2>{title}</h2>
            <img src={imgUrl} alt=""/>
            <p>{explanation}</p>
        </div>
    )
}

