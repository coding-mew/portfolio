import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/x.png";

function Navigation() {
  const items = [
    // {
    //   name: "Home",
    //   to: "/",
    //   id: "01.",
    // },
    {
      name: "About",
      to: "/about",
      id: "01.",
    },
    {
      name: "Experience",
      to: "/experience",
      id: "02.",
    },
    {
      name: "Projects",
      to: "/projects",
      id: "03.",
    },
    {
      name: "Contact",
      to: "/contact",
      id: "04.",
    },

  ];
  return (
    <section className="main_section">
    <header className="header">
    
    <a href="https://github.com/coding-mew" className="logo" target="_blank"><img src={logo} className="header_logo" alt="logo" /></a>
    
    {/* <a href="../portfolio_light_theme/index.html"><button className="button_light"> Go <br />Light</button></a>
           <a href="../portfolio_neon_theme/index.html"><button className="button_dark"> Go <br />Neon</button></a>
     */}
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
            {items.map((item)=>{
              return <li key={item.id}><NavLink to={item.to}><span className="text_green">{item.id}</span>{item.name}</NavLink></li>
            })}
            </ul>
        </header>
        </section> 
  );
}

export default Navigation;

{
  /* <section className="main_section">
    <header className="header">

<a href="https://github.com/coding-mew" className="logo" target="_blank"><img src="../assets/images/logo_bold_wide2.png" className="header_logo" alt="logo" /></a>

<a href="../portfolio_light_theme/index.html"><button className="button_light"> Go <br />Light</button></a>
       <a href="../portfolio_neon_theme/index.html"><button className="button_dark"> Go <br />Neon</button></a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li> <a href="#about_nav"> <span className="text_green">01. </span>About</a></li>
          <li> <a href="#experience_nav"> <span className="text_green">02. </span>Experience</a></li>
          <li> <a href="#projects_nav"> <span className="text_green">03. </span>Projects</a></li>
          <li> <a href="#contact_nav"> <span className="text_green">04. </span>Contact</a></li>
        </ul>
    </header>
    </section> */
}

