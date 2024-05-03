import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

export const CardAppointment = ({ appointmentId }) => {
    const { store } = useContext(Context);
    const [appointmentData, setAppointmentData] = useState(null);

    useEffect (()=>{
        const appointment = store.appointments.find(appointment => appointment.id === appointmentId);
        if (appointment) {
            // Buscar la reunión correspondiente
            const meeting = store.meetings.find(meeting => meeting.id === appointment.meeting_id);
            if (meeting) {
                // Obtener la información del paciente y del doctor
                const patient = store.patients.find(patient => patient.id === appointment.patient_id);
                const doctor = store.doctors.find(doctor => doctor.id === appointment.doctor_id);

                // Construir el objeto de datos de la cita médica con detalles adicionales
                const appointmentWithDetails = {
                    ...appointment,
                    patient_name: patient ? `${patient.id}` : '',
                    doctor_name: doctor ? `${doctor.id}` : '',
                    meeting_url: meeting.room_url,
                    meeting_date: meeting.appointment_date
                };

                setAppointmentData(appointmentWithDetails);
            }
        }
    }, [store.appointments, store.meetings, store.patients, store.doctors, appointmentId]);

    if (!appointmentData) {
        return <p>Cargando cita...</p>;
    }

    return (
        <div>
            <h2>Detalles de la Cita</h2>
            <p>Fecha de la cita: {appointmentData.appointment_date}</p>
            <p>URL de la cita: {appointmentData.meeting_url}</p>
            <p>Paciente: {appointmentData.patient_name}</p>
            <p>Doctor: {appointmentData.doctor_name}</p>
            <p>Fecha de la reunión: {appointmentData.meeting_date}</p>
            {/* Otros detalles de la cita si es necesario */}
        </div>
    );
};