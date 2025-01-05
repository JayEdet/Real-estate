import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Properties from "./components/Properties";
import Footer from "./components/Footer";

export default function App() {
  /* change about */

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
