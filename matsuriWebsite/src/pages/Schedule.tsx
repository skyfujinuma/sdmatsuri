import './Schedule.css';

interface Event {
  id: number;
  time: string;
  title: string;
  description: string;
  location: string;
}

interface ScheduleSection {
  label: string;
  events: Event[];
}

const SCHEDULE_SECTIONS: ScheduleSection[] = [
  {
    label: 'Opening',
    events: [
      { id: 1, time: '3:30 PM', title: 'Pre-paid Ticket Pickup Begins', description: 'Tentative — Pre-paid tickets can begin to be picked up.', location: '' },
      { id: 2, time: '4:30 PM', title: 'Ticket Booth Opens', description: 'Tickets can be purchased at the booth.', location: '' },
      { id: 3, time: '5:00 PM', title: 'Matsuri Begins', description: 'Festival opens! Enjoy food and activities.', location: '' },
    ],
  },
  {
    label: 'Performances',
    events: [
      { id: 4, time: '5:00–5:15 PM', title: 'Midnights Dance Group', description: 'Seven Japanese students perform a J-pop dance to “Midnight” by Motoki Ohmori to welcome everyone to Matsuri.', location: '' },
      { id: 5, time: '5:15–5:30 PM', title: 'Wushu Club @ UCSD', description: 'A showcase of contemporary Chinese non-contact martial art with hand and weapon forms. Check out their Instagram @wushu_at_ucsd.', location: '' },
      { id: 6, time: '5:30–5:45 PM', title: 'UCSD Kendo Club', description: 'Founded in 1998, the club promotes kendo; members have competed at national and international levels.', location: '' },
      { id: 7, time: '5:50–6:00 PM', title: 'Iaido Club', description: 'UCSD group practicing iaidō — traditional Japanese sword drawing, cutting, and re-sheathing in controlled forms.', location: '' },
      { id: 8, time: '6:20–6:45 PM', title: 'GenBlu', description: 'Student J-rock band covering artists like King Gnu, RADWIMPS, and Mrs. Green Apple — vocals, guitars, bass, keys, and drums with members from Japan, China, India, and the US.', location: '' },
      { id: 9, time: '7:00–7:15 PM', title: 'Blue Pops', description: 'New J-pop band at UCSD consisting of six students playing songs like 青と夏 and ダンスホール (Mrs. GREEN APPLE), with past sets at events such as I-House Sunday Supper.', location: '' },
      { id: 10, time: '7:20–7:45 PM', title: 'FLUX', description: 'UCSD student band formed in 2024 reimagining J-pop and C-pop across languages and styles.', location: '' },
      { id: 11, time: '8:00–8:25 PM', title: 'Blue Moon Sanitizer', description: 'San Diego based anime and game soundtrack cover band performing high-energy sets of familiar themes for conventions, festivals, and events.', location: '' },
      { id: 12, time: '8:40–9:00 PM', title: 'Patchwork', description: 'Friends band mixing genres and languages — covers that explore multiple styles while keeping the set fun and exploratory.', location: '' },
      { id: 13, time: '9:20–9:40 PM', title: 'KOTX', description: 'All-inclusive K-pop dance and social org at UCSD established in 2015 spreading Korean culture through performance and community.', location: '' },
      { id: 14, time: '9:45–10:00 PM', title: 'Asayake Taiko', description: 'UCSD taiko ensemble. The group shares Japanese culture through taiko drumming, evoking the morning glow (asayake) of La Jolla light on the ocean.', location: '' },
    ],
  },
  {
    label: 'Closing',
    events: [
      { id: 15, time: '9:30 PM', title: 'Food Booths Close', description: 'Last call for food.', location: '' },
      { id: 16, time: '10:00 PM', title: 'Matsuri Ends', description: 'Thanks for celebrating with us!', location: '' },
    ],
  },
];

function Schedule() {
  return (
    <div className="schedule">
      <div className="schedule-container">
        <h1>Schedule</h1>
        <p className="schedule-intro">Check out all the amazing events happening throughout the day!</p>

        <div className="schedule-list">
          {SCHEDULE_SECTIONS.map((section) => {
            const sectionId = `schedule-section-${section.label.toLowerCase().replace(/\s+/g, '-')}`;
            return (
            <section key={section.label} className="schedule-section" aria-labelledby={sectionId}>
              <h2 id={sectionId} className="schedule-section-label">
                {section.label}
              </h2>
              <div className="schedule-section-rows">
                {section.events.map((event) => (
                  <div key={event.id} className="schedule-item">
                    <div className="schedule-time">{event.time}</div>
                    <div className="schedule-content">
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      {event.location && <div className="schedule-location">{event.location}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
