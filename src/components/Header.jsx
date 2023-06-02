import { NavLink } from "react-router-dom";
import "./Header.style.css";
import { BsSearch, BsChevronCompactDown } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Header() {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <>
      <nav className={`${header ? "navbar_scroll" : "navbar_top"} navbar`}>
        <div className="first_nav_part">
          <div className="logo_menu_title">
            <h2 className="logo_title">ZONE</h2>
            <span className="circle_logo"></span>
            <span className="version_nav">V2.0</span>
          </div>
          <NavLink className="nav_li nav_li_active" to={"/home"}>
            Home
          </NavLink>
          <NavLink className="nav_li" to={"/components"}>
            Components
          </NavLink>
          <div className="nav_dropdown ">
            <button className="dropbtn">
              Pages <BsChevronCompactDown />
            </button>
            <div className="dropdown_content">
              <div className="flex_dropdown">
                <div className="dropdown_first_part">
                  <div className="nav_sites_dropdown"></div>
                  <div className="nav_sites_dropdown"></div>
                  <div className="nav_sites_dropdown"></div>
                  <div className="nav_sites_dropdown"></div>
                  <div className="nav_sites_dropdown"></div>
                </div>
                <div className="dropdown_second_part"></div>
              </div>
            </div>
          </div>
          <NavLink className="nav_li">Documentation</NavLink>
        </div>
        <div className="second_nav_part">
          <div className="nav_circles">
            <i className="icons_nav">
              <BsSearch />
            </i>
          </div>
          <div className="nav_circles">
            <i className="icons_nav">
              <FiSettings className="setting_rotate" />
              <span className="circe_settings"></span>
            </i>
          </div>
          <NavLink>
            <button className="navbtn_buy">Buy Now</button>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
