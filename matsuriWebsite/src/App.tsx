import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Map from './pages/Map';
import Volunteer from './pages/Volunteer';
import Food from './pages/Food';
import TicketsComingSoon from './pages/TicketsComingSoon';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/map" element={<Map />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/food" element={<Food />} />
            <Route path="/tickets" element={<TicketsComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
