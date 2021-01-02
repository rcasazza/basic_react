import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/counter">Counter Button</Link>
            </li>
            <li>
                <Link to="/people">People List</Link>
            </li>
            <li>
                <Link to="/forms">Forms</Link>
            </li>
            <li>
                <Link to="/user">User Profile</Link>
            </li>
        </ul>
    )
}