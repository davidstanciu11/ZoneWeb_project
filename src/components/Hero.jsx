import "./Hero.style.css";
import HomeHeropng from "../assets/home_hero.png";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiFigma, SiBootstrap } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { Button } from "@mui/material";

export default function Hero() {
  return (
    <section className="hero_section">
      <div className="hero_flex">
        <div className="hero_details" data-aos="fade-down" data-aos-delay="500">
          <h1 className="hero_title">
            Create Your Website Today with{" "}
            <span className="hero_title_logo"> Zone</span>
          </h1>
          <p className="hero_title_par">
            The ZONE is built on top of MUI, a powerful library that provides
            flexible, customizable, and easy-to-use components.
          </p>
          <Button className="figma_hero_btn"
            sx={{
              mt: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem ",
              border: "none ",
              padding: " 12px 20px ",
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
            Figma Workspace <BsArrowUpRightSquare />
          </Button>
          <p className="hero_available">AVAILABLE FOR</p>
          <div className="logo_icons">
            <IoLogoJavascript className="logo_icons_item" />
            <SiTypescript className="logo_icons_item" />
            <DiReact className="logo_icons_item" />
            <SiFigma className="logo_icons_item" />
            <SiBootstrap className="logo_icons_item" />
          </div>
        </div>
        <div className="hero_img" data-aos="fade-down" data-aos-delay="500">
          <img src={HomeHeropng} alt="" className="hero_png" />
        </div>
      </div>
    </section>
  );
}
