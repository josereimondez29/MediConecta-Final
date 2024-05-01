import React, { useContext, useEffect, useState } from 'react';
import "./../../styles/Nutricion.css";
import nutricion from "../../img/nutricionn.jpg";
import { Context } from '../store/appContext';
import CardDoctor from "./CardDoctor";

const Nutricion = () => {
  const { store, actions } = useContext(Context);

  const nutriSpecialtyId = store.specialities.find(specialty => specialty.name === "Nutrición");
  const nutriDoctors = store.doctors.filter(doctor => doctor.speciality_id === nutriSpecialtyId?.id);

  let doctorsComponent;
  
  if (nutriDoctors.length > 0) {
    doctorsComponent = (
      <div className="row justify-content-center mx-5">
        {nutriDoctors.map(doctor => (
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
      <div className="nutricion-container">
        <div className="image-container">
          <img src={nutricion} alt="fisioterapia" className="nutricion-image" />
        </div>
        <div className="text-container">
          <h2 className="title">Nutricion</h2>
          <p className="text">
          Bienvenido a MediConecta, donde la salud y el bienestar de nuestros pacientes son nuestra prioridad número uno. En nuestro equipo, contamos con expertos en diversas especialidades médicas.
          </p>
          <p className="text">
          Consulta online mediante videollamada (30 – 45 minutos) con un diagnóstico y un diseño de un plan nutricional que esté basado en una estrategia dietética bien definida. Tipos de terapias a realiar:
          </p>
          <ul className="service-list">
            <li>Ganancia o pérdida de peso</li>
            <li>Protección cardiovastular</li>
            <li>Mejora de nuestro sistema inmunológico</li>
            <li>Reducción o control de procesos inflamatorios</li>
          </ul>
          <p className="text">
            En MediConecta, estamos comprometidos a brindar atención médica de alta calidad y accesible a todos. Ya sea que necesites una consulta de rutina, atención preventiva o manejo de una enfermedad crónica, nuestro equipo de Medicina General está aquí para cuidarte. ¡Pide una cita con nosotros hoy mismo y toma el control de tu salud!
          </p>
        </div>
      </div>
      <div className='container d-flex justify-content-center text-align-center mt-4'><h3>Especialistas en Nutrición</h3></div>
      <div className="row justify-content-center mx-5" style={{marginBottom:"35px"}} >
        {doctorsComponent}
      </div>
    </>
  );
}

export default Nutricion;