import "./Questions.style.css";
import { useState } from "react";
import Faq from "./Faq";
import { Button } from "@mui/material";

export default function Questions() {
  const [faqs, setFAQS] = useState([
    {
      question: "What's in the product packages?",
      answer:
        "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in.",
      open: true,
    },
    {
      question: "How can I upgrade my product plan?",
      answer:
        "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in.",
      open: false,
    },
    {
      question: "Are design assets (Figma, Sketch, Adobe XD) included?",
      answer:
        "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in.",
      open: false,
    },
    {
      question: "Does this product support TypeScript?",
      answer:
        "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in.",
      open: false,
    },
    {
      question: "Can I use this template in commercial projects like Sass?",
      answer:
        "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in.",
      open: false,
    },
    {
      question: "How can I request support?",
      answer:
        "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFAQS(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <>
      <section className="section_questions">
        <h2 className="faq_title">Frequently Asked Questions</h2>
        <div className="faqs">
          {faqs.map((faq, i) => (
            <>
              <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
            </>
          ))}
        </div>
        <div className="contact">
          <h2 className="contact_title">Still Have Questions?</h2>
          <p className="contact_sub">
            Please describe your case to receive the most accurate advice.
          </p>
          <a
            href="mailto:stanciudavid169@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <Button
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
              Contact Us
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
