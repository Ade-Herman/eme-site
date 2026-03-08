import "./styles/theme.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
