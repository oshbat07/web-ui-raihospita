import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Photos from './pages/Photos';
import Vision from './pages/Vision';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <Router>
      <div>
        <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
        <Routes>
          <Route path="/" exact element={<Home isModalOpen={isModalOpen} setModalOpen={setModalOpen} />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vision" element={<Vision />} />
        </Routes>    
        <Footer />
      </div>
    </Router>
  );
}

export default App;
