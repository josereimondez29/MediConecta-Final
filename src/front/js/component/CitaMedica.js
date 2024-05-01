import React, { useState, useContext, useEffect } from 'react';
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
  const [appointmentCreated, setAppointmentCreated] = useState(false);
  const [doctorAvailability, setDoctorAvailability] = useState(null); // Inicializamos como null
  const [bookedAppointments, setBookedAppointments] = useState([]);

  useEffect(() => {
    if (selectedDoctor) {
      fetch(`${process.env.BACKEND_URL}/api/doctor_appointments/${selectedDoctor}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching doctor appointments');
          }
          return response.json();
        })
        .then(data => {
          setBookedAppointments(data.appointments);
        })
        .catch(error => {
          console.error('Error fetching doctor appointments:', error);
        });
    }
  }, [selectedDoctor]);

  const handleDoctorSelect = async (doctorId) => {
    setSelectedDoctor(doctorId);

    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/doctor_availability/${doctorId}`);
      if (!response.ok) {
        throw new Error('Error fetching doctor availability');
      }
      const data = await response.json();
      setDoctorAvailability(data.availability);
    } catch (error) {
      console.error('Error fetching doctor availability:', error);
    }
  };

  const handleRegisterAppointment = async () => {
    if (selectedSpeciality && selectedDoctor && selectedDate) {
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

      if (response.ok) {
        setAppointmentCreated(true); // Cambio de estado para mostrar el mensaje
      } else {
        console.error('Error al registrar la cita:', data.msg);
      }
    } else {
      alert("Por favor, selecciona una especialidad, un médico y una fecha para programar la cita.");
    }
  };

  const isButtonDisabled = !(selectedSpeciality && selectedDoctor && selectedDate);

  return (
    <div className="container medical-appointment-container mt-5">
      {store.authentication === false ? (
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="message">
              <p>Para sacar una cita, necesitas estar registrado y haber iniciado sesión en la web.</p>
              <div className="d-flex justify-content-center">
                <button style={{ backgroundColor: '#5C8692', color: '#fff', marginRight: '10px' }} className="btn" onClick={() => navigate('/login')}>Iniciar sesión</button>
                <button style={{ backgroundColor: '#5C8692', color: '#fff' }} className="btn" onClick={() => navigate('/register')}>Registrarse</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-12">
            <div style={{ marginBottom: '20px' }}>
              <SpecialitySelection handleSpecialitySelect={setSelectedSpeciality} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <DoctorSelection handleDoctorSelect={handleDoctorSelect} selectedSpeciality={selectedSpeciality} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              {selectedDoctor && doctorAvailability && ( // Asegurarse de que doctorAvailability esté presente
                <AvailabilityCalendar 
                handleAppointment={setSelectedDate} 
                doctorAvailability={doctorAvailability}
                bookedAppointments={bookedAppointments} // Pasar las citas agendadas al componente AvailabilityCalendar 
                />
              )}
            </div>
            <button style={{ backgroundColor: isButtonDisabled ? '#7A9CA5' : '#5C8692', color: '#fff', marginBottom: '20px' }} className="btn" onClick={handleRegisterAppointment} disabled={isButtonDisabled}>
              Registrar cita
            </button>
            {appointmentCreated && (
              <div className="alert alert-success" role="alert">
                Cita creada satisfactoriamente! A su email le llegarán los datos y link de su cita online!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalAppointment;









































