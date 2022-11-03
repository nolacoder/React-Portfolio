import React from 'react';
import Navigation from './Navigation'

function Header({ currentPage, handlePageChange }) {
    return (
        <header className='d-flex p-2 flex-row bg-dark text-white vw-100'>
            <div className='container d-flex justify-content-start align-items-center p-3 ms-3' name="title-container">
                <h1 name="title-text">
                    Jared Johnson
                </h1>
            </div>
            < Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header
