import React, { useContext, useEffect, useState } from 'react';
import "./../../styles/Psicologia.css"
import psicologia from "../../img/psicologia.jpg"
import { Context } from '../store/appContext';
import CardDoctor from "./CardDoctor";

const Psicologia = () => {
  const { store, actions } = useContext(Context);

  const psicoSpecialtyId = store.specialities.find(specialty => specialty.name === "Psicología");
  const psicoDoctors = store.doctors.filter(doctor => doctor.speciality_id === psicoSpecialtyId?.id);

  let doctorsComponent;

  if (psicoDoctors.length > 0) {
    doctorsComponent = (
      <div className="row justify-content-center mx-5">
        {psicoDoctors.map(doctor => (
          <CardDoctor 
            key={doctor.id}
            id={doctor.id}
            name={doctor.name}
            surname={doctor.surname}
            specialty={doctor.specialty}
          />
        ))}
      </div>
    );
  } else {
    doctorsComponent = <p className='text-center'>No hay doctores disponibles</p>;
  }
 

  return (
    <>

    <div className="psicolgia-container">
      <div className="image-container">
        <img src={psicologia} alt="Psicologia" className="psicologia-image" />
      </div>
      <div className="text-container">
        <h2 className="title">Psicologia</h2>
        <p className="text">
          Bienvenido a MediConecta, donde la salud y el bienestar de nuestros pacientes son nuestra prioridad número uno. En nuestro equipo, contamos con expertos en diversas especialidades médicas, incluida la Medicina General.
        </p>
        <p className="text">
          La Psicologia es la base fundamental de la atención médica, abordando una amplia gama de problemas de salud que afectan a personas de todas las edades y condiciones. Nuestros médicos generales son profesionales altamente capacitados y dedicados a proporcionar atención integral y continua a nuestros pacientes.
        </p>
        <ul className="service-list">
          <li>Consultas médicas virtuales</li>
          <li>Atención preventiva</li>
          <li>Manejo de enfermedades crónicas</li>
          <li>Referencias y coordinación de atención</li>
        </ul>
        <p className="text">
          En MediConecta, estamos comprometidos a brindar atención médica de alta calidad y accesible a todos. Ya sea que necesites una consulta de rutina, atención preventiva o manejo de una enfermedad crónica, nuestro equipo de Medicina General está aquí para cuidarte. ¡Pide una cita con nosotros hoy mismo y toma el control de tu salud!
        </p>
      </div>
    </div>
    <div className='container d-flex justify-content-center text-align-center mt-4'><h3>Especialistas en Psicologia</h3></div>
      <div className="container-fluid px-5 "  >
        <div className="row justify-content-center mx-5 text-center" style={{marginBottom:"35px"}} >
          {doctorsComponent}
        </div>
      </div>
    </>
  );
}

export default Psicologia;
