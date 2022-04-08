import React from 'react'
import styled from 'styled-components'
import Nav from './Nav';

function Footer() {
	return (
		<StyledFooter>
			<Nav />
		</StyledFooter>
	)
}

const StyledFooter = styled.div`
    height: 120px;
    background-color: #29292d;
    display: flex;
    align-items: center;
    border-top: 5px solid black;
    margin-top: 50px;
	justify-content: space-around;
`;

export default Footer