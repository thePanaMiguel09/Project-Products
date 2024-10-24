import "../../App.css";
import "../Styles/home.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

function Home() {
  return (
    <div className="containerPrincipal content">
      <NavBar />

      <Carousel />

      <Footer />
    </div>
  );
}

export default Home;
