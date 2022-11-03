import React, { useState }from 'react';
import Header from './Header'

function PortfolioContainer() {

    const [currentPage, setCurrentPage] = useState('About Me');

    const showPage = () => {
        if (currentPage === 'About Me') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChang={handlePageChange}/>
            {showPage()}
        </div>
    )
}

export default PortfolioContainer
