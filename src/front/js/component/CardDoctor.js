import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const CardDoctor = (props) => {
    const { store, actions } = useContext(Context);
    const [doctorData, setDoctorData] = useState(null);
    const [speciality, setSpeciality] = useState(null);
    const { id } = useParams(); // Obtener los parámetros de la URL correctamente

    //this is causing error bcs of the invalid id...also de useParams??

    // useEffect(() => {
    //     // Obtener la información del doctor y su especialidad asociada
    //     console.log("este es el id:", id)
    //     if (!doctorData && id) {
    //         actions.getinfoDoctor(id);
    //     }
    // }, [doctorData]);

    useEffect(() => {
        // Cuando se actualice el contexto con la información del médico, actualizar el estado local
        setDoctorData(store.doctors.find(doctor => doctor.id === props.id));
    }, [store.doctors]);

    useEffect(() => {
        // Cuando se actualice el doctorData, obtener la especialidad correspondiente y establecerla en el estado
        if (doctorData && doctorData.speciality_id) {
            const specialityId = doctorData.speciality_id;
            const foundSpeciality = store.specialities.find(speciality => speciality.id === specialityId);
            setSpeciality(foundSpeciality);
        }
    }, [doctorData, store.specialities]);

    // Esperar hasta que doctorData y speciality tengan valor antes de renderizar el componente
    if (!doctorData || !speciality) {
        return <div> </div>;
    }


    // console.log("DOCTORDATA CARD DOCTOR-->", doctorData)
    // console.log("SPECIALITYRDATA CARD DOCTOR-->", setSpeciality)
    // console.log("STORE CARD DOCTOR-->", store.doctors)
    // console.log("STORE.ESPECIALITY CARD DOCTOR-->", store.specialities)

    return (
        <>  
        <div className="col-md-4 mb-3" > 
            <div className="card text-center" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_qLv_ueyszEkB_U0nWQxsPujgcsZe89czAjeWa5S7Q&s"
                     className="card-img-top mx-auto object-fit-sm-contain" alt="img_doc" style={{width:"9rem", objectFit:"cover"}}/>
                <div className="card-body justify-content-center ">
                    <h5 className="card-title aling-text-center">{doctorData.name}&nbsp;{doctorData.surname}</h5>
                    <h6>{speciality ? speciality.name : "Sin especialidad"}</h6>
                    {/* <p>{doctorData.bio}</p> */}
                </div>
                <hr/>
                <div className="buttons" style={{display: "flex", flexDirection: "column", alignItems:"center", marginTop:"0px"}}>
                    <Link to={"/doctor/" + props.id + "/details"}>
                        <button className="btn btn-secundario" style={{  marginBottom:"5px"}}>Leer más</button>
                    </Link> 
                    <Link to = {"/register/medical_appointment"}>
                        <button className="btn btn-primario" style={{ marginBottom:"15px"}} >Registrar cita</button>
                    </Link>
                </div>
            </div>
        </div>

        
        </>
    );
};


export default CardDoctor;