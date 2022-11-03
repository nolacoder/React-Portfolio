import React from 'react';

function Header({ currentPage, handlePageChange }) {
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
                            <a className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'} href='#About Me' onClick={() => handlePageChange('About Me')}>
                                About Me
                            </a>
                        </li>
                        <li className='nav-item m-2 p-2'>
                            <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} href='#Portfolio' onClick={() => handlePageChange('Portfolio')}>
                                Portfolio
                            </a>
                        </li>
                        <li className='nav-item m-2 p-2'>
                            <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href='#Contact' onClick={() => handlePageChange('Contact')}>
                                Contact
                            </a>
                        </li>
                        <li className='nav-item m-2 p-2'>
                            <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}href='#Resume' onClick={() => handlePageChange('Resume')}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
