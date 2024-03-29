import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { CancelOutlined, MenuOutlined, Note } from "@mui/icons-material";

const CustomNavlink = ({ to, ...props }) => {
  const activeStyle = {
    color: "red",
  };
  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : {})}
      to={to}
      end
      {...props}
    />
  );
};
const Navbar = ({ handleMenu, handleCancel, style }) => {
  return (
    <div className="navbarWrapper">
      <nav className="navbar">
        <Link to="/" className="navbarLogoLink">
          <div className="navbarLogoDiv">
            <Note className="appLogo" />
            <h2 className="logoText">Notepad</h2>
          </div>
        </Link>
        <ul className="navbarList">
          <CustomNavlink to="/" className="navLinks">
            <li className="navbarLists">Home</li>
          </CustomNavlink>
          <CustomNavlink to="/notes" className="navLinks">
            <li className="navbarLists">Notes</li>
          </CustomNavlink>
          <CustomNavlink to="/createNotes" className="navLinks">
            <li className="navbarLists">Create</li>
          </CustomNavlink>
        </ul>
        {style ? (
          <MenuOutlined className="menu" onClick={handleMenu} />
        ) : (
          <CancelOutlined className="menu" onClick={handleCancel} />
        )}
      </nav>
    </div>
  );
};
export default Navbar;