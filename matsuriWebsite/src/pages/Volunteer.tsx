import './Volunteer.css';

const VOLUNTEER_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeYlXxHOCywFuShHHr82MYIOGtP2lRmfMA7NNZH_ujjFEP31Q/viewform?usp=dialog';
const SIGNUP_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1Pc2P1gg8iZApu99oGV0HdmWrNswBi54SOk3Fqvjc954/edit?gid=1130809807#gid=1130809807';

function Volunteer() {
  return (
    <div className="volunteer">
      <div className="volunteer-container">
        <h1>Volunteer with Us</h1>
        <p className="volunteer-intro">
          Join our team and help make Matsuri an amazing experience for everyone!
        </p>

        <div className="volunteer-steps">
          <div className="volunteer-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h2>Register on our Volunteer Form</h2>
              <p>Fill out our Google Form with your contact information and accept our liability waiver.</p>
              <a
                href={VOLUNTEER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="step-btn"
              >
                Volunteer Form
              </a>
            </div>
          </div>

          {/* Shift sign-up not set up yet
          <div className="volunteer-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h2>Sign up for a Volunteer Shift</h2>
              <p>Once you have filled out the Google form, sign up for a shift by clicking the link below!</p>
              <a
                href={SIGNUP_SHEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="step-btn"
              >
                Sign Up Sheet
              </a>
            </div>
          </div>
          */}

          <div className="volunteer-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h2>Show up! Have Fun! Get Free Food!</h2>
              <p>Volunteers get free food! Check in at the Information Desk!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
