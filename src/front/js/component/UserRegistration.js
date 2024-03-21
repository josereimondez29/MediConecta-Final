import React, { useState } from 'react';
import './../../styles/UserRegistration.css';
import { Link } from 'react-router-dom';

const UserRegistration = () => {
  
  const [formData, setFormData] = useState({
    nombreCompleto: '', 
    direccion: '',
    edad: '',
    pais: '',
    email: '',
    telefono: '', 
  });

  const urlTodos = "https:....../contact/";

  const userSubmit = () => {
    console.log(formData)
    fetch(urlTodos, {
      method: "POST",
      body: JSON.stringify({
        full_name: formData.nombreCompleto, 
        email: formData.email,
        agenda_slug: "Contacts",
        address: formData.direccion,
        phone: formData.telefono
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Usuario guardado:", data);
      setFormData({
        nombreCompleto: '', 
        direccion: '',
        edad: '',
        pais: '',
        email: '',
        telefono: '', 
      });
    })
    .catch((err) => {
      console.error("Error al guardar usuario:", err);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="user-registration-form">
      <h2>Formulario de Registro de Usuario</h2>
      <form >
        <input type="text" name="nombreCompleto" placeholder="Nombre y Apellido" value={formData.nombreCompleto} onChange={handleChange} required /> 
        <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
        <input type="number" name="edad" placeholder="Edad" value={formData.edad} onChange={handleChange} required />
        <input type="text" name="pais" placeholder="País" value={formData.pais} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required /> 
        <div className="buttons">
          <button type="submit" className="save-btn" onClick={userSubmit}>Guardar</button>
          <Link to="/">
            <button type="button" className="cancel-btn">Cancelar</button>
          </Link>
        </div>
      </form>
    </div>
  );
};


export default UserRegistration
