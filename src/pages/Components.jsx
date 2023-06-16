import "./Components.style.css";
import { Button, Input } from "@mui/material";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Apps from "../assets/apps.png";
import { useEffect } from "react";

const ariaLabel = { "aria-label": "description" };

export default function Components() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="components_page">
        <div className="component_container">
          <div className="components_header">
            <h3 className="header_title_mui">MUI Components</h3>
            <a href="https://mui.com/components/" className="link_mui">
              https://mui.com/components/
            </a>
          </div>
          <div className="components_body">
            <h2 className="extra_components">Extra Components</h2>
            <p className="body_sub_extra">
              Extension components and 3rd party dependencies.
            </p>
            <div className="container_extensions">
              <a
                href="https://mui.com/material-ui/transitions/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Animate</div>
              </a>
              <a
                href="https://mui.com/material-ui/discover-more/roadmap/#new-components"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Carousel</div>
              </a>
              <a
                href="https://www.npmjs.com/package/react-countup"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">CountUp</div>
              </a>
              <a
                href="https://mui.com/toolpad/reference/components/form/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Form Validation</div>
              </a>
              <a
                href="https://mui.com/material-ui/material-icons/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Icons</div>
              </a>
              <a
                href="https://mui.com/material-ui/react-image-list/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Image</div>
              </a>
              <a
                href="https://mui.com/material-ui/api/step-label/"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <div className="extension_card">Label</div>
              </a>
              <a
                href="https://www.npmjs.com/package/yet-another-react-lightbox"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Lightbox</div>
              </a>
              <a
                href="https://mui.com/toolpad/reference/components/text/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Markdown</div>
              </a>
              <a
                href="https://mui.com/material-ui/react-menu/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Mega Menu</div>
              </a>
              <a
                href="https://mui.com/material-ui/react-bottom-navigation/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Navigation Bar</div>
              </a>
              <a
                href="https://mui.com/material-ui/api/tab-scroll-button/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Scroll</div>
              </a>
              <a
                href="https://mui.com/material-ui/react-slider/#music-player"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Player</div>
              </a>
              <a
                href="https://mui.com/material-ui/react-text-field/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="extension_card">Text Max Line</div>
              </a>
            </div>
          </div>
        </div>
        <div className="components_footer">
          <div className="footer_info">
            <div className="logo_menu_title">
              <h2 className="logo_title">ZONE</h2>
              <span className="circle_logo"></span>
            </div>
            <p className="footer_desc">
              The starting point for your next project based on
              easy-to-customize Material-UI © helps you build apps faster and
              better.
            </p>
            <h5 className="community_title">Community</h5>
            <p className="community_info">Documentation</p>
            <p className="community_info">Changelog</p>
            <p className="community_info">Contributing</p>
            <h5 className="touch_title">Let&apos;s stay in touch</h5>
            <p className="subscribe_par">
              Subscribe to our newsletter to receive latest articles to your
              inbox weekly.
            </p>
            <div className="email_add">
              <Input placeholder="Email Address" inputProps={ariaLabel} />
              <Button
                sx={{
                  mt: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem ",
                  border: "none ",
                  padding: " 5px 20px ",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  color: "#000",
                  textTransform: "none",
                  ":hover": { backgroundColor: "#919eab" },
                }}
              >
                Subscribe
              </Button>
            </div>
            <h5 className="socials_par">Social</h5>
            <div className="socials_icons">
              <AiFillFacebook className="social_png" />
              <AiOutlineInstagram className="social_png" />
              <AiFillLinkedin className="social_png" />
              <AiOutlineTwitter className="social_png" />
            </div>
            <h5 className="apps_title">Apps</h5>
            <img src={Apps} alt="apps" className="apps_icon" />
          </div>
          <div className="footer_pages">
            <div className="footer_pages_first_part">
              <div className="footer_page">
                <h3 className="footer_page_title">Marketing</h3>
                <p className="footer_page_par">Landing</p>
                <p className="footer_page_par">Services</p>
                <p className="footer_page_par">Case Studies</p>
                <p className="footer_page_par">Case Study</p>
                <p className="footer_page_par">Blog Posts</p>
                <p className="footer_page_par">Blog Post</p>
                <p className="footer_page_par">About</p>
                <p className="footer_page_par">Contact</p>
              </div>
              <div className="footer_page">
                <h3 className="footer_page_title">Career</h3>
                <p className="footer_page_par">Landing</p>
                <p className="footer_page_par">Jobs</p>
                <p className="footer_page_par">Job</p>
                <p className="footer_page_par">Blog Posts</p>
                <p className="footer_page_par">Blog Post</p>
                <p className="footer_page_par">About</p>
                <p className="footer_page_par">Contact</p>
              </div>
              <div className="footer_page">
                <h3 className="footer_page_title">Travel</h3>
                <p className="footer_page_par">Landing</p>
                <p className="footer_page_par">Tours</p>
                <p className="footer_page_par">Tour</p>
                <p className="footer_page_par">Checkout</p>
                <p className="footer_page_par">Order Completed</p>
                <p className="footer_page_par">Blog Posts</p>
                <p className="footer_page_par">Blog Post</p>
                <p className="footer_page_par">About</p>
                <p className="footer_page_par">Contact</p>
              </div>
              <div className="footer_page">
                <h3 className="footer_page_title">E-learning</h3>
                <p className="footer_page_par">Landing</p>
                <p className="footer_page_par">Courses</p>
                <p className="footer_page_par">Course</p>
                <p className="footer_page_par">Blog Posts</p>
                <p className="footer_page_par">Blog Post</p>
                <p className="footer_page_par">About</p>
                <p className="footer_page_par">Contact</p>
              </div>
            </div>
            <div className="footer_pages_second_part">
              <div className="footer_page">
                <h3 className="footer_page_title">E-commerce</h3>
                <p className="footer_page_par">Landing</p>
                <p className="footer_page_par">Products</p>
                <p className="footer_page_par">Product</p>
                <p className="footer_page_par">Cart</p>
                <p className="footer_page_par">Checkout</p>
                <p className="footer_page_par">Order Completed</p>
                <p className="footer_page_par">Wishlist</p>
                <p className="footer_page_par">Compare</p>
                <p className="footer_page_par">Account Personal</p>
                <p className="footer_page_par">Account Wishlist</p>
                <p className="footer_page_par">Account Vouchers</p>
                <p className="footer_page_par">Account Orders</p>
                <p className="footer_page_par">Account Payment</p>
              </div>{" "}
              <div className="footer_page">
                <h3 className="footer_page_title">Common</h3>
                <p className="footer_page_par">Login Cover</p>
                <p className="footer_page_par">Login Illustration</p>
                <p className="footer_page_par">Login Background</p>
                <p className="footer_page_par">Register Cover</p>
                <p className="footer_page_par">Register Illustration</p>
                <p className="footer_page_par">Register Background</p>
                <p className="footer_page_par">Reset Password</p>
                <p className="footer_page_par">Verify Code</p>
                <p className="footer_page_par">404 Error</p>
                <p className="footer_page_par">500 Error</p>
                <p className="footer_page_par">Maintenance</p>
                <p className="footer_page_par">Coming Soon</p>
                <p className="footer_page_par">Pricing 1</p>
                <p className="footer_page_par">Pricing 02</p>
                <p className="footer_page_par">Payment</p>
                <p className="footer_page_par">Support</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="page_footer">
          <div className="trademark">© 2023. All rights reserved</div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p className="footer_terms">Help Center</p>
            <p className="footer_terms">Terms of Service</p>
          </div>
        </footer>
      </section>
    </>
  );
}
