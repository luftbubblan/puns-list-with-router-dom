import React, {useState, useEffect} from 'react'
import PunItem from '../components/PunItem';
import '../style.css';

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
            <h2>All the puns</h2>
            <section>
                {puns.map(pun => <PunItem key={pun._id} pun={pun}/>)}
            </section>
        </div>
    )
}

export default Puns