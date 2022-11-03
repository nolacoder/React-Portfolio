import React from "react";

function Navigation({ currentPage, handlePageChange }) {
    return (
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
                        <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href='#Resume' onClick={() => handlePageChange('Resume')}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
