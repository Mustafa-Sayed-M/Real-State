import React from 'react';
import TopBar from './TopBar/TopBar';
import Navbar from './Navbar/Navbar';

function Header() {
    return (
        <header>
            {/* Top Bar */}
            <TopBar />
            {/* Navbar */}
            <Navbar />
        </header>
    )
}

export default Header;