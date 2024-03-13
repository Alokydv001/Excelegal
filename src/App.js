
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Login from './pages/Login';
import HomePage from './components/HomePage';
import Footer from './pages/Footer';
import About from './pages/About';
import Signup from './pages/Signup';
import Privacy from './pages/Privacy';
import AdminPanel from './Admin/AdminPanel';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path="AdminPanel" element={<AdminPanel/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
