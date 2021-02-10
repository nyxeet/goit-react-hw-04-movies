import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <ul>
    <li>
      <NavLink
        className="Navigation-link"
        activeClassName="Navigation-link-active"
        to={'/'}
        exact
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className="Navigation-link"
        activeClassName="Navigation-link-active"
        to={'/shows'}
      >
        Shows
      </NavLink>
    </li>
  </ul>
);

export default Navigation;