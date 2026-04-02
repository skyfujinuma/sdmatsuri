import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Matsuri</h1>
        
        <section className="about-section">
          <h2>What is Matsuri?</h2>
          <p>
          Matsuri (祭り) is a Japanese word that means “festival” and is usually referred to as a 
          festival to honor and give thanks to Gods called “Kami (神),” which are the deities in 
          the traditional Japanese religion of Shinto (神道). Something that is very commonly seen 
          at Matsuri are palanquins called Mikoshi (神輿). The Mikoshi start their journey at a local 
          shrine and are then carried around town by the townspeople. It is said that the Kami from 
          the shrine rides on the Mikoshi, purifying the town and dispelling evil on its journey. 
          This tradition of carrying the Mikoshi around town started in the Heian period 
          (794-1185 CE), and is one of many that you’ll see at Matsuris today.
          </p>
        </section>

        <section className="about-section">
          <h2>at UCSD...</h2>
          <p>
          We celebrate this tradition at UCSD every year with food, music, and activities 
          here on Library Walk. Come join us for a day of fun and culture by watching 
          performances, eating delicious food, and participating in traditional Japanese activities!

          </p>
        </section>

        <section className="about-section">
          <h2>FAQ</h2>
          <div className="expectations">
            <div className="expectation-item">
              <h3>Is Matsuri free to attend?</h3>
              <p>Yes! Matsuri is 100% free to attend. Tickets to exchange for food,
                 drinks, and activities are sold at the ticket booth during the event.</p>
            </div>
            <div className="expectation-item">
              <h3>Is Matsuri only for Japanese students?</h3>
              <p>No! Matsuri is open to all students, staff, and faculty at UCSD. 
                We welcome everyone to come and celebrate the culture of Japan.</p>
            </div>
            <div className="expectation-item">
              <h3>What time does Matsuri start and end?</h3>
              <p>Matsuri starts at 5:00 PM and ends at 10:00 PM. Get the full 
                schedule <a href="/schedule">here</a>.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions? Reach out to us at <a href="mailto:coords@sdmatsuri.org">coords@sdmatsuri.org</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
