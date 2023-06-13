import "./Plans.style.css";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { Button } from "@mui/material";

export default function Plans() {
  return (
    <>
      <section className="section_plans">
        <div className="plans_flex">
          <div className="plans_desc">
            <p className="plans_sub">PRICING PLANS</p>
            <h2 className="plans_title">The Right Plan For Your Business</h2>
            <p className="plans_par">
              Choose the perfect plan for your needs. Always flexible to grow.
            </p>
          </div>
          <div className="plans_container">
            <div className="plan_card">
              <div className="card_header">
                <p className="plan_name">STANDARD</p>
                <p className="plan_price">
                  <FaDollarSign /> 50
                </p>
              </div>
              <div className="card_body">
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  One end products
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  12 months updates
                </p>
                <p className="plan_offer plan_border">
                  <AiOutlineCheckCircle className="check_offer" />6 months of
                  support
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  JavaScript version
                </p>
                <p className="plan_unavailable">
                  <AiOutlineCloseCircle className="close_offer" />
                  TypeScript version
                </p>
                <p className="plan_unavailable">
                  <AiOutlineCloseCircle className="close_offer" />
                  Design resources
                </p>
                <p className="plan_unavailable">
                  <AiOutlineCloseCircle className="close_offer" />
                  Commercial applications
                </p>
              </div>
              <Button
                sx={{
                  mt: "-3rem",
                  ml: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  border: "thin solid #47525D ",
                  padding: " 12px 90px ",
                  backgroundColor: "#212B36",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Choose Package
              </Button>
            </div>
            <div className="plan_card plan_card_middle">
              <p className="popular_tag">POPULAR</p>
              <div className="card_header card_header_middle">
                <p className="plan_name">PLUS</p>
                <p className="plan_price">
                  <FaDollarSign /> 99
                </p>
              </div>
              <div className="card_body">
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  One end products
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  12 months updates
                </p>
                <p className="plan_offer plan_border">
                  <AiOutlineCheckCircle className="check_offer" />6 months of
                  support
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  JavaScript version
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  TypeScript version
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  Design resources
                </p>
                <p className="plan_unavailable">
                  <AiOutlineCloseCircle className="close_offer" />
                  Commercial applications
                </p>
              </div>
              <Button
                sx={{
                  mt: "-2.9rem",
                  ml: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  border: "none ",
                  padding: " 12px 90px ",
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
                Choose Package
              </Button>
            </div>
            <div className="plan_card">
              <div className="card_header">
                <p className="plan_name">EXTENDED</p>
                <p className="plan_price">
                  <FaDollarSign /> 249
                </p>
              </div>
              <div className="card_body">
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  One end products
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  12 months updates
                </p>
                <p className="plan_offer plan_border">
                  <AiOutlineCheckCircle className="check_offer" />6 months of
                  support
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  JavaScript version
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  TypeScript version
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  Design resources
                </p>
                <p className="plan_offer">
                  <AiOutlineCheckCircle className="check_offer" />
                  Commercial applications
                </p>
              </div>
              <Button
                sx={{
                  mt: "-3rem",
                  ml: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  padding: " 12px 90px ",
                  backgroundColor: "#FA541C",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  color: "#fff",
                  textTransform: "none",
                  ":hover": { backgroundColor: "#BC2610" },
                }}
              >
                Choose Package
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
