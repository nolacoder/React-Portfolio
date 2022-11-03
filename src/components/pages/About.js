import React from 'react';
import headshot from '../../JaredHeadshot.jpg'

function About() {
    return (
        <div className='container d-flex flex-column justify-content-center text-center p-2' name='About-Me-content-container'>
            <div name='About-Me-header-container' className='container py-4 m-2'>
                <h1>About Me</h1>
            </div>
            <div className='container m-2' name='Image-container'>
                <img src={headshot} alt='Headshot of Jared Johnson' width="300" height="400"/>
            </div>
            <div className='container m-2' name='About-Me-text-container'>
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
