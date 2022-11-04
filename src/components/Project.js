import React from 'react';
import couchImage from '../assets/Couch-Potato.png';
import baseImage from '../assets/Best Artist Search Ever.png';
import weatherImage from '../assets/Weather app.png';
import horiseonImage from '../assets/Horiseon refactor.png';
import bootImage from '../assets/Study guide.png';
import textImage from '../assets/Text Editor Screenshot.png';


function Project() {
    const projects = [
        {
            title: "Couch Potato",
            desc: "Interactive Movie Database! Save your collection!",
            liveUrl: "https://infinite-river-93616.herokuapp.com/",
            gitHubUrl: "https://github.com/mbronstein1/Couch-Potato",
            image: couchImage
        },
        {
            title: "Best Artist Search Ever",
            desc: "View and save artwork from your favorite artists!",
            liveUrl: "https://nolacoder.github.io/Best-Artist-Search-Ever/" ,
            gitHubUrl: "https://github.com/nolacoder/Best-Artist-Search-Ever",
            image: baseImage
        },
        {
            title: "Weather App",
            desc: "Get current and future weather for any city!",
            liveUrl: "https://nolacoder.github.io/Weather-App/" ,
            gitHubUrl: "https://github.com/nolacoder/Weather-App",
            image: weatherImage
        },
        {
            title: "Horeison Home Page Refactor",
            desc: "Efficient CSS!",
            liveUrl: "https://nolacoder.github.io/01-Module-Challenge/",
            gitHubUrl: "https://github.com/mbronstein1/Couch-Potato",
            image: horiseonImage
        },
        {
            title: "Bootcamp Study Guide",
            desc: "Applying what I've learned!",
            liveUrl: "https://nolacoder.github.io/prework-study-guide/",
            gitHubUrl: "https://github.com/nolacoder/prework-study-guide",
            image: bootImage
        },
        {
            title: "PWA Text Editor",
            desc: "A downloadable text editor!",
            liveUrl: "https://quiet-thicket-94927.herokuapp.com/",
            gitHubUrl: "https://github.com/nolacoder/PWA-Text-Editor",
            image: textImage
        }
    ];
   
    return projects.map((project, i) => (
        <div key={i} className="card p-2 m-3" style={{width: "20rem"}}>
            <img src={project.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
                <a href={project.liveUrl} className="btn m-2" target={"_blank"} style={{"background-color": "GoldenRod"}}>See the Live App!</a>
                <a href={project.gitHubUrl} className="btn m-2" target={"_blank"} style={{"background-color": "GoldenRod"}}>See the GitHub repo!</a>
            </div>
        </div>
    ))
}

export default Project
