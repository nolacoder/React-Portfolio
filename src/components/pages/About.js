import React from 'react';

function About() {
    return (
        <div name='About-Me-content-container'>
            <div name='About-Me-header-container' className='container py-4'>
                <h1>About Page</h1>
            </div>
            <div name='About-Me-text-container' className='container'>
                <p>
                    Hello and welcome to my portfolio! My name is Jared Johnson and I am a former QA engineer turned Full Stack developer.
                </p>
                <p>
                    I have spent 12 weeks in a rigorous coding bootcamp converting my extensive testing experience into high impact Javascript development skills. From front end rendering to third party API and database routing, I can be a large contributor in many different development scenarios. With my keen eye for detail developed from my testing background and my ability to learn new concepts quickly, I am excited to continue my tech career in the developer's seat!
                </p>
                <p>
                    To see what I can do, take a look at some of my projects!
                </p>
            </div>
        </div>
    );
}

export default About
