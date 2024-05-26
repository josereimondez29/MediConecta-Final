import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import GetProfilePicture from "../component/ProfilePicture/GetProfilePicture";
import ListDocument from "../component/Documents/ListDocuments";
import ListAppointmentDoctor from "../component/Doctors/MedicalAppointment/ListAppointmentDoctor";

const PrivateDoctor = (props) => {
    const { store, actions } = useContext(Context);
    const id = localStorage.getItem("id");
    const userType = localStorage.getItem("userType");
    const [loading, setLoading] = useState(true);
    const [speciality, setSpeciality] = useState(null);
    const [doctor, setDoctor] = useState(null);
    const [updateKey, setUpdateKey] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        actions.loadDoctors(),
            actions.loadSpecialities()
    }, []);

    const loadInitialData = async () => {
        if (id && store.doctors && store.doctors.length > 0 && store.specialities && store.specialities.length > 0) {
            const selectedDoctor = store.doctors.find(doctor => doctor.id.toString() === id);
            if (selectedDoctor) {
                setDoctor(selectedDoctor);
                setLoading(false);
                const foundSpeciality = store.specialities.find(speciality => speciality.id === selectedDoctor.speciality_id);
                setSpeciality(foundSpeciality);
            } else {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadInitialData();
    }, [id, store.doctors, store.specialities, actions]);

    if (!userType || userType !== "doctor") {
        // Si el usuario no está autenticado o no es un médico, redirige a la página de inicio
        navigate('/');
        return null; // No renderizar nada si el usuario no está autorizado
    }

    if (loading) {
        return <p>Cargando...</p>;
    }
    if (!doctor) {
        return <p>No se pudo encontrar la información del médico.</p>;
    }

    return (
        <div className="container-fluid" style={{ backgroundColor: "#EBF3F5", paddingTop: "15px" }}>
            <h1 className="text-center my-4">Información del Doctor</h1>
            <div className="row">
                <div className="col-md-6">
                    <GetProfilePicture />
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item mb-1">
                            <p className="mb-0"><i className="fa-regular fa-user fa-xl" style={{ color: "#5C8692",  marginRight:"7px"}}></i><b> Nombre: </b> {doctor.name} </p>
                        </li>
                        <li className="list-group-item mb-1">
                            <p className="mb-0"><i className="fa-sharp fa-regular fa-user fa-xl" style={{color: "#5C8692",  marginRight:"7px"}}></i><b>Apellido:</b> {doctor.surname} </p>
                        </li>
                        <li className="list-group-item mb-1">
                            <p className="mb-0"><i className="fa-regular fa-calendar-days fa-xl" style={{  color: "#5C8692",  marginRight:"7px" }}></i><b>Edad: </b>{doctor.age}</p>
                        </li>
                        <li className="list-group-item mb-1">
                            <p className="mb-0"> <i className="fa-solid fa-id-card fa-xl" style={{ color: "#5C8692", marginRight:"7px"}}></i><b>Identificación: </b>{doctor.identification} </p>
                        </li>
                        <li className="list-group-item mb-1">
                            <p className="mb-0"><i className="fa-solid fa-envelope fa-xl" style={{  color: "#5C8692",  marginRight:"7px"}}></i><b>Email: </b>{doctor.email}</p>
                        </li>
                        <li className="list-group-item mb-1">
                            <p className="mb-0"><i className="fa-solid fa-user-doctor fa-xl" style={{  color: "#5C8692",  marginRight:"7px"}}></i><b>Medical License: </b>{doctor.medical_license}</p>
                        </li>
                        <li className="list-group-item mb-1">
                            <p className="mb-0"> <i className="fa-solid fa-stethoscope fa-xl" style={{  color: "#5C8692", marginRight:"7px" }}></i><b>Especialidad: </b>{speciality ? speciality.name : 'No disponible'}</p>
                        </li>
                        <li className="list-group-item mb-1">
                            <p className="mb-0"><i className="fa-solid fa-comment-medical fa-xl" style={{ color: "#5C8692", marginRight:"7px" }}></i><b>Bio: </b>{doctor.bio}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <img src="https://i.postimg.cc/5yysq6SJ/pexels-karolina-grabowska-4021779.jpg" alt="Doctor" className="img-fluid rounded" />
                </div>
            </div>
            <div className="row mt-3">

                <div className="col-md-12 text-center">
                    <Link to={`/editDoctor/${id}`}>
                        <button className="btn" style={{ backgroundColor: "#5C8692", color: "#fff", transition: "background-color 0.3s", ":hover": { backgroundColor: "#7A9CA5" } }} onMouseEnter={(e) => e.target.style.backgroundColor = "#7A9CA5"} onMouseLeave={(e) => e.target.style.backgroundColor = "#5C8692"}>Editar información <i className="fa-solid fa-pen-to-square" style={{ marginLeft: "5px" }}></i></button>
                    </Link>
                    <Link to={`/changepassword`} className="mx-2">
                        <button className="btn" style={{ backgroundColor: "#5C8692", color: "#fff", transition: "background-color 0.3s", ":hover": { backgroundColor: "#7A9CA5" } }} onMouseEnter={(e) => e.target.style.backgroundColor = "#7A9CA5"} onMouseLeave={(e) => e.target.style.backgroundColor = "#5C8692"}>Cambiar contraseña <i className="fa-solid fa-lock" style={{ marginLeft: "5px" }}></i></button>
                    </Link>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h2 className="text-center">Citas pendientes</h2>
                    <ListAppointmentDoctor id={id} />
                </div>
                <div className="col-md-6">
                    <h2 className="text-center">Documentos de pacientes</h2>
                    <ListDocument />
                </div>
            </div>
        </div>
    );
};
PrivateDoctor.propTypes = {
    match: PropTypes.object
};
export default PrivateDoctor;