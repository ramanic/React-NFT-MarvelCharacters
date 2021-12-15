import React from 'react';
import Logo from './../images/logo.png';
import SearchIcon from './../images/header/search.png';
import ThemeSwitchIcon from './../images/header/theme-switch.png';
import './header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={Logo} className="logo" alt="Marvel" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={SearchIcon} className="searchIcon" alt="" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, item or user .."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div
        className="headerActions
      "
      >
        <div className="themeSwitchContainer">
          <img className="themSwitchIcon" src={ThemeSwitchIcon} alt="" />
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
