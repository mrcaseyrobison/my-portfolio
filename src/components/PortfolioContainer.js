import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

export default function PortfolioContainer() {
    // Defines state for currentPage & defaults to About
    const [currentPage, setCurrentPage] = useState('About');

    // Defines which page will load depending on currentPage
    const renderPage = () => {
        if (currentPage === 'About') {
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

// Main application layout / header / rendered content / footer
return (
    <Container maxWidth="lg">
        <Header handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
    </Container>
);
}