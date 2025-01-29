import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className="container-fluid d-flex align-items-center">
                    <img className={styles.img} src="./dnload.jpg" alt="img mondadori" to="/" />
                    <NavLink className={styles.title} to="/">MONDADORI</NavLink>
                
                    <div className={styles.navLinks}>
                        <NavLink className={styles.navLink} to="/">Home</NavLink>
                        <NavLink className={styles.navLink} to="/about">About</NavLink>
                        <NavLink className={styles.navLink} to="/contact">Contact</NavLink>
                    </div>
                    
                    <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
                <form className={styles.searchForm} role="search">
                    <input className={styles.searchInput} type="search" placeholder="Search" aria-label="Search" />
                    <button className={styles.searchButton} type="submit">Search</button>
                </form>
            </nav>

            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <NavLink className={styles.mobileNavLink} to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink className={styles.mobileNavLink} to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
                    <NavLink className={styles.mobileNavLink} to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                    
                    <form className={styles.searchFormMobile} role="search">
                        <input className={styles.searchInput} type="search" placeholder="Search" aria-label="Search" />
                        <button className={styles.searchButton} type="submit">Search</button>
                    </form>
                </div>
            )}
        </header>
    );
}

export default Header;
