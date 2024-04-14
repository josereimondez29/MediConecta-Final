import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {SpecialitySelection} from './SpecialitySelection';
import DoctorSelection from './DoctorSelection';
import AvailabilityCalendar from './AvailabilityCalendar';
import './../../styles/MedicalAppointment.css';

const MedicalAppointment = ({ specialities, doctors }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isAppointmentScheduled, setIsAppointmentScheduled] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleRegisterAppointment = async () => {
    // Lógica para registrar la cita médica
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirige a la ruta de inicio de sesión
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirige a la ruta de registro
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="message">
              <p>Para sacar una cita, necesitas estar registrado y haber iniciado sesión en la web.</p>
              <div className="buttons">
                <button className="btn btn-primary" onClick={handleLoginRedirect}>Iniciar sesión</button>
                <button className="btn btn-secondary" onClick={handleRegisterRedirect}>Registrarse</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {isAppointmentScheduled ? (
            <div>
              <h2>¡Cita programada exitosamente!</h2>
              {/* Aquí podrías mostrar detalles adicionales de la cita */}
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-md-6">
                <SpecialitySelection specialities={specialities} handleSpecialitySelect={(speciality) => setSelectedSpeciality(speciality)} />
              </div>
              <div className="col-md-6">
                {selectedSpeciality && <DoctorSelection doctors={doctors.filter(doctor => doctor.specialityId === selectedSpeciality.id)} handleDoctorSelect={(doctor) => setSelectedDoctor(doctor)} />}
              </div>
              <div className="col-md-6">
                {selectedDoctor && <AvailabilityCalendar handleAppointment={(date) => setSelectedDate(date)} />}
              </div>
              <div className="col-md-6">
                {selectedDate && (
                  <button className="btn btn-success" onClick={handleRegisterAppointment}>Registrar cita</button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MedicalAppointment;




