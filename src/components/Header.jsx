// src/components/Header.js
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg'
import '../styles/Header.css';
import { Link } from "react-router-dom";
import IconComponent from '../utils/IconComponent';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to='/'><svg><Logo fill="blue" width="100%" height="100%" /></svg></Link>
                </div>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="/">Home</a></li>
                        <li className="nav-item"><a href="/vision">Our Vision</a></li>
                        <li className="nav-item"><a href="photos">Photo Gallery</a></li>
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
                    <span><IconComponent iconName={'faPhone'} /> +91-7509642432</span>
                    <span><IconComponent iconName={'faEnvelope'} /> info@raihospital.co.in</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
