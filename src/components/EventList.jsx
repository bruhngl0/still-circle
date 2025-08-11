import React from "react";
import "../styles/eventlist.scss";
import { Link } from "react-router-dom";

const formatDateTime = (iso) => {
  const d = new Date(iso);
  const day = d.toLocaleDateString(undefined, { weekday: "short" });
  const dd = d.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
  });
  const t = d
    .toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
    .toLowerCase();
  const time = t.replace(":00", "");
  return `${day}, ${dd}, ${time}`;
};

const events = [
  {
    id: "1",
    posterUrl: "artthird.jpg",
    dateISO: "2025-08-17T08:00:00+05:30",
    title: "The Third House",
    venue: "Area 83, Bengaluru",
    badge: "17th August, 2025",
    path: "/third-house1",
  },
  {
    id: "2",
    dateISO: "2025-08-15T10:00:00+05:30",
    posterUrl: "vangogh.jpg",
    title: "The Starry Strech",
    venue: "Bhartiya Mall of Bengaluru",
    badge: "15th August, 2025",
    path: "/vangogh",
  },
];

const EventCard = ({ data }) => {
  return (
    <div className="event-card">
      <div className="poster">
        <img src={data.posterUrl} alt={data.title} />
        <div className="poster__fade" />
        {data.badge ? (
          <span className="chip chip--accent">{data.badge}</span>
        ) : null}
      </div>

      <div className="meta">
        <h3 className="meta__title">{data.title}</h3>
        {data.presenters ? (
          <div className="meta__presenters">{data.presenters}</div>
        ) : null}
        <div className="meta__when">Date: {formatDateTime(data.dateISO)}</div>

        <div className="meta__venue">Venue: {data.venue}</div>
        <div className="meta__price">{data.priceLabel}</div>
        <div className="div-card-btn">
          <Link to={data.path} className="card-btn">
            Join The Waitlist
          </Link>
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
