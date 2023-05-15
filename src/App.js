import "./App.css";
import Navbar from "./Conpanents/Navbar/Navbar";
import Footer from "./Conpanents/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import { Home, About, Blog, NotFound, Contact } from "./Pages/index";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
