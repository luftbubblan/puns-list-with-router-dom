import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";

const Pun = () => {
	const [pun, setPun] = useState([]);
    const [punDate, setPunDate] =useState('');
	let params = useParams();

    const fetchPun = async() => {
        try {
            const response = await fetch(`https://puns-app.herokuapp.com/puns/${params.postID}`)
            const data = await response.json();
            setPun(data);
            setPunDate(data.date.slice(0, 10))

        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPun();
    }, [])


	return (
		<SinglePunWrapper>
			<Content>{pun.content}</Content>
            <Wrapper>
                <p>Pun ID: {pun._id}</p>
                <Date>{punDate}</Date>
            </Wrapper>
		</SinglePunWrapper>
	)
}

const SinglePunWrapper = styled.article`
    background-color: black;
    color: #FF9408;
    display: flex;
    flex-flow: column;
    margin: 50px 300px 0 300px;
    padding: 30px 0;
    border-radius: 5px;
	min-height: 70vh;
`;

const Content = styled.p`
    font-size: 20px;
`;

const Wrapper = styled.div`
    margin-top: auto;
`;

const Date = styled.i`
    color: lightgray;
`;

export default Pun