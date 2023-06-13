import { Button } from "@mui/material";
import "./Starter.style.css";
import {BsArrowUpRightSquare} from "react-icons/bs";

export default function Starter() {
  return (
    <>
      <section className="design_section">
        <div className="design_flex">
            <p className="design_sub">PROFESSIONAL KIT</p>
            <h2 className="design_title">For Designer</h2>
            <Button>Figma Workshop <BsArrowUpRightSquare/></Button>
        </div>
      </section>
    </>
  );
}
