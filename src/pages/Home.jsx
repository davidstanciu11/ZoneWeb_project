import Features from "../components/Features";
// import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Kit from "../components/Kit";
// import Plans from "../components/Plans";
// import Purchase from "../components/Purchase";
// import Questions from "../components/Questions";
import Starter from "../components/Starter";

export default function Home() {
  return (
    <>
      <Hero />
      <Kit/>
      <Information/>
      <Features/>
      <Starter/>
    </>
  );
}
