import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, Navigate  } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const PrivateDoctor = (props) => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [speciality, setSpeciality] = useState(null);
    const [doctor, setDoctor] = useState(null);

    // useEffect(() => {
    //     actions.loadDoctors()
    //     actions.loadSpecialities()
    //     actions.privateZone()
    // }, []);

    // if (!store.authentication) {
    //     return <Navigate to = "/"/>;
    //   }

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


    return (
        <>
            <div className="container-fluid">
                <ul className="list-group">
                    <li key={id} className="list-group-item d-flex justify-content-between">
                        <div className='container-fluid card-button'>
                            <div className="cardInfo d-flex">
                                <img src="https://i.pinimg.com/236x/60/8a/7d/608a7d2de0cf6898c3869b116c4231be.jpg" className="card-img-top" alt="img contact" style={{ borderRadius:"50%" , width:"150px", height:"150px", marginRight:"30px"}} />
                                <div className="card-body">
                                    <div className="card-tittle d-flex">
                                        <h5>NOMBRE Y APELLIDOS: {doctor.name}</h5>&nbsp;<h5>{doctor.surname}</h5>
                                    </div>
                                        <div className="card-text" style={{ textAlign: "left" }}>
                                            <div className='info_contact' style={{ marginBottom: "15px" }}>
                                                {speciality ? (
                                                    <span style={{ fontSize: "medium " }}>ESPECIALIDAD:&nbsp;{speciality.name}</span>
                                                ) : (
                                                    <span style={{ fontSize: "medium " }}>ESPECIALIDAD: No definida</span>
                                                )}
                                                <br />
                                                <span style={{ fontSize: "small " }}>EMAIL:&nbsp;{doctor.email}</span><br />
                                                <span style={{ fontSize: "small " }}>Nº COLEGIADO:&nbsp;{doctor.medical_license}</span><br />
                                                <span style={{ fontSize: "small " }}>DNI/NIE:&nbsp;{doctor.identification}</span><br />
                                                <span style={{ fontSize: "small " }}>BIO:&nbsp;{doctor.bio}</span><br />
                                                <span style={{ fontSize: "small " }}>EDAD:&nbsp;{doctor.age}</span>
                                            </div>
                                            <div className="container-fluid justify-content-between" >
                                                <Link to={`/editDoctor/${id}`}>
                                                    <button className="btn btn-primario">Modificar perfil</button>
                                                </Link>
                                                <Link to={`/changepassword`}>
                                                    <button className="btn btn-secundario">Cambiar contraseña</button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                          
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

PrivateDoctor.propTypes = {
    match: PropTypes.object
};

export default PrivateDoctor