import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className="container-fluid d-flex align-items-center">
                    <img className={styles.img} src="./download.jpg" alt="img mondadori" to="/" />
                    <NavLink className={styles.title} to="/">MONDADORI</NavLink>
                    <NavLink className={styles.navLink} to="/">Home</NavLink>
                    <NavLink className={styles.navLink} to="/about">About</NavLink>
                    <NavLink className={styles.navLink} to="/contact">Contact</NavLink>
                </div>
                <form className={styles.searchForm} role="search">
                    <input className={styles.searchInput} type="search" placeholder="Search" aria-label="Search" />
                    <button className={styles.searchButton} type="submit">Search</button>
                </form>
            </nav>
        </header>

    );
}

export default Header;