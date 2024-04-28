import React, { useContext, useEffect, useState } from 'react';
import "./../../styles/Fisioterapia.css";
import fisioterapia from "../../img/fisioterapiaa.jpg";
import { Context } from '../store/appContext';
import CardDoctor from "./CardDoctor";

const Fisioterapia = () => {
  const { store, actions } = useContext(Context);

  const fisioSpecialtyId = store.specialities.find(specialty => specialty.name === "Fisioterapia");
  const fisioDoctors = store.doctors.filter(doctor => doctor.speciality_id === fisioSpecialtyId?.id);

  let doctorsComponent;

  if (fisioDoctors.length > 0) {
    doctorsComponent = (
      <div className="row justify-content-center mx-5">
        {fisioDoctors.map(doctor => (
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
      <div className="fisioterapia-container">
        <div className="image-container">
          <img src={fisioterapia} alt="fisioterapia" className="fisioterapia-image" />
        </div>
        <div className="text-container">
          <h2 className="title">Fisioterapia</h2>
          <p className="text">
          Consulta online mediante videollamada (30 – 45 minutos) con un diagnóstico y un diseño de tratamiento basado en ejercicio terapéutico personalizado así como recomendaciones y pautas que seguir en base a su patología actual. 
          </p>
          <p className="text">
          
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
      <div className='container d-flex justify-content-center text-align-center mt-4'><h3>Especialistas en Medicina General</h3></div>
      <div className="row justify-content-center mx-5" style={{marginBottom:"35px"}} >
        {doctorsComponent}
      </div>
    </>
  );
}

export default Fisioterapia;