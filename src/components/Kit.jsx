import KitImg from "../assets/new_start.png";
import "./Kit.style.css";

export default function Kit() {
  return (
    <>
      <section className="kit_section">
        <div className="container_kit">
          <img src={KitImg} alt="kit photo" className="kit_img" />
          <p className="kit_subtitle">NEW START</p>
          <h2 className="kit_title">
            The <span className="kit_span"> ZONE</span> UI Kit
          </h2>
          <p className="kit_desc">Modern ui kit to save your time, boost your creativity. Neat and super stylish layout ready to help with your projects</p>
        </div>
      </section>
    </>
  );
}
