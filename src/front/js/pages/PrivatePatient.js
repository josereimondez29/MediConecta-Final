import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const PrivatePatient = () => {
    const { store, actions } = useContext(Context);
    const [patientId, setPatientId] = useState(null);
    const idURL = useParams()

    useEffect(() => {
        // Obtener el ID del paciente almacenado en el almacenamiento local
        const id = localStorage.getItem("id");
        setPatientId(id);

        // Verificar si el ID del paciente existe y es válido
        if (id) {
            // Llamar a la acción para obtener la información del paciente utilizando el ID almacenado
            actions.getinfoPatient(id);
        }
    }, []); // Ejecutar solo una vez al cargar el componente

    console.log(store.currentPatient);
    
    return (
        <div className="container-fluid card mt-5" style={{backgroundColor: "#EBF3F5"}}>
            <h1 className="text-center my-4">Información del Paciente</h1>
            <div className="d-flex justify-content-between align-items-center">
            {store.currentPatient ? (
                <div>
                    <ul class="list-group list-group-flush">
                    <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                    <p className="mb-0" style={{ fontFamily: 'Manrope', fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }}><span>Nombre: {store.currentPatient.name}</span><i className="fa-regular fa-user fa-xl" style={{ alignSelf: 'center', color: "#5C8692"}}></i></p>
                    </li>
                    <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                    <p className="mb-0" style={{ fontFamily: 'Manrope', fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }}><span>Apellido: {store.currentPatient.surname}</span><i className="fa-sharp fa-regular fa-user fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                    </li>
                    <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                    <p className="mb-0" style={{ fontFamily: 'Manrope', fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }}><span>Edad: {store.currentPatient.age}</span><i className="fa-regular fa-calendar-days fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                    </li>
                    <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                    <p className="mb-0" style={{ fontFamily: 'Manrope', fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }}><span>Identificación: {store.currentPatient.identification}</span><i className="fa-solid fa-id-card fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                    </li>
                    <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                    <p className="mb-0" style={{ fontFamily: 'Manrope', fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }}><span>Seguro Social: {store.currentPatient.social_security}</span><i className="fa-solid fa-user-doctor fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                    </li>
                    <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                    <p className="mb-0" style={{ fontFamily: 'Manrope', fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }}><span>Email: {store.currentPatient.email}</span><i className="fa-solid fa-envelope fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                    </li>
                    </ul>
                </div>
            ) : (
                <p className="mb-0">No se encontró información del paciente.</p>
            )}
            <img src="https://i.postimg.cc/3wh9fLFn/pexels-shvets-production-8413176.jpg" alt="Doctor" style={{maxWidth: "50%", borderRadius: "10px", marginLeft:"10px"}}/>
            </div>

                <div className="d-flex justify-content-center mt-3">
                    <form className="d-flex p-2">
                        {idURL && (
                            <>
                                <Link to={`/editDoctor/${idURL}`} className="mx-2">
                                    <button className="btn btn-primario">Modificar perfil</button>
                                </Link>
                                <Link to={"/register/medical_appointment"}>
                                    <button className="btn" style={{backgroundColor: "#5C8692", color: "#fff", transition: "background-color 0.3s", ":hover": { backgroundColor: "#7A9CA5" }}} onMouseEnter={(e) => e.target.style.backgroundColor = "#7A9CA5"} onMouseLeave={(e) => e.target.style.backgroundColor = "#5C8692"}>Registrar cita</button>
                                </Link>
                                <Link to={`/changepassword`} className="mx-2">
                                    <button className="btn btn-secundario">Cambiar contraseña</button>
                                </Link>
                            </>
                        )}
                    </form>
            </div>
            </div>
    );
};
