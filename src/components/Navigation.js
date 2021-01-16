import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/Styles.css';

const Navigation = ({ displayName }) => (
    <nav>
        <ul className="navigator" className="nav">
            <li>
                <Link to="/" className="nav_prop">Home</Link>
            </li>
            <li>
                <Link to="/profile" className="nav_prop">{displayName}'s Profile</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;