import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../styles/register.css'

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  /*const [age, setAge] = useState('');
  const [identification, setIdentification] = useState('');
  const [social_security, setSocial_security] = useState('');
  const [alergic, setAlergic] = useState('');
  const [alergiaEspecifica, setAlergiaEspecifica] = useState('');
  const [medicated, setMedicated] = useState('');
  const [medicamentoEspecifico, setMedicamentoEspecifico] = useState('');*/
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const register = async (userData) => {
    console.log(userData)


    try {

      const resp = await fetch(process.env.BACKEND_URL + `api/register/patient`, {
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
      name,
      surname,
      age,
      identification,
      social_security,
      alergic,
      alergiaEspecifica,
      medicated,
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
            
            
            {/* <div className="form-group">
              <label>Edad:</label>
              <input
                type="number"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Número de Identificación:</label>
              <input
                type="text"
                className="form-control"
                value={identification}
                onChange={(e) => setIdentification(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Número de Seguridad Social:</label>
              <input
                type="text"
                className="form-control"
                value={social_security}
                onChange={(e) => setSocial_security(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>¿Alergico?</label>
              <select
                className="form-control"
                value={alergic}
                onChange={(e) => setAlergic(e.target.value)}
                required
              >
                <option value="">Seleccione</option>
                <option value={true}>Sí</option>
                <option value={false}>No</option>
              </select>
            </div>
            {alergic === "true" && (
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
                value={medicated}
                onChange={(e) => setMedicated(e.target.value)}
                required
              >
                <option value="">Seleccione</option>
                <option value={true}>Sí</option>
                <option value={false}>No</option>
              </select>
            </div>
            {medicated === "true" && (
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
            )} */}
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