  
import os
from flask_admin import Admin
from .models import db, User, Patient, Doctor,Speciality, Medical_Appointment, Alergic, Medicated, DoctorAvailability
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Patient, db.session))
    admin.add_view(ModelView(Doctor, db.session))
    admin.add_view(ModelView(DoctorAvailability, db.session))
    admin.add_view(ModelView(Speciality, db.session))
    admin.add_view(ModelView(Medical_Appointment, db.session))
    admin.add_view(ModelView(Alergic, db.session))
    admin.add_view(ModelView(Medicated, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))