import React from 'react';
import {NavLink} from "react-router-dom";

export default () => {
  return(
    <div>
      <NavLink exact to='/' activeClassName='page-layout__nav-item--active'>Home</NavLink>
      {' · '}
      <NavLink exact to='/counter' activeClassName='page-layout__nav-item--active'>Counter</NavLink>
    </div>
  );
};
