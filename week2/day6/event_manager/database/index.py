from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.pool import NullPool

db = SQLAlchemy()

def init_db(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = app.config["DATABASE_URL"]
    app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
        "poolclass": NullPool
    }
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.init_app(app)
