import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./../../styles/contactDetails.css";

const ContactDetails = () => {
    const [contact, setContact] = useState(null);
    const { id } = useParams();
    const url = `https://......./contact/${id}`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Contacto:", data);
                setContact(data);
            })
            .catch((error) => {
                console.error("Error al obtener el contacto:", error);
            });
    }, [url]);

    if (!contact) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>Contact Details</h1>
            <div className="contact-details">
                <p><strong>Nombre:</strong> {contact.full_name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Teléfono:</strong> {contact.phone}</p>
                <p><strong>Dirección:</strong> {contact.address}</p>
            </div>
        </div>
    );
};


export default ContactDetails
