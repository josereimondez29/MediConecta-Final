import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardDoctor = (props) => {
    const { store } = useContext(Context);
    const [doctorData, setDoctorData] = useState(null);
    const [speciality, setSpeciality] = useState(null);
    const [profilePictureUrl, setProfilePictureUrl] = useState(""); // Estado para almacenar la URL de la imagen del perfil

    useEffect(() => {
        // Cuando se actualice el contexto con la información del médico, actualizar el estado local
        setDoctorData(store.doctors.find(doctor => doctor.id === props.id));
    }, [store.doctors, props.id]);

    useEffect(() => {
        // Cuando se actualice el doctorData, obtener la especialidad correspondiente y establecerla en el estado
        if (doctorData && doctorData.speciality_id) {
            const specialityId = doctorData.speciality_id;
            const foundSpeciality = store.specialities.find(speciality => speciality.id === specialityId);
            setSpeciality(foundSpeciality);
        }
    }, [doctorData, store.specialities]);

    useEffect(() => {
        // Obtener la URL de la imagen del perfil
        const fetchPicture = async () => {
            try {
                const response = await fetch(process.env.BACKEND_URL + `/profilepicture/doctor/${props.id}`);
                const result = await response.json();
                setProfilePictureUrl(result.url_picture);
            } catch (error) {
                console.error("Error obteniendo la imagen del perfil:", error);
            }
        };
        fetchPicture();
    }, [props.id]);

    // Esperar hasta que doctorData, speciality y profilePictureUrl tengan valor antes de renderizar el componente
    if (!doctorData || !speciality || !profilePictureUrl) {
        return null; // O podrías mostrar un mensaje de carga
    }

    return (
        <div className="col-md-4 mb-3 cardDoctore"> 
            <div className="cardDoctor text-center">
                <img src={profilePictureUrl} className="card-img-topDoctor mx-auto object-fit-sm-contain" alt="img_doc" style={{ width: "9rem", objectFit: "cover" }}/>
                <div className="card-bodyDoctor justify-content-center">
                    <h5 className="card-titleDoctor aling-text-center">{doctorData.name}&nbsp;{doctorData.surname}</h5>
                    <h6>{speciality ? speciality.name : "Sin especialidad"}</h6>
                </div>
                <hr/>
                <div className="buttons" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0px" }}>
                    <Link to={"/doctor/" + props.id + "/details"}>
                        <button className="btn btn-secundario" style={{ marginBottom: "5px" }}>Leer más</button>
                    </Link> 
                    <Link to={"/register/medical_appointment"}>
                        <button className="btn btn-primario" style={{ marginBottom: "15px" }}>Registrar cita</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardDoctor;