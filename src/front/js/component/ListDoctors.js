import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import CardDoctor from "./CardDoctor";
import { useNavigate } from "react-router-dom";

const ListDoctors = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleDoctors = () => {
        // Redirige al componente Login
        navigate('/alldoctors');
      };

    // Obtener solo los primeros 3 médicos si no se ha hecho clic en "ver más"
    const displayedDoctors = store.doctors.slice(0, 3);

    return (
        <>  

                {displayedDoctors.length > 0 ? (
                    <>
                        {displayedDoctors.map(Doctor => (
                            <CardDoctor 
                                key={Doctor.id}
                                id={Doctor.id}
                                name={Doctor.name}
                                surname={Doctor.surname}
                                bio={Doctor.bio}
                                speciality={Doctor.speciality}
                            />
                        ))}
                        {store.doctors.length > 3 && (
                            <button className="btn btn-secondary" style={{width:"60%", marginBottom: "14px"}} onClick={handleDoctors}>Accede a ver más doctores</button>
                        )}
                    </>
                ) : (
                    <p>No hay doctores disponibles.</p>
                )}
          
         
        </>
    );
};

export default ListDoctors