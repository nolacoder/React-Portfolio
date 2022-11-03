import React from "react";
import '../index.css'

function Footer() {
    return (
        <footer className="d-flex flex-row justify-content-around p-2 bg-dark text-white" name='footer-container' >
            <div name='GitHub-container'>
                <a className="text-decoration-none text-white" href="https://github.com/nolacoder" target={'_blank'}>
                    GitHub
                </a>
            </div>
            <div name='LinkedIn-container'>
                <a className="text-decoration-none text-white" href="https://www.linkedin.com/in/jared-johnson-8595b643/" target={'_blank'}>
                    LinkedIn
                </a>
            </div>
            <div name='DEV-container'>
            <a className="text-decoration-none text-white" href="https://dev.to/nolacoder" target={'_blank'}>
                    DEV
                </a>
            </div>
        </footer>
    )
}

export default Footer
