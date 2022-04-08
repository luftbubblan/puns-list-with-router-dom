import React from 'react'
import styled from 'styled-components'

const Pun = ({pun}) => {
  return (
    <SinglePunWrapper>
        <b>{pun.content}</b>
        <p>ID: {pun._id}</p>
        <Date>DATE: {pun.date}</Date>
    </SinglePunWrapper>
  )
}

const SinglePunWrapper = styled.article`
    margin-bottom: 50px;
    :first-of-type {
        margin-top: 50px;
    }
`;

const Date = styled.i`
    color: lightgray;
`;

export default Pun