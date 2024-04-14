import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../styles/register.css';
import { Context } from "../store/appContext";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [userType, setUserType] = useState('patient'); // Establece el tipo de usuario predeterminado como 'patient'
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { store, actions } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
   
    if (password !== confirmPassword) {
      setError("Passwords do not match");
     
      return;
    }

    const userData = {
      email,
      password,
      name,
      surname,
      userType // Añade el tipo de usuario al objeto de datos del usuario
    };

    try {
      await actions.register(userData, userType, navigate);  
    } catch (error) {
      setError(error.message);
      
    }
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Apellido:</label>
              <input
                type="text"
                className="form-control"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Tipo de Usuario:</label>
              <select
                className="form-control"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="patient">Paciente</option>
                <option value="doctor">Médico</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Register</button>
            {error && <div className="mt-3 text-danger">{error}</div>}
            {store.messageError && <div className="mt-3 text-danger">{store.messageError}</div>}
          </form>
        </div>
      </div>
      {store.signupSuccesful && (
        <div className="popup">
          <p>¡Registro exitoso! Ahora puedes iniciar sesión.</p>
        </div>
      )}
    </div>
  );
};