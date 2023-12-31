import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import NavbarComponent from './Component/NavbarComponent';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer';
import Courses from './Component/Courses';
import LoginRegister from './Component/LoginRegister';

const App = () => {
  return (
    <Router>
      <div style={{background:'#f0f0f0'}}>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/courses" element={<Courses/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;