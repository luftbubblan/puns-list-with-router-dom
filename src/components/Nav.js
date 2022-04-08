import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div >
			<StyledList>
				<Link to="">Home</Link>
				<Link to="puns">Puns</Link>
				<Link to="about">About</Link>
				<Link to="contact">Contact</Link>
			</StyledList>
		</div>
	)
}

const StyledList = styled.nav`
    list-style-type: none;
    margin: 0;
    padding: 0;
	a {
		font-size: 20px;
		margin: 16px;
		text-decoration: none;
		color: #FF9408;
		&:hover {
			color: #B2002F;
		}
	}
`;

export default Nav