import React, { useState, useEffect } from "react";

export const CardAppointment = ({ appointmentId, patientName, doctorName, meetingURL, meetingDate }) => {
    const [loading, setLoading] = useState(true);
    const [appointmentData, setAppointmentData] = useState(null);

    const getAppointmentAndMeetingInfo = async (id) => {
        console.log("EY")
        try {
            const appointmentResponse = await fetch(`${process.env.BACKEND_URL}/appointments_and_meetings/${id}`);
            console.log("EY")
            const appointmentJson = await appointmentResponse.json();
            setAppointmentData(appointmentJson);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching appointment and meeting info:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAppointmentAndMeetingInfo(appointmentId);
    }, [appointmentId]);

    if (loading) {
        return <p>Cargando cita...</p>;
    }

    if (!appointmentData) {
        return <p>No se encontraron datos para esta cita.</p>;
    }
    console.log("EY",appointmentData)

    

    return (
        <div>
            <h2>Detalles de la Cita</h2>
            <p>Nombre del Paciente: {patientName}</p>
            <p>Nombre del Médico: {doctorName}</p>
            <p>URL de la Reunión: {meetingURL}</p>
            <p>Fecha de la Reunión: {meetingDate}</p>
        </div>
    );
};