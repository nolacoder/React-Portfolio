import React from 'react';
import '../../index.css'
import Project from '../Project';

function Portfolio () {
    return (
        <div className='text-center' name="portoflio-page-container" >
            <div className='container p-2 m-3' name="portfolio=-header-container">
                <h2>Check out some of my projects!</h2>
            </div>
            <div className='container d-flex flex-row flex-wrap justify-content-middle' name="projects-container">
                <Project/>
            </div>
            
        </div>
    )
}

export default Portfolio
