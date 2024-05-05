import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import GetProfilePicture from "../component/ProfilePicture/GetProfilePicture";
import ListDocument from "../component/Doctors/ListDocument";
import ListAppointmentDoctor from "../component/Doctors/ListAppointmentDoctor";

const PrivateDoctor = (props) => {
    const { store, actions } = useContext(Context);
    const id = localStorage.getItem("id");
    const userType = localStorage.getItem("userType");
    const [loading, setLoading] = useState(true);
    const [speciality, setSpeciality] = useState(null);
    const [doctor, setDoctor] = useState(null);
    const [updateKey, setUpdateKey] = useState(0); // Variable de estado para forzar la actualización

    useEffect(() => {
        actions.loadDoctors(),
        actions.loadSpecialities()
    }, []);

    // Función para cargar los datos iniciales
    const loadInitialData = async () => {
        if (id && store.doctors && store.doctors.length > 0 && store.specialities && store.specialities.length > 0) {
            const selectedDoctor = store.doctors.find(doctor => doctor.id.toString() === id);
            if (selectedDoctor) {
                setDoctor(selectedDoctor);
                setLoading(false);
                const foundSpeciality = store.specialities.find(speciality => speciality.id === selectedDoctor.speciality_id);
                setSpeciality(foundSpeciality);
            } else {
                setLoading(false); // No se encontró el médico, pero ya hemos terminado de cargar
            }
        } else {
            setLoading(false); // No hay datos disponibles, pero ya hemos terminado de cargar
        }
    };

    // Efecto para manejar la carga inicial
    useEffect(() => {
        loadInitialData();
    }, [id, store.doctors, store.specialities, actions]);

    const handleUpdateSuccess = async () => {
        // Función para manejar la actualización exitosa
        // Aquí se debe forzar la actualización del componente
        setUpdateKey(prevKey => prevKey + 1); // Cambiar el valor de updateKey para forzar la actualización
    
        // Además de cambiar la clave de actualización, puedes volver a cargar los datos aquí
        await loadInitialData(); // Cargar los datos actualizados después de la actualización exitosa
    };

    if (loading) {
        return <p>Cargando...</p>;
    }
    if (!doctor) {
        return <p>No se pudo encontrar la información del médico.</p>;
    }
 
 
    return (
        < >
            <div key={updateKey} className="container-fluid card mt-5" style={{ backgroundColor: "#EBF3F5" }}>
                <h1 className="text-center my-4">Información del Doctor</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <GetProfilePicture />
                        <div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                    <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b> Nombre: </b>  {doctor ? doctor.name : ""}</span><i className="fa-regular fa-user fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                                </li>
                                <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                    <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Apellido:</b> {doctor ? doctor.surname : ""}</span><i className="fa-sharp fa-regular fa-user fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                                </li>
                                <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                    <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Edad: </b>{doctor ? doctor.age: ""}</span><i className="fa-regular fa-calendar-days fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                                </li>
                                <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                    <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Identificación: </b>{doctor ? doctor.identification : ""}</span><i className="fa-solid fa-id-card fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                                </li>
                                <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                    <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Email: </b>{doctor ? doctor.email : ""}</span><i className="fa-solid fa-envelope fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                                </li>
                                <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                    <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Medical License: </b>{doctor ? doctor.medical_license: ""}</span><i className="fa-solid fa-stethoscope fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                                </li>
                                <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                    <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Especialidad: </b>{speciality ? speciality.name : 'No disponible'}</span><i className="fa-solid fa-hand-holding-medical fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                                </li>
                                <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                    <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Bio: </b>{doctor ? doctor.bio : ""}</span><i className="fa-solid fa-comment-medical fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="https://i.postimg.cc/5yysq6SJ/pexels-karolina-grabowska-4021779.jpg" alt="Doctor" style={{ maxWidth: "50%", borderRadius: "10px", marginLeft: "10px" }} />
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <form className="d-flex p-2">
                        {id && (
                            <>
                                <Link to={`/editDoctor/${id}`} className="mx-2">
                                    <button className="btn" style={{ backgroundColor: "#5C8692", color: "#fff", transition: "background-color 0.3s", ":hover": { backgroundColor: "#7A9CA5" } }} onMouseEnter={(e) => e.target.style.backgroundColor = "#7A9CA5"} onMouseLeave={(e) => e.target.style.backgroundColor = "#5C8692"}>Editar información <i className="fa-solid fa-pen-to-square" style={{ marginLeft: "5px" }}></i></button>
                                </Link>
                                <Link to={`/changepassword`} className="mx-2">
                                <button className="btn" style={{ backgroundColor: "#5C8692", color: "#fff", transition: "background-color 0.3s", ":hover": { backgroundColor: "#7A9CA5" } }} onMouseEnter={(e) => e.target.style.backgroundColor = "#7A9CA5"} onMouseLeave={(e) => e.target.style.backgroundColor = "#5C8692"}>Cambiar contraseña <i className="fa-solid fa-lock" style={{ marginLeft: "5px" }}></i></button>
                                </Link>
                            </>
                        )}
                    </form>

            </div>
        </div>
        <div className="container-fluid d-flex justify-content-around">
                <div>
                    <h1 className="text-center">Citas pendientes</h1>
                    <div className="container">
                        {id &&  <ListAppointmentDoctor id={id}/>}
                    </div>
                </div>
                <div>
                    <h1 className="text-center">Documentos de pacientes</h1>
                    {/* Listado de documentos de pacientes */}
                    <ListDocument />
                </div>
            </div>
        </>
    );
};

PrivateDoctor.propTypes = {
    match: PropTypes.object
};

export default PrivateDoctor;