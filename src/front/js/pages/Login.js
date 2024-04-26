import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');
  const { store, actions } = useContext(Context);
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   actions.login(email, password, userType)
  //   .then((data) => {
  //     localStorage.setItem("id", data.doctor.id);
  //     localStorage.setItem("name", data.doctor.name);
  //     localStorage.setItem("id", data.patient.id); // o data.doctor.id dependiendo del tipo de usuario
  //     sessionStorage.setItem("id", data.patient.id); // o data.doctor.id dependiendo del tipo de usuario
  // });
  // };
  const handleSubmit = (e) => {
    e.preventDefault()
    actions.login(email, password, userType)
      .then((data) => {
        // Verifica si la respuesta incluye un objeto 'doctor'
        if (data.doctor) {
          // Almacena el token en localStorage
          localStorage.setItem("token", data.token);
          // Almacena el ID del doctor en localStorage
          localStorage.setItem("id", data.doctor.id);
          // Almacena el nombre del doctor en localStorage
          localStorage.setItem("name", data.doctor.name);
          console.log("Doctor Data:", data.doctor);
          console.log("Token:", data.token);
        } else {
          // Si no se encuentra un objeto 'doctor' en la respuesta, muestra un mensaje de error o maneja la situación según sea necesario
          console.error("No se encontró información del doctor en la respuesta");
        }
      })
      .catch((error) => {
        // Maneja cualquier error que pueda ocurrir durante el proceso de inicio de sesión
        console.error("Error al iniciar sesión:", error);
        // También podrías almacenar un mensaje de error en el estado de tu aplicación para mostrarlo al usuario
        setErrorMessage("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
      });
  };

  return (
    <div className="container mt-5">
    {store.authentication === true ?
      (userType === 'doctor' ? <Navigate to="/PrivateMedico"/> : <Navigate to="/PrivatePatient"/>) :
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
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
            <button type="submit" className="btn btn-primary btn-block">Login</button>
            <Link to={"/"}>
                <button type="btn" className='btn btn-secondary'>Back home</button>
            </Link>
          </form>
        {store.messageError && <div className="mt-3 text-danger">{store.messageError}</div>}
        </div>
      </div>}
    </div>
  );
};


