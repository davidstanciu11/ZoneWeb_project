import { Button } from "@mui/material";
import "./Purchase.style.css";

export default function Purchase() {
  return (
    <>
      <section className="purchase_section">
        <div className="purchase_flex">
          <h2 className="purchase_title">
            <span className="purchase_start">Start Now</span> <br /> Create Your <br /> Website Today
          </h2>
          <Button>Purchase Now</Button>
        </div>
      </section>
    </>
  );
}
