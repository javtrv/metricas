from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid
from sqlalchemy.dialects.postgresql import UUID
import sys


# Creación de una instancia de SQLAlchemy
db = SQLAlchemy()

# Definición del modelo Metric
class Metric(db.Model):
    __tablename__ = 'metric'
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(50), nullable=False)
    value = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, nullable=False)

    @classmethod
    def new(cls, name, value, date):
        return Metric(
            name=name,
            value=value,
            date=date
        )

    def save(self):
        try:
            db.session.add(self)
            db.session.commit()
            return True
        except:
            print("Unexpected error on save:", sys.exc_info())
            return "Unexpected error:", sys.exc_info()
