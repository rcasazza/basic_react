import React, { useState } from 'react';

export const ControlledFormPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input value = {name} onChange={e => setName(e.target.value)} type="text" placeholder="Name" />
            </div>
            <div>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
            </div>
            <div>
                <input value={favoriteColor} onChange={e => setFavoriteColor(e.target.value)} type="text" placeholder="Favorite Color" />
            </div>
            <button onClick={e => {
                alert(`
                    Your name is ${name},
                    your email is ${email},
                    and your favorite color is ${favoriteColor}
                `);
                e.preventDefault();
            }}>Submit</button>
        </form>
    )
}