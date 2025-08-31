from datetime import date, datetime
from sqlalchemy import ForeignKey, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship
from database.index import db

class Organizer(db.Model):
    __tablename__ = "organizers"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    email: Mapped[str | None]
    phone: Mapped[str | None]
    events: Mapped[list["Event"]] = relationship(
        back_populates="organizer",
        cascade="all, delete-orphan",
        passive_deletes=True
    )

class Event(db.Model):
    __tablename__ = "events"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    date: Mapped[date]
    location: Mapped[str]
    description: Mapped[str | None]
    organizer_id: Mapped[int | None] = mapped_column(
        ForeignKey("organizers.id", ondelete="CASCADE")
    )
    organizer: Mapped["Organizer"] = relationship(back_populates="events")
    attendees: Mapped[list["Attendee"]] = relationship(
        secondary="tickets",
        back_populates="events",
        passive_deletes=True
    )

class Attendee(db.Model):
    __tablename__ = "attendees"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    email: Mapped[str]
    phone: Mapped[str | None]
    events: Mapped[list["Event"]] = relationship(
        secondary="tickets",
        back_populates="attendees",
        passive_deletes=True
    )

class Ticket(db.Model):
    __tablename__ = "tickets"
    event_id: Mapped[int] = mapped_column(ForeignKey("events.id", ondelete="CASCADE"), primary_key=True)
    attendee_id: Mapped[int] = mapped_column(ForeignKey("attendees.id", ondelete="CASCADE"), primary_key=True)
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)
    __table_args__ = (UniqueConstraint("event_id", "attendee_id", name="uq_event_attendee"),)
