// src/components/Header.js
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg'
import '../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <svg><Logo fill="blue" width="100%" height="100%" /></svg>
                </div>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="/">Home</a></li>
                        <li className="nav-item"><a href="about">About Us</a></li>
                        <li className="nav-item"><a href="services">Services</a></li>
                        <li className="nav-item"><a href="contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="burger-menu" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="contact-info">
                    <p>Call Us: +91-7509642432</p>
                    <p>Email: info@raihospital.co.in</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
