import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../styles/register.css'

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [seguridadSocial, setSeguridadSocial] = useState('');
  const [alergico, setAlergico] = useState('');
  const [alergiaEspecifica, setAlergiaEspecifica] = useState('');
  const [medicado, setMedicado] = useState('');
  const [medicamentoEspecifico, setMedicamentoEspecifico] = useState('');
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const register = async (userData) => {
    try {
      const resp = await fetch(`https://improved-capybara-5wrwjwv79j4crxj-3001.app.github.dev/api/register/patient`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });
      if (!resp.ok) {
        throw new Error("There was a problem in the registration request");
      }
      const data = await resp.json();
      setShowPopup(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const userData = {
      email,
      password,
      nombre,
      apellido,
      edad,
      identificacion,
      seguridadSocial,
      alergico,
      alergiaEspecifica,
      medicado,
      medicamentoEspecifico
    };

    register(userData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
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
            {/* Agregar los nuevos campos */}
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Apellido:</label>
              <input
                type="text"
                className="form-control"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Edad:</label>
              <input
                type="number"
                className="form-control"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Número de Identificación:</label>
              <input
                type="text"
                className="form-control"
                value={identificacion}
                onChange={(e) => setIdentificacion(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Número de Seguridad Social:</label>
              <input
                type="text"
                className="form-control"
                value={seguridadSocial}
                onChange={(e) => setSeguridadSocial(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>¿Alergico?</label>
              <select
                className="form-control"
                value={alergico}
                onChange={(e) => setAlergico(e.target.value)}
                required
              >
                <option value="">Seleccione</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
            {alergico === "si" && (
              <div className="form-group">
                <label>Especifique la alergia:</label>
                <input
                  type="text"
                  className="form-control"
                  value={alergiaEspecifica}
                  onChange={(e) => setAlergiaEspecifica(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label>¿Medicado por alguna enfermedad?</label>
              <select
                className="form-control"
                value={medicado}
                onChange={(e) => setMedicado(e.target.value)}
                required
              >
                <option value="">Seleccione</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
            {medicado === "si" && (
              <div className="form-group">
                <label>Especifique la enfermedad:</label>
                <input
                  type="text"
                  className="form-control"
                  value={medicamentoEspecifico}
                  onChange={(e) => setMedicamentoEspecifico(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary btn-block">Register</button>
            {error && <div className="mt-3 text-danger">{error}</div>}
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <p>¡Registro exitoso! Ahora puedes iniciar sesión.</p>
        </div>
      )}
    </div>
  );
};





