import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import GetProfilePicture from "../component/ProfilePicture/GetProfilePicture";

const PrivateDoctor = (props) => {
    const { store, actions } = useContext(Context);
    const id = localStorage.getItem("id");
    const [loading, setLoading] = useState(true);
    const [speciality, setSpeciality] = useState(null);
    const [doctor, setDoctor] = useState(null);


    // useEffect(() => {
    //     actions.loadDoctors()
    //     actions.loadSpecialities()

    // }, []);

    // if (!store.authentication) {
    //     return <Navigate to = "/"/>;
    //   }

    useEffect(() => {
        // console.log("Hola que tal", store.doctors.length)
        if (id && store.doctors && store.doctors.length > 0 && store.specialities && store.specialities.length > 0) {
            const selectedDoctor = store.doctors.find(doctor => doctor.id.toString() === id);
            // console.log(selectedDoctor)
            if (selectedDoctor) {
                setDoctor(selectedDoctor);
                setLoading(false);
                // Buscar la especialidad correspondiente al médico
                const foundSpeciality = store.specialities.find(speciality => speciality.id === selectedDoctor.speciality_id);
                setSpeciality(foundSpeciality);
            } else {
                setLoading(true);
            }
        }
    }, [id, store.doctors, store.specialities]);
    if (loading) {
        return <p>Cargando...</p>;
    }
    if (!doctor) {
        return <p>No se pudo encontrar la información del médico.</p>;
    }

    // console.log("DOCTORDATA PRIVATE DOCTOR-->", doctor)
    // console.log("STORE PRIVATE DOCTOR-->", store.doctors)
    // console.log("STORE.ESPECIALITY PRIVATE DOCTOR-->", store.specialities)

    return (
        <>
         
            <div className="container-fluid card mt-5" style={{ backgroundColor: "#EBF3F5" }}>
                <h1 className="text-center my-4">Información del Doctor</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <GetProfilePicture />
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b> Nombre: </b>  {doctor.name}</span><i className="fa-regular fa-user fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                            </li>
                            <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Apellido:</b> {doctor.surname}</span><i className="fa-sharp fa-regular fa-user fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                            </li>
                            <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Edad: </b>{doctor.age}</span><i className="fa-regular fa-calendar-days fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                            </li>
                            <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Identificación: </b>{doctor.identification}</span><i className="fa-solid fa-id-card fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                            </li>
                            <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Email: </b>{doctor.email}</span><i className="fa-solid fa-envelope fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                            </li>
                            <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Medical License: </b>{doctor.medical_license}</span><i className="fa-solid fa-stethoscope fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                            </li>
                            <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Especialidad: </b>{speciality.name}</span><i className="fa-solid fa-hand-holding-medical fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                            </li>
                            <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                                <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span><b>Bio: </b>{doctor.bio}</span><i className="fa-solid fa-comment-medical fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
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
                                    <button className="btn btn-primario">Modificar perfil</button>
                                </Link>
                                <Link to={`/changepassword`} className="mx-2">
                                    <button className="btn btn-secundario">Cambiar contraseña</button>
                                </Link>
                            </>
                        )}
                    </form>

            </div>
        </div>
        <div>
        <h1 className="text-center">Citas pendientes</h1>
            {/* <ListAppointment/> */}
        </div>
        </>
    );
}
PrivateDoctor.propTypes = {
    match: PropTypes.object
};
export default PrivateDoctor