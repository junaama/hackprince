import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Sign Up</Link></li>
                     
                </ul>
            </nav>
        </div>
    )
}
export default Nav;