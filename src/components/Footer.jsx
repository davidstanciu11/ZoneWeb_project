import "./Footer.style.css";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4rem"
          height="4rem"
          fill="none"
          viewBox="0 0 512 512"
        >
          <ellipse
            cx="405.143"
            cy="338.571"
            fill="#FA541C"
            rx="82.857"
            ry="82.857"
          ></ellipse>
          <path
            fill="currentColor"
            d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
          ></path>
        </svg>
        <p className="reserved">© 2023. All rights reserved</p>
      </section>
    </>
  );
}
