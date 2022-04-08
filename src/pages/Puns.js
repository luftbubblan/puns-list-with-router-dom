import React, {useState, useEffect} from 'react'
import Pun from '../components/Pun';
import styled from 'styled-components'

const Puns = () => {
    const [puns, setPuns] = useState([]);

    const fetchPosts = async() => {
        try {
            const response = await fetch('https://puns-app.herokuapp.com/puns')
            const data = await response.json();
            setPuns(data);

        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <PunList>
            <h2>All the puns</h2>
            {puns.map(pun => <Pun key={pun._id} pun={pun}/>)}
        </PunList>
    )
}

const PunList = styled.div `
    background-color: beige;
    display: flex;
    flex-flow: column;
    max-width: 350px;
    margin: 0 auto;
`;

export default Puns