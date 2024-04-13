import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register';
import LoginPacient from './LoginPacient';
import SpecialitySelection from './SpecialitySelection';
import DoctorSelection from './DoctorSelection';
import AvailabilityCalendar from './AvailabilityCalendar';
import './../../styles/MedicalAppointment.css'

const MedicalAppointment = ({ specialities, doctors }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isAppointmentScheduled, setIsAppointmentScheduled] = useState(false);

  const handleRegister = async (email, password) => {
    try {
      const response = await axios.post('/api/register/patient', { email, password });
      if (response.status === 200) {
        setIsLoggedIn(true);
      } else {
        console.error('Error al registrar usuario:', response.data);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('/api/login/patient', { email, password });
      if (response.status === 200) {
        setIsLoggedIn(true);
      } else {
        console.error('Error al iniciar sesión:', response.data);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleRegisterAppointment = async () => {
    try {
      const response = await axios.post('/api/register/medical_appointment', {
        specialityId: selectedSpeciality.id,
        doctorId: selectedDoctor.id,
        appointmentDate: selectedDate
      });
      if (response.status === 200) {
        setIsAppointmentScheduled(true);
        console.log('Cita registrada con éxito:', response.data);
      } else {
        console.error('Error al registrar cita:', response.data);
      }
    } catch (error) {
      console.error('Error al registrar cita:', error);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <Register handleRegister={handleRegister} />
          <LoginPacient handleLogin={handleLogin} />
        </>
      ) : (
        <>
          {isAppointmentScheduled ? (
            <div>
              <h2>Appointment Scheduled Successfully!</h2>
              {/* Aquí podrías mostrar detalles adicionales de la cita */}
            </div>
          ) : (
            <>
              <SpecialitySelection specialities={specialities} handleSpecialitySelect={(speciality) => setSelectedSpeciality(speciality)} />
              {selectedSpeciality && <DoctorSelection doctors={doctors.filter(doctor => doctor.specialityId === selectedSpeciality.id)} handleDoctorSelect={(doctor) => setSelectedDoctor(doctor)} />}
              {selectedDoctor && <AvailabilityCalendar handleAppointment={(date) => setSelectedDate(date)} />}
              {selectedDate && (
                <button onClick={handleRegisterAppointment}>Register Appointment</button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MedicalAppointment;


