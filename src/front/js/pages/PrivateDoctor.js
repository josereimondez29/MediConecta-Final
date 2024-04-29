import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, Navigate  } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
// import { ListAppointment } from "../component/ListAppointment";

const PrivateDoctor = (props) => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [speciality, setSpeciality] = useState(null);
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        actions.loadDoctors()
        actions.loadSpecialities()
    }, []);

    if (!localStorage.token) {
        return <Navigate to = "/"/>;
      }

    useEffect(() => {
        if (id && store.doctors && store.doctors.length > 0) {
            const selectedDoctor = store.doctors.find(doctor => doctor.id.toString() === id);
            if (selectedDoctor) {
                setDoctor(selectedDoctor);
                setLoading(false);

                // Buscar la especialidad correspondiente al médico
                const foundSpeciality = store.specialities.find(speciality => speciality.id === selectedDoctor.speciality_id);
                setSpeciality(foundSpeciality);
            } else {
                setLoading(false);
            }
        }
    }, [id, store.doctors, store.specialities]);


    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!doctor) {
        return <p>No se pudo encontrar la información del médico.</p>;
    }

    console.log("DOCTORDATA PRIVATE DOCTOR-->", doctor)
    console.log("STORE PRIVATE DOCTOR-->", store.doctors)
    console.log("STORE.ESPECIALITY PRIVATE DOCTOR-->", store.specialities)
    console.log("STORE.METTING PRIVATE DOCTOR-->", store.appointments)
    console.log("STORE.APPOINTMENT PRIVATE DOCTOR-->", store.meetings)



    return (
        <>
        <div className="container-fluid card mt-5" style={{backgroundColor: "#EBF3F5"}}>
        <h1 className="text-center my-4">Información del Doctor</h1>
            <div className="d-flex justify-content-between align-items-center">
                
                
           
            {store.doctors ? (
                <div>
                    <ul class="list-group list-group-flush">
                        <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                            <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Nombre: {doctor.name}</span><i className="fa-regular fa-user fa-xl" style={{ alignSelf: 'center', color: "#5C8692"}}></i></p>
                        </li>
                        <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                            <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Apellido: {doctor.surname}</span><i class="fa-sharp fa-regular fa-user fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                        </li>
                        <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                            <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Edad: {doctor.age}</span><i class="fa-regular fa-calendar-days fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                        </li>
                        <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                            <p className="mb-0" style={{  display: 'flex', justifyContent: 'space-between' }}><span>Identificación: {doctor.identification}</span><i class="fa-solid fa-id-card fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                        </li>
                        <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                            <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Email:{doctor.email}</span><i class="fa-solid fa-envelope fa-xl" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                        </li>
                        <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                            <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Medical License:{doctor.medical_license}</span><i class="fa-solid fa-stethoscope" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                        </li>
                        <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                            <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Especialidad:{speciality.name}</span><i class="fa-solid fa-hand-holding-medical" style={{ alignSelf: 'center', color: "#5C8692", fontSize:"inherit" }}></i></p>
                        </li>
                        <li className="list-group-item mb-1" style={{ borderRadius: '10px' }}>
                            <p className="mb-0" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Bio:{doctor.bio}</span><i class="fa-solid fa-comment-medical" style={{ alignSelf: 'center', color: "#5C8692" }}></i></p>
                        </li>
                    </ul>
                </div>
            ) : (
                <p className="mb-0">No se encontró información del paciente.</p>
            )}

            <img src="https://i.postimg.cc/5yysq6SJ/pexels-karolina-grabowska-4021779.jpg" alt="Doctor" style={{maxWidth: "50%", borderRadius: "10px", marginLeft:"10px"}}/>
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