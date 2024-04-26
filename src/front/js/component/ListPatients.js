// import React, { useContext, useState } from "react";
// import { Context } from "../store/appContext";
// import CardPatient from "./CardPatient";
// import { useNavigate } from "react-router-dom";

// const ListPatients = () => {
//     const { store, actions } = useContext(Context);
//     const [showAll, setShowAll] = useState(false);
//     const navigate = useNavigate();

//     const handlePatients = () => {
//         // Redirige al componente Login
//         navigate('privatepatient');
//       };

//     // Obtener solo los primeros 3 médicos si no se ha hecho clic en "ver más"
//     const displayedPatients = store.patients.slice(0, );

//     return (
//         <>  

//                 {displayedPatients.length > 0 ? (
//                     <>
//                         {displayedPatients.map(Patient => (
//                             <CardPatient 
//                                 key={Patient.id}
//                                 id={Patient.id}
//                                 name={Patient.name}
//                                 surname={Patient.surname}
//                                 bio={Patient.bio}
//                                 speciality={Patient.speciality}
//                             />
//                         ))}
//                         {store.patients.length > 3 && (
//                             <button className="btn btn-secondary" style={{width:"60%", marginBottom: "14px"}} onClick={handlePatients}>Accede a ver más pacientes</button>
//                         )}
//                     </>
//                 ) : (
//                     <p>No hay pacientes disponibles.</p>
//                 )}
          
         
//         </>
//     );
// };

// export default ListPatients
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardPatient from "./CardPatient";

const ListPatients = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Cargar la información del paciente que ha iniciado sesión
        actions.getinfoPatient(localStorage.getItem("id"));
    }, []);

    return (
        <>
            {store.currentPatient ? (
                <CardPatient 
                    id={store.currentPatient.id}
                    name={store.currentPatient.name}
                    surname={store.currentPatient.surname}
                    bio={store.currentPatient.bio}
                    speciality={store.currentPatient.speciality}
                />
            ) : (
                <p>No hay paciente disponible.</p>
            )}
        </>
    );
};

export default ListPatients;
