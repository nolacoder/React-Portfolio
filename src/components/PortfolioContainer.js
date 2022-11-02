import React from 'react';

function PortfolioContainer () {
    return (
        <header className='container d-flex p-2 flex-row'>
            <div className='container' name="title-container">
                <p name="title-text">
                    Jared Johnson
                </p>
            </div>
            <div className='container' name="navbar-container">
                <nav className='navbar'>
                    <ul>
                        <li>
                            About Me
                        </li>
                        <li>
                            Portfolio
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            Resume
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default PortfolioContainer
