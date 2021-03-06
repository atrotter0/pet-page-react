import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>My Pet Tidus</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/about" activeClassName="is-active" exact={true}>About</NavLink>
    <NavLink to="/book" activeClassName="is-active">Book</NavLink>
  </header>
);

export default Header;
