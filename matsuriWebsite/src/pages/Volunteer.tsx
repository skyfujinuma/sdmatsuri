import './Volunteer.css';

const VOLUNTEER_PORTAL_URL = 'https://volunteer.sdmatsuri.com/';

function Volunteer() {
  return (
    <div className="volunteer">
      <div className="volunteer-container">
        <h1>Volunteer with Us</h1>
        <p className="volunteer-intro">
          Join our team and help make Matsuri an amazing experience for everyone!
        </p>

        <div className="volunteer-cta">
          <a
            href={VOLUNTEER_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="volunteer-learn-more"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
