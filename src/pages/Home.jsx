import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Kit from "../components/Kit";
import Plans from "../components/Plans";
import Purchase from "../components/Purchase";
import Questions from "../components/Questions";
import Starter from "../components/Starter";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <>
      <Hero />
      <Kit />
      <Information />
      <Features />
      <Starter />
      <Plans />
      <Questions />
      <Purchase />
      <Footer />
    </>
  );
}
