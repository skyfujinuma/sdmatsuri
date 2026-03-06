import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Matsuri @ UCSD</h3>
            <p>Annual Japanese Festival at UCSD</p>
          </div>
          <div className="footer-section">
            <h4>Socials</h4>
            <p>Instagram: <a href="https://www.instagram.com/sdmatsuri/">@sdmatsuri</a></p>
            <p>TikTok: <a href="https://www.tiktok.com/@ucsdmatsuri/">@ucsdmatsuri</a></p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Coordinators: <a href="mailto:coords@sdmatsuri.org">coords@sdmatsuri.org</a></p>
            <p>Business Website: <a href="https://www.sdmatsuri.org">sdmatsuri.org</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Matsuri at UCSD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
