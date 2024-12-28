import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Photos from './pages/Photos';
import Vision from './pages/Vision';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
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
