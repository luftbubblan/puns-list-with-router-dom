import React, {useState} from 'react'
import '../style.css';
import styled from 'styled-components'


const NewPun = () => {
    const [pun, setPun] = useState("");

    const handleChange = (e)  => {
        setPun(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewPun();

        setPun("");
    }

    const createNewPun = async() => {
        try {
            const punObj = {
                content: pun
            }
            const JSONPun = JSON.stringify(punObj);

            const response = await fetch('https://puns-app.herokuapp.com/puns', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSONPun
            });

            if(!response.ok) {
                throw new Error('API Error');
            }

        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className='Wrapper'>
            <h2>Create a new Pun</h2>

            <PunForm onSubmit={handleSubmit}>
                <label>Pun content:</label>
                <input type="text" name="pun" value={pun} onChange={handleChange} />

                <button>Submit Pun</button>
            </PunForm>
        </div>
    )
}

const PunForm = styled.form`

`;

export default NewPun