import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="NavBar">
                <NavLink 
                    className={({ isActive }) => isActive ? "NavBar-active" : ""} 
                    to="/">
                    Home
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "NavBar-active" : ""} 
                    to="/kale">
                    Kale
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "NavBar-active" : ""} 
                    to="/bananas">
                    Bananas
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "NavBar-active" : ""} 
                    to="/berries">
                    Berries
                </NavLink>
            </div>
        );
    }
}

export default Navbar;
