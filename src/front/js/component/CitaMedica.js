import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SpecialitySelection from './SpecialitySelection';
import DoctorSelection from './DoctorSelection';
import AvailabilityCalendar from './AvailabilityCalendar';
import './../../styles/MedicalAppointment.css';
import { Context } from '../store/appContext';

const MedicalAppointment = () => {
  const navigate = useNavigate();
  const { store } = useContext(Context);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleRegisterAppointment = async () => {
    if (selectedSpeciality && selectedDoctor && selectedDate) {
      console.log("Doctor seleccionado:", selectedDoctor);  // Agregar información de depuración
      console.log("Fecha y hora seleccionadas:", selectedDate);  // Agregar información de depuración

      const token = localStorage.getItem('token');
      const formattedDate = selectedDate.toISOString().slice(0, 19).replace('T', ' ');

      const response = await fetch(process.env.BACKEND_URL + "/api/register/medical_appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          speciality: selectedSpeciality,
          doctor_id: selectedDoctor,
          appointment_time: formattedDate
        })
      });
      const data = await response.json();
      console.log("Respuesta del backend:", data);

      if (response.ok) {
        navigate('/success');
      } else {
        console.error('Error al registrar la cita:', data.msg);
      }
    } else {
      alert("Por favor, selecciona una especialidad, un médico y una fecha para programar la cita.");
    }
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
                <button className="btn btn-primary" onClick={() => navigate('/login')}>Iniciar sesión</button>
                <button className="btn btn-secondary" onClick={() => navigate('/register')}>Registrarse</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-6 selection-container">
            <SpecialitySelection handleSpecialitySelect={setSelectedSpeciality} />
          </div>
          <div className="col-md-6 selection-container">
            <DoctorSelection handleDoctorSelect={setSelectedDoctor} selectedSpeciality={selectedSpeciality} />
          </div>
          <div className="col-md-6">
            {selectedDoctor && (
              <AvailabilityCalendar handleAppointment={setSelectedDate} doctorId={selectedDoctor} />
            )}
          </div>
          <div className="col-md-6">
            <button className="btn btn-success" onClick={handleRegisterAppointment} disabled={isButtonDisabled}>
              Registrar cita
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalAppointment;

















