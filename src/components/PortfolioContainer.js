import React, { useState }from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

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
        <div className='vh-100'>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {showPage()}
            <Footer />
        </div>
    )
}

export default PortfolioContainer
