import os
from datetime import datetime
from flask import Flask, render_template, request, redirect, url_for, flash
from dotenv import load_dotenv
from sqlalchemy import select, func
from database.index import init_db, db
from models.your_model import Event, Organizer, Attendee, Ticket

load_dotenv()

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config["DATABASE_URL"] = os.getenv("DATABASE_URL")
init_db(app)

@app.route("/")
def home():
    return redirect(url_for("list_events"))

# ---------------- Events ----------------
@app.route("/events")
def list_events():
    page = request.args.get("page", 1, type=int)
    q = request.args.get("q", "", type=str)

    stmt = select(Event).order_by(Event.date)
    if q:
        stmt = stmt.where(Event.name.ilike(f"%{q}%"))

    pagination = db.paginate(stmt, page=page, per_page=6, error_out=False)
    return render_template("index.html", pagination=pagination, q=q)

@app.route("/events/create", methods=["GET","POST"])
def create_event():
    organizers = db.session.execute(select(Organizer).order_by(Organizer.name)).scalars().all()
    if request.method == "POST":
        try:
            ev = Event(
                name=request.form["name"],
                date=datetime.strptime(request.form["date"], "%Y-%m-%d").date(),
                location=request.form["location"],
                description=request.form.get("description") or None,
                organizer_id=request.form.get("organizer_id") or None
            )
            db.session.add(ev)
            db.session.commit()
            flash("Event created!", "success")
            return redirect(url_for("list_events"))
        except Exception as e:
            db.session.rollback()
            flash(f"Error: {e}", "error")
    return render_template("create.html", organizers=organizers)

@app.route("/events/<int:event_id>/edit", methods=["GET","POST"])
def edit_event(event_id):
    ev = db.get_or_404(Event, event_id)
    organizers = db.session.execute(select(Organizer).order_by(Organizer.name)).scalars().all()
    if request.method == "POST":
        try:
            ev.name = request.form["name"]
            ev.date = datetime.strptime(request.form["date"], "%Y-%m-%d").date()
            ev.location = request.form["location"]
            ev.description = request.form.get("description") or None
            ev.organizer_id = request.form.get("organizer_id") or None
            db.session.commit()
            flash("Event updated!", "success")
            return redirect(url_for("list_events"))
        except Exception as e:
            db.session.rollback()
            flash(f"Error: {e}", "error")
    return render_template("edit.html", ev=ev, organizers=organizers)

@app.route("/events/<int:event_id>/delete", methods=["POST"])
def delete_event(event_id):
    ev = db.get_or_404(Event, event_id)
    db.session.delete(ev)
    db.session.commit()
    flash("Event deleted.", "success")
    return redirect(url_for("list_events"))

@app.route("/events/<int:event_id>")
def event_details(event_id):
    ev = db.get_or_404(Event, event_id)
    attendees = db.session.execute(select(Attendee)).scalars().all()
    return render_template("details.html", ev=ev, attendees=attendees)

@app.route("/events/<int:event_id>/register", methods=["POST"])
def register_attendee(event_id):
    att_id = int(request.form["attendee_id"])
    if not db.session.get(Ticket, {"event_id":event_id,"attendee_id":att_id}):
        db.session.add(Ticket(event_id=event_id, attendee_id=att_id))
        db.session.commit()
        flash("Attendee registered!", "success")
    else:
        flash("Already registered!", "error")
    return redirect(url_for("event_details", event_id=event_id))

# ---------------- Organizers ----------------
@app.route("/organizers", methods=["GET","POST"])
def organizers():
    if request.method == "POST":
        try:
            org = Organizer(name=request.form["name"],
                            email=request.form.get("email"),
                            phone=request.form.get("phone"))
            db.session.add(org)
            db.session.commit()
            flash("Organizer added!", "success")
        except Exception as e:
            db.session.rollback()
            flash(f"Error: {e}", "error")
    orgs = db.session.execute(select(Organizer)).scalars().all()
    return render_template("organizers.html", organizers=orgs)

# ---------------- Attendees ----------------
@app.route("/attendees", methods=["GET","POST"])
def attendees():
    if request.method == "POST":
        try:
            att = Attendee(name=request.form["name"],
                           email=request.form["email"],
                           phone=request.form.get("phone"))
            db.session.add(att)
            db.session.commit()
            flash("Attendee added!", "success")
        except Exception as e:
            db.session.rollback()
            flash(f"Error: {e}", "error")
    atts = db.session.execute(select(Attendee)).scalars().all()
    return render_template("attendees.html", attendees=atts)

# ---------------- Dashboard ----------------
@app.route("/stats")
def stats():
    per_org = db.session.query(
        Organizer.name, func.count(Event.id)
    ).outerjoin(Event).group_by(Organizer.id).all()
    popular = db.session.query(
        Event.name, func.count(Ticket.attendee_id)
    ).join(Ticket).group_by(Event.id).order_by(func.count().desc()).limit(5).all()
    daily = db.session.query(func.date(Ticket.created_at), func.count()).group_by(func.date(Ticket.created_at)).all()
    return render_template("stats.html",
                           org_labels=[o[0] for o in per_org],
                           org_counts=[int(o[1]) for o in per_org],
                           pop_labels=[p[0] for p in popular],
                           pop_counts=[int(p[1]) for p in popular],
                           daily_labels=[d[0].isoformat() for d in daily],
                           daily_counts=[int(d[1]) for d in daily])

if __name__ == "__main__":
    app.run(debug=True)
