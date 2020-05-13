import React from 'react';

export default function Header(props) {
    const {date} = props;
    return (
        <div className="header">
            <h1>Astronomy Picture of the Day</h1>
            <p>{date}</p>
        </div>
    )
}