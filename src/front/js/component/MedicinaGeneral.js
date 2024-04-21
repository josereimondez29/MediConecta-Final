import React from 'react';
import "./../../styles/MedicinaGeneral.css"
import Medicina_general_dos from "../../img/Medicina-general-dos.jpg"


    const MedicinaGeneral = () => {
      return (
        <div className="medicina-general-container">
          <div className="image-container">
            <img src={Medicina_general_dos} alt="Medicina General" className="medicina-general-image" />
          </div>
          <div className="text-container">
            <h2 className="title">Medicina General</h2>
            <p className="description">
              Bienvenido a MediConecta, donde la salud y el bienestar de nuestros pacientes son nuestra prioridad número uno. En nuestro equipo, contamos con expertos en diversas especialidades médicas, incluida la Medicina General.
            </p>
            <p className="description">
              La Medicina General es la base fundamental de la atención médica, abordando una amplia gama de problemas de salud que afectan a personas de todas las edades y condiciones. Nuestros médicos generales son profesionales altamente capacitados y dedicados a proporcionar atención integral y continua a nuestros pacientes.
            </p>
            <p className="services">
              En MediConecta, los servicios de Medicina General incluyen, pero no se limitan a:
            </p>
            <ul className="service-list">
              <li>Consultas médicas virtuales</li>
              <li>Atención preventiva</li>
              <li>Manejo de enfermedades crónicas</li>
              <li>Referencias y coordinación de atención</li>
            </ul>
            <p className="call-to-action">
              En MediConecta, estamos comprometidos a brindar atención médica de alta calidad y accesible a todos. Ya sea que necesites una consulta de rutina, atención preventiva o manejo de una enfermedad crónica, nuestro equipo de Medicina General está aquí para cuidarte. ¡Haz una cita con nosotros hoy mismo y toma el control de tu salud!
            </p>
          </div>
        </div>
      );
    }
    
    export default MedicinaGeneral;