import React from 'react'
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className='NavBar'>
            <div className='profile'>
                <img src={avatar} alt=""/>
            </div>
            <nav className='nav'>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink to="/" exact activeClassName="active">
                            HOME
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/about" exact activeClassName="active">
                           About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/blogs" exact activeClassName="active">
                           Blogs
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
