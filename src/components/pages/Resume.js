import React from 'react';
import '../../index.css'

function Resume () {
    return (
        <div className='Container h-75 d-flex justify-content-center text-center align-items-center' name='Resume-content-container' >
            <div className='d-flex flex-column' name='Resume-link-container' >
                <a className='text-decoration-none text-dark mb-5' href='https://docs.google.com/document/d/1p_4X0p3j9fx6Eo-koN7u7Hrsyx1sVyVK7d1kcbVvIJ4/edit?usp=sharing' target={'_blank'}>
                    <h4>Click here to check out my resume!</h4>
                </a>
                <div className='mt-5'>
                    <h3>
                        I excel in the following technologies:
                    </h3>
                    <ul className='p-2'>
                        JavaScript
                    </ul>
                    <ul className='p-2'>
                        MongoDB
                    </ul>
                    <ul className='p-2'>
                        GraphQL
                    </ul>
                </div>
            </div>
            

        </div>
    )
}

export default Resume
