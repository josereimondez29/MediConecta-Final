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
        return f"ID{self.id}: {self.name} {self.surname}, identificacion: {self.identification}"

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
    
class Speciality(db.Model):
    __tablename__ = 'speciality'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f"ID{self.id}: {self.name}"
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "is_active": self.is_active
        }

class Doctor(db.Model):
    __tablename__ = 'doctor'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    surname = db.Column(db.String(120), nullable=False)
    age = db.Column(db.Integer)
    bio = db.Column(db.String(500), unique=True, nullable=False)
    # review = 
    identification = db.Column(db.Integer)
    medical_license = db.Column(db.Integer)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'))
    speciality = db.relationship('Speciality', backref=db.backref('doctors', lazy=True))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f"ID{self.id}: {self.name} {self.surname}"
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "speciality": self.speciality_id,  # Usar el ID de la especialidad
            "medical_license": self.medical_license,
            "is_active": self.is_active
        }

    

    
class Medical_Appointment(db.Model):
    __tablename__ = 'medical_appointment'
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f"ID{self.id}: Cita {self.number}, estado {self.is_active}"
    
    def serialize(self):
        return {
            "id": self.id,
            "number": self.number,
            "is_active": self.is_active
        }
    
class Favorite_Medical_Appointment(db.Model):
    __tablename__ = 'favorite_medical_appointment'
    id = db.Column(db.Integer, primary_key=True)
    medical_appointment_id = db.Column(db.Integer, db.ForeignKey('medical_appointment.id'))
    medical_appointment_relationship = db.relationship(Medical_Appointment) 
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'))
    speciality_relationship = db.relationship(Speciality) 
    patient_id = db.Column(db.Integer, db.ForeignKey('patient.id'))
    patient_relationship = db.relationship(Patient) 
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctor.id'))
    doctor_id_relationship = db.relationship(Doctor) 

    def __repr__(self):
        return f"Cita: {self.medical_appointment_id}, Paciente: {self.patient_id}, Doctor: {self.doctor_id}, Especialidad: {self.speciality_id}"
    
    def serialize(self):
        return {
            "id": self.id,
            "medical_appointment_id": self.medical_appointment_id,
            "patient_id": self.patient_id,
            "doctor_id": self.doctor_id,
            "speciality": self.speciality_id
        }

class FavoriteSpeciality(db.Model):
    __tablename__ = 'favorite_speciality'
    id = db.Column(db.Integer, primary_key=True)
    medical_appointment_id = db.Column(db.Integer, db.ForeignKey('medical_appointment.id'))
    medical_appointment_relationship = db.relationship(Medical_Appointment) 
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'))
    speciality_relationship = db.relationship(Speciality) 
    patient_id = db.Column(db.Integer, db.ForeignKey('patient.id'))
    patient_relationship = db.relationship(Patient) 
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctor.id'))
    doctor_id_relationship = db.relationship(Doctor) 

    def __repr__(self):
        return f"Cita: {self.medical_appointment_id}, Paciente: {self.patient_id}, Doctor: {self.doctor_id}, Especialidad: {self.speciality_id}"
    
    def serialize(self):
        return {
            "id": self.id,
            "medical_appointment_id": self.medical_appointment_id,
            "patient_id": self.patient_id,
            "doctor_id": self.doctor_id,
            "speciality": self.speciality_id
        }
    
'''class FavoritePatient(db.Model):
    __tablename__ = 'favorite_patient'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'))
    speciality_relationship = db.relationship(Speciality) 
    patient_id = db.Column(db.Integer, db.ForeignKey('patient.id'))
    patient_relationship = db.relationship(Patient) 
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctor.id'))
    doctor_id_relationship = db.relationship(Doctor) 

    def __repr__(self):
        return f"El paciente {self.patient_id} es atendido por el doctor {self.doctor_id} en la especialidad {self.speciality_id}"
    
    def serialize(self):
        return {
            "id": self.id,
            "patient_id": self.patient_id,
            "doctor_id": self.doctor_id,
            "speciality": self.speciality_id
        }'''
    
class FavoriteDoctor(db.Model):
    __tablename__ = 'favorite_doctor'
    id = db.Column(db.Integer, primary_key=True)
    medical_appointment_id = db.Column(db.Integer, db.ForeignKey('medical_appointment.id'))
    medical_appointment_relationship = db.relationship(Medical_Appointment) 
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'))
    speciality_relationship = db.relationship(Speciality) 
    patient_id = db.Column(db.Integer, db.ForeignKey('patient.id'))
    patient_relationship = db.relationship(Patient) 
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctor.id'))
    doctor_id_relationship = db.relationship(Doctor) 

    def __repr__(self):
        return f"Cita: {self.medical_appointment_id}, Paciente: {self.patient_id}, Doctor: {self.doctor_id}, Especialidad: {self.speciality_id}"
    
    def serialize(self):
        return {
            "id": self.id,
            "medical_appointment_id": self.medical_appointment_id,
            "patient_id": self.patient_id,
            "doctor_id": self.doctor_id,
            "speciality": self.speciality_id
        }