import "./Features.style.css";
import { BiCustomize, BiSupport } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { VscSettings } from "react-icons/vsc";
import { HiOutlineColorSwatch, HiOutlineDocumentText } from "react-icons/hi";
import { FaFigma } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { LuFileCode, LuMonitorSmartphone } from "react-icons/lu";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDarkMode, MdOutlineAnimation } from "react-icons/md";
import { AiOutlineFontSize } from "react-icons/ai";

export default function Features() {
  return (
    <>
      <section className="features">
        <div className="features_flex">
          <div className="features_desc">
            <p className="information_subtitle">FEATURE HIGHLIGHTS</p>
            <h2 className="information_title features_title">Have Everything You Need</h2>
            <p className="infomation_par">
              Let&#x27;s see what makes our theme super powerful and
              user-friendly!
            </p>
          </div>
          <div className="features_options">
            <div className="container_features">
              <CgWebsite className="features_png" />
              <p className="icons_sub">5 Prebuilt Websites</p>
            </div>
            <div className="container_features">
              <BiCustomize className="features_png" />
              <p className="icons_sub">60+ Demo Page</p>
            </div>
            <div className="container_features">
              <VscSettings className="features_png" />
              <p className="icons_sub">Easy to Customize</p>
            </div>
            <div className="container_features">
              <HiOutlineColorSwatch className="features_png" />
              <p className="icons_sub">Color Presets</p>
            </div>
            <div className="container_features">
              <MdOutlineDarkMode className="features_png" />
              <p className="icons_sub">Dark Mode</p>
            </div>
            <div className="container_features">
              <MdOutlineAnimation className="features_png" />
              <p className="icons_sub">Awesome Animation</p>
            </div>
            <div className="container_features">
              <AiOutlineFontSize className="features_png" />
              <p className="icons_sub">Google Fonts</p>
            </div>
            <div className="container_features">
              <FaFigma className="features_png" />
              <p className="icons_sub">Figma Designs</p>
            </div>
            <div className="container_features">
              <LuMonitorSmartphone className="features_png" />
              <p className="icons_sub">Fully Responsive</p>
            </div>
            <div className="container_features">
              <BsFillMenuButtonWideFill className="features_png" />
              <p className="icons_sub">Mega Menu</p>
            </div>
            <div className="container_features">
              <LuFileCode className="features_png" />
              <p className="icons_sub">Clean Markup</p>
            </div>
            <div className="container_features">
              <RxUpdate className="features_png" />
              <p className="icons_sub">Free Updates</p>
            </div>
            <div className="container_features">
              <BiSupport className="features_png" />
              <p className="icons_sub">Fast Support</p>
            </div>
            <div className="container_features">
              <HiOutlineDocumentText className="features_png" />
              <p className="icons_sub">Well Documented</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
