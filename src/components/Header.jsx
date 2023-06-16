import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.style.css";
import { BsSearch, BsChevronCompactDown } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import MarketingPagepng from "../assets/menu_marketing.jpg";
import EcommercePagepng from "../assets/menu_ecommerce.jpg";
import ElearningPagepng from "../assets/menu_elearning.jpg";
import TravelPagepng from "../assets/menu_travel.jpg";
import CareerPagepng from "../assets/menu_career.jpg";

export default function Header() {
  const navRef = useRef();
  const [isShown, setIsShown] = useState(false);
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  });

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <nav className={`${header ? "navbar_scroll" : "navbar_top"} navbar`}>
        <div className="first_nav_part">
          <div className="logo_menu_title">
            <h2 className="logo_title">ZONE</h2>
            <span className="circle_logo"></span>
            <span className="version_nav">V2.0</span>
          </div>
          <div className="links_list" ref={navRef}>
            <NavLink
              className="nav_li nav_li_active"
              to={"/home"}
              activeclassname="active"
              onClick={showNavbar}
            >
              Home
            </NavLink>
            <NavLink
              className="nav_li"
              to={"/components"}
              activeclassname="active"
              onClick={showNavbar}
            >
              Components
            </NavLink>
            <div className="nav_dropdown ">
              <button className="dropbtn" >
                Pages <BsChevronCompactDown />
              </button>
              <div className="dropdown_content">
                <div className="flex_dropdown">
                  <div className="dropdown_first_part">
                    <div className="nav_sites_dropdown">
                      <div className="dropdown_container_list">
                        <h4 className="dropdown_pages_title">Marketing</h4>
                        <img
                          src={MarketingPagepng}
                          alt=""
                          className="dropdown_pages_img"
                        />
                        <ul className="dropdown_pages_list">
                          <li className="dropdown_li_item">Landing</li>
                          <li className="dropdown_li_item">Services</li>
                          <li className="dropdown_li_item">Case Studies</li>
                          <li className="dropdown_li_item">Case Study</li>
                          <li className="dropdown_li_item">Blog Posts</li>
                          <li className="dropdown_li_item">Blog Post</li>
                          <li className="dropdown_li_item">About</li>
                          <li className="dropdown_li_item">Contact</li>
                        </ul>
                      </div>
                    </div>
                    <div className="nav_sites_dropdown">
                      <div className="dropdown_container_list">
                        <h4 className="dropdown_pages_title">Travel</h4>
                        <img
                          src={TravelPagepng}
                          alt=""
                          className="dropdown_pages_img"
                        />
                        <ul className="dropdown_pages_list">
                          <li className="dropdown_li_item">Landing</li>
                          <li className="dropdown_li_item">Tours</li>
                          <li className="dropdown_li_item">Tour</li>
                          <li className="dropdown_li_item">Checkout</li>
                          <li className="dropdown_li_item">Order Completed</li>
                          <li className="dropdown_li_item">Blog Posts</li>
                          <li className="dropdown_li_item">Blog Post</li>
                          <li className="dropdown_li_item">About</li>
                          <li className="dropdown_li_item">Contact</li>
                        </ul>
                      </div>
                    </div>
                    <div className="nav_sites_dropdown">
                      <div className="dropdown_container_list">
                        <h4 className="dropdown_pages_title">Career</h4>
                        <img
                          src={CareerPagepng}
                          alt=""
                          className="dropdown_pages_img"
                        />
                        <ul className="dropdown_pages_list">
                          <li className="dropdown_li_item">Landing</li>
                          <li className="dropdown_li_item">Jobs</li>
                          <li className="dropdown_li_item">Job</li>
                          <li className="dropdown_li_item">Blog Posts</li>
                          <li className="dropdown_li_item">Blog Post</li>
                          <li className="dropdown_li_item">About</li>
                          <li className="dropdown_li_item">Contact</li>
                        </ul>
                      </div>
                    </div>
                    <div className="nav_sites_dropdown">
                      <div className="dropdown_container_list">
                        <h4 className="dropdown_pages_title">E-learning</h4>
                        <img
                          src={ElearningPagepng}
                          alt=""
                          className="dropdown_pages_img"
                        />
                        <ul className="dropdown_pages_list">
                          <li className="dropdown_li_item">Landing</li>
                          <li className="dropdown_li_item">Courses</li>
                          <li className="dropdown_li_item">Course</li>
                          <li className="dropdown_li_item">Blog Posts</li>
                          <li className="dropdown_li_item">Blog Post</li>
                          <li className="dropdown_li_item">About</li>
                          <li className="dropdown_li_item">Contact</li>
                        </ul>
                      </div>
                    </div>
                    <div className="nav_sites_dropdown">
                      <div className="dropdown_container_list">
                        <h4 className="dropdown_pages_title">E-commerce</h4>
                        <img
                          src={EcommercePagepng}
                          alt=""
                          className="dropdown_pages_img"
                        />
                        <ul className="dropdown_pages_list">
                          <li className="dropdown_li_item">Landing</li>
                          <li className="dropdown_li_item">Products</li>
                          <li className="dropdown_li_item">Product</li>
                          <li className="dropdown_li_item">Cart</li>
                          <li className="dropdown_li_item">Checkout</li>
                          <li className="dropdown_li_item">Order Completed</li>
                          <li className="dropdown_li_item">Wishlist</li>
                          <li className="dropdown_li_item">Compare</li>
                          <li className="dropdown_li_item">Account Personal</li>
                          <li className="dropdown_li_item">Account Wishlist</li>
                          <li className="dropdown_li_item">Account Vouchers</li>
                          <li className="dropdown_li_item">Account Orders</li>
                          <li className="dropdown_li_item">Account Payment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown_second_part">
                    <h4 className="dropdown_pages_title">Common</h4>
                    <ul className="dropdown_pages_list">
                      <li className="dropdown_li_item">Login Cover</li>
                      <li className="dropdown_li_item">Login Illustration</li>
                      <li className="dropdown_li_item">Login Background</li>
                      <li className="dropdown_li_item">Register Cover</li>
                      <li className="dropdown_li_item">
                        Register Illustration
                      </li>
                      <li className="dropdown_li_item">Register Background</li>
                      <li className="dropdown_li_item">Reset Password</li>
                      <li className="dropdown_li_item">Verify Code</li>
                      <li className="dropdown_li_item">404 Error</li>
                      <li className="dropdown_li_item">500 Error</li>
                      <li className="dropdown_li_item">Maintenance</li>
                      <li className="dropdown_li_item">Coming Soon</li>
                      <li className="dropdown_li_item">Pricing Plan 1</li>
                      <li className="dropdown_li_item">Pricing Plan 2</li>
                      <li className="dropdown_li_item">Payment</li>
                      <li className="dropdown_li_item">Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <NavLink
              className="nav_li"
              to={"https://mui.com/material-ui/getting-started/overview/"}
            >
              Documentation
            </NavLink>
            <button className="nav_btn nav_close_btn" onClick={showNavbar}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
        <div className="second_nav_part">
          <div className="nav_circles">
            <i className="icons_nav">
              <BsSearch onClick={handleClick} />
              {isShown && (
                <div className="input_container">
                  <div></div>
                  <BsSearch className="search_icon" />
                  <input
                    type="text"
                    className="input_search"
                    placeholder="Search..."
                  />
                  <button className="search_btn" onClick={handleClick}>
                    Search
                  </button>
                </div>
              )}
            </i>
          </div>
          <div className="nav_circles">
            <i className="icons_nav">
              <FiSettings className="setting_rotate" />
              <span className="circe_settings"></span>
            </i>
          </div>
          <button className="navbtn_buy">Buy Now</button>
          <button className="nav_btn" onClick={showNavbar}>
            <BiMenuAltRight />
          </button>
        </div>
      </nav>
    </>
  );
}
