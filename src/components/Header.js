import React from 'react'
import styled from 'styled-components'
import Nav from './Nav';
import { Link } from "react-router-dom";

function Header() {
    return (
        <StyledHeader>
            <HeaderPageName to=''><h1>All the puns</h1></HeaderPageName>
            
            <HeaderNav>
                <Nav />
            </HeaderNav>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    height: 120px;
    background-color: #29292d;
    padding: 0 200px;
    display: flex;
    align-items: center;
    border-bottom: 5px solid black;
    margin-bottom: 50px;
`;

const HeaderPageName = styled(Link)`
    text-decoration: none;
    float: left;
    color: #FF9408;  
    margin-right: 100px;
    &:hover {
        color: #B2002F;
    }
`;


const HeaderNav = styled.div`
    margin-left: auto;
        li {
            float: left;
        }
`;



export default Header