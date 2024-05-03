import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { CardAppointment } from "./CardAppointment";

export const ListAppointment = () => {
    const { store } = useContext(Context);

    // Verificar si hay citas médicas en el almacén
    if (!store.appointments || store.appointments.length === 0) {
        return <p>No hay citas pendientes.</p>;
    }

    return (
        <>
            {store.appointments.map(appointment => (
                <CardAppointment
                    key={appointment.id}
                    appointmentId={appointment.id}
                    patientName={appointment.patient_name} // Agregar el nombre del paciente
                    doctorName={appointment.doctor_name} // Agregar el nombre del médico
                    meetingURL={appointment.meeting_url} // Agregar la URL de la reunión
                    meetingDate={appointment.meeting_date} // Agregar la fecha de la reunión
                />
            ))}
        </>
    );
};