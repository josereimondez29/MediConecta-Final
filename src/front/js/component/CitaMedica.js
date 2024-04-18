import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SpecialitySelection from './SpecialitySelection';
import DoctorSelection from './DoctorSelection';
import AvailabilityCalendar from './AvailabilityCalendar';
import './../../styles/MedicalAppointment.css'; // Tu archivo CSS personalizado
import { Context } from "../store/appContext";
import 'react-datepicker/dist/react-datepicker.css'; // Estilo de react-datepicker


const MedicalAppointment = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isAppointmentScheduled, setIsAppointmentScheduled] = useState(false);
  const { store, actions } = useContext(Context);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleRegisterAppointment = async () => {
    if (selectedSpeciality && selectedDoctor && selectedDate ) {
      const token = localStorage.getItem('token');
      const response = await fetch(process.env.BACKEND_URL + "/api/register/medical_appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
        },
        body: JSON.stringify({
          speciality: selectedSpeciality,
          doctor: selectedDoctor,
          date: selectedDate
        })
      });
      const data = await response.json();
      console.log("Response from backend:", data); // Verifica la respuesta del backend
      setIsAppointmentScheduled(true);
    } else {
      alert("Por favor, selecciona una especialidad, un médico y una fecha para programar la cita.");
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirige a la ruta de inicio de sesión
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirige a la ruta de registro
  };

  const isButtonDisabled = !(selectedSpeciality && selectedDoctor && selectedDate);

  return (
    <div className="container medical-appointment-container">
      {store.authentication === false ? (
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
              <div className="col-md-6 selection-container">
                <SpecialitySelection handleSpecialitySelect={setSelectedSpeciality} />
              </div>
              <div className="col-md-6 selection-container">
                <DoctorSelection handleDoctorSelect={setSelectedDoctor} />
              </div>
              <div className="col-md-6 selection-container">
                <AvailabilityCalendar handleAppointment={setSelectedDate} />
              </div>
              <div className="col-md-6">
                <button className="btn btn-success" onClick={handleRegisterAppointment} disabled={isButtonDisabled}>Registrar cita</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MedicalAppointment;









