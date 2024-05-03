import React, { useState, useEffect, useContext } from 'react';
import MedicalAppointmentCard from './MedicalAppointmentCard';
import { Context } from '../../store/appContext';

const ListAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const { store } = useContext(Context);

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/appointments_and_meetings`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAppointments(data.result);
      } catch (error) {
        console.error('Error loading appointments:', error);
      }
    };

    loadAppointments();
  }, []);

  const renderAppointments = () => {
    if (store.userType === 'doctor') {
      const doctorAppointments = appointments.filter(appointment => store.doctor.id === appointment.doctor_id);
      return doctorAppointments.map(appointment => <MedicalAppointmentCard key={appointment.id} appointment={appointment} />);
    } else if (store.userType === 'patient') {
      const patientAppointments = appointments.filter(appointment => store.currentPatient.id === appointment.patient_id);
      return patientAppointments.map(appointment => <MedicalAppointmentCard key={appointment.id} appointment={appointment} />);
    } else {
      return [];
    }
  };

  return (
    <div>
      {renderAppointments().length > 0 ? renderAppointments() : <p>No hay citas disponibles.</p>}
    </div>
  );
};

export default ListAppointment;