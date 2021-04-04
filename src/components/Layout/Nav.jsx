import React from 'react';
import {Link} from 'react-router-dom'
import seed from './seed2.svg'
const Nav = () => {
    return (
        <div className="nav-ctn">
            <img src={seed} alt="Seedling Logo"></img>
            <nav className="nav">
                
                <ul className="nav-ul">
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/recipe">Recipe</Link></li>
                     
                </ul>
            </nav>
        </div>
    )
}
export default Nav;