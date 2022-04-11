import React, {useState, useEffect} from 'react'
import PunItem from '../components/PunItem';
import '../style.css';
import { Link } from "react-router-dom";
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
        <div className='Wrapper'>
            <TopRow>
                <div>Invisible</div>
                <h2>All the puns</h2>
                <Link to="/newPun">Make new pun</Link>
            </TopRow>
            <section>
                {puns.map(pun => <PunItem key={pun._id} pun={pun}/>)}
            </section>
        </div>
    )
}

const TopRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 70px;
    a {
        font-size: 18px;
		text-decoration: none;
		color: #FF9408;
		&:hover {
			color: #B2002F;
		}
    }
    div {
        visibility: hidden;
    }
`;

export default Puns