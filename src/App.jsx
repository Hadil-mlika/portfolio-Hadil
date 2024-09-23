import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import ContactMe from "./Components/Contact/ContactMe";
import Demo from "./Components/Demo/Demo";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <BrowserRouter basename="/portfolio-hadil/">
      <Routes>
        {/* Route pour la page d'accueil et les autres sections */}
        <Route
          path="/"
          element={
            <div className="bg-[#171d32] h-auto w-full overflow-hidden">
              <Navbar />

              <Home />
              <About />
              <Demo />
              <Projects />
              <Footer />
            </div>
          }
        />
        {/* Route pour la page Contact */}
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
