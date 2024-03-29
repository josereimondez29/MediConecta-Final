"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db, User, Patient
from api.admin import setup_admin
from api.commands import setup_commands
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_cors import CORS, cross_origin


# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
CORS(app)
app.url_map.strict_slashes = False

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)

#Bcrypt
bcrypt = Bcrypt(app)


# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
#app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


@app.route("/api/login", methods=["POST"])

def create_login():
    body = request.get_json (silent = True)
    
    if body is None:
        return jsonify({'msg': "Debe enviar info al body"}), 400
    if 'email' not in body:
        return jsonify({'msg': "El campo email es obligatorio"}), 400
    if 'password' not in body:
        return jsonify({'msg': "El campo password es obligatorio"}), 400
    # Fetch user from database
    patient = Patient.query.filter_by(email=body["email"]).first()
    #Check if user exists
    if patient is None:
        return jsonify({"msg": "Bad username"}), 401
    #devuelve TRUE si la contraseña es correcta
    password_correct = bcrypt.check_password_hash(patient.password, body['password'])
    if not password_correct:
        return jsonify({"msg":"Wrong password"}), 401
    # Generate token
    access_token = create_access_token(identity=patient.email)
    print(patient)
    return jsonify({'msg': 'Login succesfull...',
                    'token': access_token})

#Register admin users    
@app.route("/api/register/user", methods=["POST"])

def register_user():
    body = request.get_json (silent = True)
    
    if body is None:
        return jsonify({'msg': "Debes enviar info al body"}), 400
    if 'email' not in body:
        return jsonify({'msg': "El campo email es obligatorio"}), 400
    if 'password' not in body:
        return jsonify({'msg': "El campo password es obligatorio"}), 400
    
    new_user = User()
    new_user.username = body['name']
    new_user.email = body['email']
    pw_hash = bcrypt.generate_password_hash(body['password']).decode('utf-8')
    new_user.password = pw_hash
    new_user.is_active = True
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

#Register Patients 
@app.route("/api/register/patient", methods=["POST"])
def register_patient():
    body = request.get_json(silent=True)
    
    if body is None:
        return jsonify({'msg': "Debes enviar info al body"}), 400
    if 'email' not in body or 'password' not in body:
        return jsonify({'msg': "Los campos email y password son obligatorios"}), 400
    
    # Convertir las cadenas "true" o "false" a booleanos
    alergic_bool = body['alergic'].lower() == "true"
    medicated_bool = body['medicated'].lower() == "true"

    new_patient = Patient()
    new_patient.name = body['name']
    new_patient.surname = body['surname']
    new_patient.age = int(body['age'])
    new_patient.identification = body['identification']
    new_patient.social_security = body['social_security']
    new_patient.email = body['email']
    pw_hash = bcrypt.generate_password_hash(body['password']).decode('utf-8')
    new_patient.password = pw_hash
    new_patient.alergic = alergic_bool
    new_patient.specific_alergic = body['specific_alergic'] if alergic_bool else None
    new_patient.medicated = medicated_bool
    new_patient.specific_medicated = body['specific_medicated'] if medicated_bool else None
    
    new_patient.is_active = True
    db.session.add(new_patient)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@app.route('/patient/<int:patient_id>', methods=['GET'])
def get_patient(patient_id):
    patient = Patient.query.get(patient_id)
    if patient:
        patient_data = {
            "id": '',
            "name": patient['name'],
            "surname": patient['surname'],
            "age": patient['age'],
            "identification": patient['identification'],
            "social_security": patient['social_security'],
            "email": patient['email'],
            "alergic": patient['alergic'],
            "specific_alergic": patient['specific_alergic'],
            "medicated": patient['medicated'],
            "specific_medicated": patient['specific_medicated'],
            
        }
        return jsonify({"message": "Patient found", "patient": patient_data}), 200
    return jsonify({"message": "patient not found"}), 404

'''@app.route('/user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if user:
        data = request.json
        user.email = data.get('email', user.email)
        user.password = data.get('password', user.password)
        user.is_active = data.get('is_active', user.is_active)
        db.session.commit()
        return jsonify({"message": "User updated"}), 200
    return jsonify({"message": "User not found"}), 404

@app.route('/user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
        return jsonify({"message": "User deleted"}), 200
    return jsonify({"message": "User not found"}), 404'''

# Protect a route with jwt_required, which will kick out request
# without a valid JWT present.
@app.route("/api/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_patient = get_jwt_identity()
    return jsonify(logged_in_as=current_patient), 200

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)