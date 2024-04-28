import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PrivatePatient = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Obtener el ID del paciente almacenado en el almacenamiento local
        const patientId = localStorage.getItem("id");

        // Verificar si el ID del paciente existe y es válido
        if (patientId) {
            // Llamar a la acción para obtener la información del paciente utilizando el ID almacenado
            actions.getinfoPatient(patientId);
        }
    }, []); // Ejecutar solo una vez al cargar el componente

    useEffect(() => {
        console.log("Estoy pendiente")
    }, [store.currentPatient])

    console.log(store.currentPatient)
    return (
        <div className="container">
            <h1>Información del paciente</h1>
            {store.currentPatient ? (
                <div>
                    <p>Nombre: {store.currentPatient.patient.name}</p>
                    {/* <p>Edad: {store.currentPatient.age}</p> */}
                    <p>Email: {store.currentPatient.patient.email}</p>
                    {/* Agregar más campos según sea necesario */}
                </div>
            ) : (
                <p>No se encontró información del paciente.</p>
            )}
            <div>


                <form className="d-flex p-2" role="log in">
                    <Link to={"/register/medical_appointment"}>
                        <button style={{ backgroundColor: '#5C8692', color: '#fff' }} className="btn" >Registrar cita</button>
                    </Link>
                </form>


            </div>
        </div>
    );
};
