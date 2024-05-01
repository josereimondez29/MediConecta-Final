import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import paciente2 from "../../img/paciente2.jpg"
import { Link, useParams } from "react-router-dom";
import GetProfilePicture from "../component/ProfilePicture/GetProfilePicture";


export const PrivatePatient = () => {
    const { store, actions } = useContext(Context);
    const [patientId, setPatientId] = useState(null);
    const idURL = useParams();

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
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="col-lg-6 container card mt-5">
                      <div className="d-flex flex-column align-items-start">
                    <GetProfilePicture />
                    <h1>Información del paciente</h1>
                    {store.currentPatient ? (
                        <div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                    <p className="mb-0" style={{ fontFamily: 'Manrope', fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }}><span>Nombre: {store.currentPatient.name}</span><i className="fa-regular fa-user fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
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

                <div className="d-flex justify-content-center align-items-center mt-3">
                    <div className="d-flex justify-content-center">
                        <form className="d-flex p-2">
                            {patientId && (
                                <Link to={`/editPatient/${patientId}`}>
                                    <button className="btn" style={{ backgroundColor: "#5C8692", color: "#fff", transition: "background-color 0.3s", ":hover": { backgroundColor: "#7A9CA5" } }} onMouseEnter={(e) => e.target.style.backgroundColor = "#7A9CA5"} onMouseLeave={(e) => e.target.style.backgroundColor = "#5C8692"}>Editar información <i class="fa-solid fa-pen-to-square" style={{ marginLeft: "5px" }}></i></button>
                                </Link>
                            )}
                        </form>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to={`/`} className="mx-2">
                            <button className="btn" style={{ backgroundColor: "#5C8692", color: "#fff", transition: "background-color 0.3s", ":hover": { backgroundColor: "#7A9CA5" } }} onMouseEnter={(e) => e.target.style.backgroundColor = "#7A9CA5"} onMouseLeave={(e) => e.target.style.backgroundColor = "#5C8692"}>Cambiar contraseña <i class="fa-solid fa-lock" style={{ marginLeft: "5px" }}></i></button>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center" style={{height: "600px"}}>
                    <img src= {paciente2} alt="Doctor" style={{ height: "400px", width: "600px", marginRight: "60px", marginBottom: "20px", borderRadius: "10px", marginLeft: "10px" }} />
                    <form className="d-flex p-2" role="log in">
                            <Link to={"/register/medical_appointment"}>
                                <button className="btn" style={{ backgroundColor: "#5C8692", color: "#fff", width: "200px", transition: "background-color 0.3s", ":hover": { backgroundColor: "#7A9CA5" } }} onMouseEnter={(e) => e.target.style.backgroundColor = "#7A9CA5"} onMouseLeave={(e) => e.target.style.backgroundColor = "#5C8692"}>Registrar cita<i className="fa-regular fa-calendar-days fa-xl" style={{ marginLeft: "15px" }}></i></button>
                            </Link>
                    </form>
                </div>
            </div>
        </>
    )
};
