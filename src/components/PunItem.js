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
    padding: 25px 0;
`;

const PunLink = styled(Link)`
    text-decoration: none;
    color: #FF9408;
    &:hover {
        color: #B2002F;
    }
`;

export default PunItem