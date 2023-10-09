import "./globals.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import News from "./components/News";
import Reservation from "./components/Reservation";
import Timing from "./components/Timing";
import ArtOfFood from "./components/ArtOfFood";
import Carousel from "./components/Carousel";
import OurMenu from "./components/OurMenu";
import FoodCategory from "./components/FoodCategory";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <ArtOfFood />
        <Carousel />
        <Timing />
        <OurMenu />
        <FoodCategory />
        <Reservation />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
