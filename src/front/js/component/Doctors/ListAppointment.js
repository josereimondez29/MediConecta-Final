import React, { useState, useEffect, useContext } from 'react';
import MedicalAppointmentCard from './MedicalAppointmentCard';
import { Context } from '../../store/appContext';

const ListAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const { store } = useContext(Context);

  const loadAppointmentMeetingURL = () => {
    fetch(`${process.env.BACKEND_URL}/appointments_and_meetings`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("DATARESULT FLUX APPOINTMENT", data.result);
        setAppointments(data.result);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  useEffect(() => {
    loadAppointmentMeetingURL();
  }, []);

  return (
    <div>
      {appointments.map((appointment) => {
        console.log("Hola", store.currentPatient.id, appointment.patient_id)
        if (store.currentPatient.id == appointment.patient_id)
          {return <MedicalAppointmentCard key={appointment.id} appointment={appointment} /> } 
      })}
    </div>
  );
};

export default ListAppointment;