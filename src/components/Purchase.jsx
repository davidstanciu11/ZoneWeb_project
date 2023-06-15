import { Button } from "@mui/material";
import "./Purchase.style.css";
import AdvertismentBanner from "../assets/advertisment.png";

export default function Purchase() {
  return (
    <>
      <section className="purchase_section" style={{background: `url(${AdvertismentBanner})`}}>
        <div className="purchase_flex">
          <h2 className="purchase_title">
            <span className="purchase_start">Start Now</span> <br /> Create Your <br /> Website Today
          </h2>
          <Button className="figma_button">Purchase Nosasadasda</Button>
        </div>
      </section>
    </>
  );
}
