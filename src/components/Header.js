import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #353b48;
color: white;
`

export default function Header(props) {
    const {date} = props;
    return (
        <StyledHeader>
            <h1>Astronomy Picture of the Day</h1>
            <p>{date}</p>
        </StyledHeader>
    )
}