import React from "react";
import "../styles/eventlist.scss";

const events = [
  {
    id: "1",
    posterUrl: "artthird.jpg",
    date: "Sunday, Aug 17, 8:00 am",
    title: "The Third House",
    venue: "Area 83, Bengaluru",
    badge: "17th August, 2025",
    lumaLink: " https://lu.ma/famtq4qz", // Luma link
  },
  {
    id: "2",
    posterUrl: "vangogh.jpg",
    date: " Friday, Aug 15, 10:00 am",
    title: "The Starry Strech",
    venue: "Bhartiya Mall of Bengaluru",
    badge: "15th August, 2025",
    lumaLink: "https://lu.ma/hp4qlghm",
  },
];

const EventCard = ({ data }) => {
  return (
    <div className="event-card">
      <div className="poster">
        <img src={data.posterUrl} alt={data.title} />
        <div className="poster__fade" />
        {data.badge && <span className="chip chip--accent">{data.badge}</span>}
      </div>

      <div className="meta">
        <h3 className="meta__title">{data.title}</h3>
        {data.presenters && (
          <div className="meta__presenters">{data.presenters}</div>
        )}
        <div className="meta__when">Date: {data.date}</div>
        <div className="meta__venue">Venue: {data.venue}</div>
        {data.priceLabel && (
          <div className="meta__price">{data.priceLabel}</div>
        )}
        <div className="div-card-btn">
          <a
            href={data.lumaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn"
          >
            Join The Waitlist
          </a>
        </div>
      </div>
    </div>
  );
};

const EventList = () => {
  return (
    <div className="event-screen">
      <header className="topbar">
        <h1>UPCOMING EVENTS</h1>
      </header>

      <section className="event-list">
        {events.map((evt) => (
          <EventCard key={evt.id} data={evt} />
        ))}
      </section>
    </div>
  );
};

export default EventList;
