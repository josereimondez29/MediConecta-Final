from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    

    def __repr__(self):
        return f"ID {self.id}, nombre {self.name} y email: {self.email}"

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "is_active": self.is_active,
            "password": self.password
            
        }

class Patient(db.Model):
    __tablename__ = 'patient'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    surname = db.Column(db.String(120))
    age = db.Column(db.Integer)
    identification = db.Column(db.Integer)
    social_security = db.Column(db.Integer)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    alergic = db.Column(db.Boolean())
    specific_alergic = db.Column(db.String(250))
    medicated = db.Column(db.Boolean())
    specific_medicated = db.Column(db.String(250))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f"Paciente {self.id}: nombre {self.name} {self.surname} con identificacion: {self.identification}"

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "surname": self.surname,
            "age": self.age,
            "identification": self.identification,
            "social_security": self.social_security,
            "email": self.email,
            # do not serialize the password, its a security breach
            "alergic": self.alergic,
            "specific_alergic": self.specific_alergic,
            "medicated": self.medicated,
            "specific_medicated": self.specific_medicated
        }