import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./../../styles/FormularioRegistro.css";

const FormularioRegistro = () => {
    const { store, actions } = useContext(Context);
    const [users, setUsers] = useState([]);

    const urlUsersRegistered = "https://....../Contacts";

    useEffect(() => {
        usersRegistered();
    }, []);

    const usersRegistered = () => {
        fetch(urlUsersRegistered, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Usuarios Registrados:", data);
            setUsers(data); // Guardar usuarios en el estado
        })
        .catch((err) => {
            console.error("Error al llamar usuarios:", err);
        });
    };

    return (
        <div className="container">
            <h1>Contact List</h1>
            <div className="contact-list">
                {users.slice(0, 4).map((user, index) => (
                    <div key={index} className="contact">
                        <p><strong>Nombre:</strong> {user.full_name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Teléfono:</strong> {user.phone}</p>
                        <p><strong>Dirección:</strong> {user.address}</p>
                        <p><strong>id:</strong> {user.id}</p>
                        <Link to={`/ContactDetails/${user.id}`}>Ver Detalles</Link>
                    </div>
                ))}
            </div>
            <Link to="/UserRegistration">
				<button className="btn btn-primary">Register</button>
			</Link>
        </div>
    );
};


export default FormularioRegistro
