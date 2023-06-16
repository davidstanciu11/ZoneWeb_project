import { Button } from "@mui/material";
import "./Starter.style.css";
import {BsArrowUpRightSquare} from "react-icons/bs";

export default function Starter() {
  return (
    <>
      <section className="design_section">
        <div className="design_flex" >
            <p className="design_sub" data-aos="fade-up" data-aos-delay="500">PROFESSIONAL KIT</p>
            <h2 className="design_title" data-aos="fade-up" data-aos-delay="500">For Designer</h2>
            <Button className="figma_button" data-aos="fade-up" data-aos-delay="500">Figma Workshop <BsArrowUpRightSquare/></Button>
        </div>
      </section>
    </>
  );
}
