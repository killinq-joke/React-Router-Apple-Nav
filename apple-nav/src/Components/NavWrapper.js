import React from 'react';
import { NavLink } from 'react-router-dom';

function NavWrapper() {
    return (
        <nav className="Nav">
            <NavLink activeClassName="active" className="NavLink" exact to="/" replace>Home</NavLink>
            <NavLink activeClassName="active" className="NavLink" exact to="/mac" replace>Mac</NavLink>
            <NavLink activeClassName="active" className="NavLink" exact to="/ipad" replace>iPad</NavLink>
            <NavLink activeClassName="active" className="NavLink" exact to="/iphone" replace>iPhone</NavLink>
            <NavLink activeClassName="active" className="NavLink" exact to="/watch" replace>Watch</NavLink>
            <NavLink activeClassName="active" className="NavLink" exact to="/tv" replace>TV</NavLink>
            <NavLink activeClassName="active" className="NavLink" exact to="/music" replace>Music</NavLink>
            <NavLink activeClassName="active" className="NavLink" exact to="/support" replace>Support</NavLink>
            <NavLink activeClassName="active" className="NavLink" exact to="/search" replace>Search</NavLink>
            <NavLink activeClassName="active" className="NavLink" exact to="/cart" replace>Cart</NavLink>
        </nav>
        
    )
}

export default NavWrapper;