import React, { useState } from 'react';
import '../../index.css'

import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='container d-flex flex-column justify-content-center p-2 h-75' name='form-container' >
            <div className='p-2' name='contact-header-container' >
                <h2>Enter your contact info!</h2>
            </div>
            <form className="form w-50">
                <div className="mb-3">
                    <label for="nameInput" className="form-label">Name:</label>
                    <input
                        className='form-control'
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                    />
                </div>
                <div className="mb-3">
                    <label for="emailInput" className="form-label">Email:</label>
                    <input
                        className='form-control'
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-3">
                    <label for="messageInput" className="form-label">Message:</label>
                    <input
                        className='form-control'
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="textarea"
                        placeholder="Message"
                    />
                </div>
                <button className='btn btn-dark' type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div className='m-2'>
                    <h5 className="text-danger p-2">{errorMessage}</h5>
                </div>
            )}
        </div>
    );
}

export default Contact;
