// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import './../../styles/Private.css';

// export const Private = ( ) => {

//     const navigate = useNavigate();
//     const [user, setUser] = useState(localStorage.getItem('name'));
    
//     useEffect (()=>{
//         console.log("cambió el name")
//         console.log(localStorage.getItem("name"))
//         setUser(localStorage.getItem('name'));
//       },[localStorage.getItem('name')])
    

//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6 private-container">
//                     <h1 className="text-center">Bienvenido, {user}!</h1>
          
//                     <p className="text-center">¡Gracias por iniciar sesión!</p>
                   
//                    <Link to={"/doctor/" + 3}>
//                         <button className="Doctors">Acceder a Doctors</button>
//                    </Link>

//                 </div>
//             </div>
//         </div>
//     );
// };

import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const PrivateMedico = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Obtener el ID del médico almacenado en el almacenamiento local
        const medicoId = localStorage.getItem("id");

        // Verificar si el ID del médico existe y es válido
        if (medicoId) {
            // Llamar a la acción para obtener la información del médico utilizando el ID almacenado
            actions.getinfoMedico(medicoId);
        }
    }, []); // Ejecutar solo una vez al cargar el componente

    console.log(store.currentMedico);

    return (
        <div className="container">
            <h1>Información del médico</h1>
            {store.currentMedico ? (
                <div>
                    <p>Nombre: {store.currentMedico.doctor.name}</p>
                    <p>Apellido: {store.currentMedico.doctor.surname}</p>
                </div>
            ) : (
                <p>No se encontró información del médico.</p>
            )}
        </div>
    );
};
