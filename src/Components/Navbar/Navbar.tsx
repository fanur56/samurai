import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/Profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/Dialogs" activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/News" activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/Music" activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/Settings" activeClassName={styles.active}>Settings</NavLink>
            </div>
        </nav>
    )
}