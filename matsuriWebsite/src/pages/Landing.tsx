import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/matsuri-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <h1 className="hero-title">Matsuri</h1>
          <h2 className="hero-subtitle">at UC San Diego</h2>
        </div>
      </section>
      
      <div className="tatami-section">
        <div className="tatami-pattern"></div>
        <div className="event">
          <div className="event-header">
            <div className="event-location">UCSD Library Walk</div>
            <div className="event-date">April 2</div>
          </div>
          <section className="event-info">
            <p className="event-description">
              The University of California, San Diego's JSA and NSU will host their annual Matsuri Night Festival on April 2nd this year. Come out with some friends and see what performances and delicacies we have in store.
            </p>
          </section>
          <Link to="/about" className="event-learn-more">Learn More!</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
