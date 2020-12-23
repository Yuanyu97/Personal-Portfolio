import React from "react"
import logo from "../assets/mylogo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { navigate } from 'gatsby';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="logo" onClick={() => navigate('/')} />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
