import './Schedule.css';

interface Event {
  id: number;
  time: string;
  title: string;
  description: string;
  location: string;
}

const SCHEDULE: Event[] = [
  { id: 1, time: '3:30 PM', title: 'Pre-paid Ticket Pickup Begins', description: 'Tentative — Pre-paid tickets can begin to be picked up.', location: '' },
  { id: 1.5, time: '4:30 PM', title: 'Ticket Booth Opens', description: 'Tickets can be purchased at the booth.', location: '' },
  { id: 2, time: '5:00 PM', title: 'Matsuri Begins', description: 'Festival opens! Enjoy food and activities.', location: '' },
  { id: 3, time: '5:15–9:45 PM', title: 'Performances', description: 'Lineup coming soon!', location: '' },
  { id: 3.5, time: '9:30 PM', title: 'Food Booths Close', description: 'Last call for food.', location: '' },
  { id: 4, time: '10:00 PM', title: 'Matsuri Ends', description: 'Thanks for celebrating with us!', location: '' },
];

function Schedule() {
  return (
    <div className="schedule">
      <div className="schedule-container">
        <h1>Schedule</h1>
        <p className="schedule-intro">Check out all the amazing events happening throughout the day!</p>

        <div className="schedule-list">
          {SCHEDULE.map((event) => (
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
      </div>
    </div>
  );
}

export default Schedule;
