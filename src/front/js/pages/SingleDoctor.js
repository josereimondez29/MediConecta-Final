import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "./../../styles/singleDoctor.css"; // Importa tu archivo CSS para los estilos personalizados

export const SingleDoctor = (props) => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [speciality, setSpeciality] = useState(null);
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const loadSpecialities = async () => {
            try {
                await actions.loadSpecialities();
            } catch (error) {
                console.error("Error loading specialities:", error);
            }
        };

        loadSpecialities();

    }, [])

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

    return (
        <>
            <div className="jumbotron mb-4">
                <h1 className="display-4">EQUIPO MÉDICO</h1>
                <p className="lead">El experto</p>
            </div>

            <div className="container">
                <div className="d-flex">
                    <div className="image-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_qLv_ueyszEkB_U0nWQxsPujgcsZe89czAjeWa5S7Q&s" alt="Medicina General" className="medicina-general-image half-size" />
                    </div>
                    <div className="text-container">
                        <h2 className="title">{doctor.name}&nbsp;{doctor.surname}</h2>
                        <p className="text">
                            ESPECIALIDAD:&nbsp;{speciality.name}
                        </p>
                        <p className="text">
                            Nº COLEGIADO:&nbsp;{doctor.medical_license}
                        </p>

                        <p className="text">
                            BIO:&nbsp;{doctor.bio}
                        </p>
                    </div>
                </div>

                <div className="buttons d-flex justify-content-center">
                    <Link to={"/register/medical_appointment"}>
                        <button className="btn btn-primario">Registrar cita</button>
                    </Link>
                    <Link to={"/"}>
                        <button className="btn btn-secundario" style={{ marginBottom: "5px" }}>Volver a Home</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

SingleDoctor.propTypes = {
    match: PropTypes.object
};