import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const PunItem = ({pun}) => {
    return (
        <LinkWrapper>
            <PunLink to={`/puns/${pun._id}`}>{pun.content}</PunLink>
        </LinkWrapper>
    )
}
    
const LinkWrapper = styled.div`
    margin-bottom: 50px;
    :first-of-type {
        margin-top: 30px;
    }
`;

const PunLink = styled(Link)`
    text-decoration: none;
    color: #FF9408;
    &:hover {
        color: #B2002F;
    }
`;

export default PunItem