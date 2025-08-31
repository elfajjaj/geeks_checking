DROP TABLE IF EXISTS tickets;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS attendees;
DROP TABLE IF EXISTS organizers;

CREATE TABLE organizers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email TEXT UNIQUE,
  phone TEXT
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(200) NOT NULL,
  description TEXT,
  organizer_id INTEGER REFERENCES organizers(id) ON DELETE CASCADE
);

CREATE TABLE attendees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT
);

CREATE TABLE tickets (
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  attendee_id INTEGER REFERENCES attendees(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (event_id, attendee_id)
);

-- Seed organizers
INSERT INTO organizers (name, email, phone) VALUES
('Tech Hub', 'tech@hub.com', '0611111111'),
('Art House', 'contact@arthouse.com', '0622222222');

-- Seed events
INSERT INTO events (name, date, location, description, organizer_id) VALUES
('Flask Bootcamp', '2025-09-10', 'Casablanca', 'Learn Flask basics', 1),
('Art & Paint Night', '2025-09-15', 'Rabat', 'Creative painting', 2);

-- Seed attendees
INSERT INTO attendees (name, email, phone) VALUES
('Sara Ali', 'sara@example.com', '0612345678'),
('Youssef Ben', 'youssef@example.com', '0623456789');

-- Seed tickets
INSERT INTO tickets (event_id, attendee_id) VALUES (1,1),(2,2);
