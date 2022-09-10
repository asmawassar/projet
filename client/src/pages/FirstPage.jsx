import Acceuil from "./Acceuil/Acceuil";
import Apropos from "./Acceuil/Apropos";
import Contact from "./Acceuil/Contact";
import Header from "../components/Header/Header";
import Footer from "./Footer";
import SmoothScroll from "smooth-scroll";
import "./firstPage.css";
export const scroll = new SmoothScroll('Button[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function FirstPage() {
  return (
    <div>
      <Header />
      <Acceuil />
      <Apropos />
      <Contact />
      <Footer />
    </div>
  );
}
export default FirstPage;
