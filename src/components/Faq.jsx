import "./Faq.style.css";

export default function Faq({ faq, index, toggleFAQ }) {
  return (
    <>
      <div
        className={"faq " + (faq.open ? "open" : "")}
        key={"faq_" + index}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq_question">{faq.question}</div>
        <div className="faq_answer">{faq.answer}</div>
      </div>
    </>
  );
}
