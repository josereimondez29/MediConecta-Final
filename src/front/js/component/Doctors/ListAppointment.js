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
                    key={appointment.id} // Asegúrate de incluir una clave única para cada componente
                    appointmentId={appointment.id} // Corrige el nombre de la prop de ID de cita
                />
            ))}
         
        </>
    );
};