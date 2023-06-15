import { Button } from "@mui/material";
import "./Purchase.style.css";

export default function Purchase() {
  return (
    <>
      <section className="purchase_section" style={{background: `url(https://d2kpe7grvhf8ri.cloudfront.net/website/optimized_images/theme-hero.jpg)`}}>
        <div className="purchase_flex">
          <h2 className="purchase_title">
            <span className="purchase_start">Start Now</span> <br /> Create Your <br /> Website Today
          </h2>
          <Button className="figma_button">Purchase Now</Button>
        </div>
      </section>
    </>
  );
}
