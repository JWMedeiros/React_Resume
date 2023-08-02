import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
//import Contact from './pages/Contact';
import Games from './pages/Games'
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. 
  // Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />;
    } else if (currentPage === 'Games'){
      return <Games />;
    } else{
      return <About/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer/>
      </div>
    );
  }
