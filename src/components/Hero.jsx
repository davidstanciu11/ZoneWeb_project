import "./Hero.style.css";
import HomeHeropng from "../assets/home_hero.png";

export default function Hero() {
  return (
    <section className="hero_section">
      <div className="hero_flex">
        <div className="hero_details"></div>
        <div className="hero_img"></div>
      </div>
    </section>
  );
}
