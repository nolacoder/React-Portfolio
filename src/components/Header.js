import React from 'react';

function Header () {
    return (
        <header className='d-flex p-2 flex-row bg-dark text-white vw-100'>
            <div className='container d-flex justify-content-start align-items-center p-3 ms-3' name="title-container">
                <h1 name="title-text">
                    Jared Johnson
                </h1>
            </div>
            <div className='container d-flex justify-content-end' name="navbar-container">
                <nav className='navbar'>
                    <ul className='d-flex flex-row m-2'>
                        <li className='nav-item m-2 p-2'>
                            About Me
                        </li>
                        <li className='nav-item m-2 p-2'>
                            Portfolio
                        </li>
                        <li className='nav-item m-2 p-2'>
                            Contact
                        </li>
                        <li className='nav-item m-2 p-2'>
                            Resume
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
