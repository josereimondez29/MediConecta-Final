import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const CardAppointment = ({ appointmentId }) => {
    const [appointment, setAppointment] = useState(null);
    const { store, actions } = useContext(Context);
    const id = useParams();

    // useEffect(() => {
    //     const fetchAppointment = async () => {
    //         try {
    //             const response = await fetch(process.env.BACKEND_URL + `/medical_appointments/${appointmentId}`); // Reemplaza esto con la URL de tu endpoint en el backend
    //             if (!response.ok) {
    //                 throw new Error("No se pudo obtener la cita.");
    //             }
    //             const data = await response.json();
    //             setAppointment(data);
    //         } catch (error) {
    //             console.error("Error al obtener la cita:", error);
    //         }
    //     };

    //     fetchAppointment();
    // }, [appointmentId]);

    if (!appointment) {
        return <p>Cargando cita...</p>;
    }

    console.log("CITA->", appointment)

    return (
        <div>
            <h2>Detalles de la Cita</h2>
            <p>Fecha de la cita: {appointment.appointment_date}</p>
        </div>
    );
};