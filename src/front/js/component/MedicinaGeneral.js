import React from 'react';
import "./../../styles/MedicinaGeneral.css"
import Medicina_general_dos from "../../img/Medicina-general-dos.jpg"
import ListDoctors from './ListDoctors';

const MedicinaGeneral = () => {
  return (
    <>

    <div className="medicina-general-container">
      <div className="image-container">
        <img src={Medicina_general_dos} alt="Medicina General" className="medicina-general-image" />
      </div>
      <div className="text-container">
        <h2 className="title">Medicina General</h2>
        <p className="text">
          Bienvenido a MediConecta, donde la salud y el bienestar de nuestros pacientes son nuestra prioridad número uno. En nuestro equipo, contamos con expertos en diversas especialidades médicas, incluida la Medicina General.
        </p>
        <p className="text">
          La Medicina General es la base fundamental de la atención médica, abordando una amplia gama de problemas de salud que afectan a personas de todas las edades y condiciones. Nuestros médicos generales son profesionales altamente capacitados y dedicados a proporcionar atención integral y continua a nuestros pacientes.
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
    <div className='container d-flex justify-content-center text-align-center mt-4'><h3>Especialistas en Medina General</h3></div>
    <div className="container-fluid px-5 "  >
            <div className="row justify-content-center mx-5"  >
              <ListDoctors  />
            </div>
         </div>
    </>
  );
}

export default MedicinaGeneral;
