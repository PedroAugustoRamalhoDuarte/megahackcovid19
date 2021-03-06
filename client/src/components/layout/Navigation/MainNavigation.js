import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import Navbar from './Navbar';
import './MainNavigation.css';

const MainNavigation = props => {
  return (
    <React.Fragment>
      <nav className="main-navigation__header-nav">
        <Navbar />
      </nav>
    </React.Fragment>
  );
};

export default MainNavigation;
