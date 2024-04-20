import React, {useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams  } from "react-router-dom";

const CardDoctor = (props) => {
    const { store, actions } = useContext(Context);
    const [doctorData, setDoctorData] = useState(null);
    const [specialityData, setSpecialityData] = useState(null);
    const { id } = useParams(); // Obtener los parámetros de la URL correctamente

    useEffect(() => {
       
        // Obtener la información del doctor solo si aún no se ha cargado
        if (!doctorData) {
            actions.getinfoDoctor(id);
        }
    }, [doctorData, specialityData]);

    useEffect(() => {
       
        // Obtener la información del doctor solo si aún no se ha cargado
        if (!specialityData) {
            actions.loadSpeciality(id)
        }
    }, [doctorData, specialityData]);

    useEffect(() => {
        // Cuando se actualice el contexto con la información del médico, actualizar el estado local
        setDoctorData(store.doctors.find(doctor => doctor.id === props.id));
        setSpecialityData(store.specialities.find(speciality => speciality.id === props.id))
    }, [store.doctors]);

    // Esperar hasta que doctorData tenga valor antes de renderizar el componente
    if (!doctorData) {
        return <div>Cargando...</div>;
    }


    console.log("DOCTORDATA-->", doctorData)
    console.log("STORE-->", store.doctors)
    console.log("STORE.ESPECIALITY-->", store.speciality)

    return (
        <>  
        <div className="col-md-4 mb-3" > 
            <div className="card text-center" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_qLv_ueyszEkB_U0nWQxsPujgcsZe89czAjeWa5S7Q&s"
                     className="card-img-top mx-auto object-fit-sm-contain" alt="img_doc" style={{width:"18rem", objectFit:"contain"}}/>
                <div className="card-body justify-content-center ">
                    <h5 className="card-title aling-text-center">{doctorData.name}&nbsp;{doctorData.surname}</h5>
                    <h6>{doctorData.speciality}</h6>
                    <p>{doctorData.bio}</p>
                </div>
                <hr/>
                <div className="buttons" style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
                    <Link to={"/doctor/" + props.id + "/details"}>
                        <button className="btn btn-primary" style={{  marginBottom:"5px"}}>Leer más</button>
                    </Link> 
                    <Link to={"/"}>
                        <button className="btn btn-primary" style={{  marginBottom:"5px"}}>Pedir cita</button>
                    </Link>
                    <Link to={"/"}>
                        <button className="btn btn-primary" style={{  marginBottom:"10px"}}>Añador a favorito</button>
                    </Link>
                </div>
            </div>
        </div>

        
        </>
    );
};


export default CardDoctor;