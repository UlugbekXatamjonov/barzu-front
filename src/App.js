import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Galery from './pages/Galery';
import Contact from './pages/Contact';
import News from "./pages/News";
import Nav from './componet/Nav';
import Footer from './componet/Footer';
import AllNews from './componet/AllNews';


function App() {

  return (
    <div className="App max-width">
      <Router>
            <nav className="nav">
              <Nav   />
            </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/allnews" element={<AllNews />} />
              <Route path="/about" element={<About />} />
              <Route path="/galery" element={<Galery />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;



