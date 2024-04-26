import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

export const EditDoctor = () => {
        const { store, actions } = useContext(Context);
        const { id } = useParams();
        const idFromUrl = parseInt(id);
        const navigate = useNavigate();
        const [speciality, setSpeciality] = useState({});
        const [specialities, setSpecialities] = useState([]);
    
        // Utilizamos useState para mantener el estado del doctor que se está editando
        const [editDoctor, setEditDoctor] = useState({
            name: "",
            surname: "",
            email: "",
            age: "",
            bio: "",
            identification: "",
            medical_license: "",
            speciality_id: "" // Inicializar correctamente el ID de la especialidad
        });

     
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
            // Obtener las especialidades del almacén y actualizar el estado
            setSpecialities(store.specialities);
        }, [store.specialities]);
    
        // Utilizamos useEffect para cargar los datos del doctor una vez que se renderiza el componente
        useEffect(() => {
            // Buscamos el doctor en el store por su ID
            const editDoctor = store.doctors.find(doctor => doctor.id === idFromUrl);
            
            // Si encontramos el doctor, actualizamos el estado de editDoctor con sus datos
            if (editDoctor) {
                setEditDoctor({ 
                    name: editDoctor.name || "",
                    surname: editDoctor.surname || "",
                    email: editDoctor.email || "",
                    age: editDoctor.age || "",
                    bio: editDoctor.bio || "",
                    identification: editDoctor.identification || "",
                    medical_license: editDoctor.medical_license || "",
                    speciality_id: editDoctor.speciality_id || ""
                });
            }
        }, [idFromUrl, store.doctors]); // Dependencias del efecto: idFromUrl y store.doctors
    
        useEffect(() => {
            // Cuando se actualice el doctorData, obtener la especialidad correspondiente y establecerla en el estado
            if (editDoctor && editDoctor.speciality_id) {
                const foundSpeciality = specialities.find(speciality => speciality.id === editDoctor.speciality_id);
                setSpeciality(foundSpeciality);
            }
        }, [editDoctor, specialities]); 
    
        // Función para manejar el envío del formulario
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
                // Llamar a la función de actualización del doctor de manera asíncrona
                await actions.updateDoctor(editDoctor, id);
                
                // Después de la actualización exitosa, navegar a la página del doctor
                
                navigate("/changelog/");
                // setTimeout(() => {
                //     navigate(`/doctor/${id}`);
                //   }, 3000);

            } catch (error) {
                // Manejar cualquier error que pueda ocurrir durante la actualización
                console.error("Error updating doctor:", error);
            }
        };

    return (
         
            <>
             <div className='content' style={{ padding: "50px" }}>
                <form onSubmit={handleSubmit}>
                    <h1 className='tittle' style={{ textAlign: "center" }}><strong>Edit the contact</strong></h1>
                    <div className="mb-3"> 
                        <label htmlFor="inputname" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputname" name="name" placeholder="Name" 
                            onChange={(e) => setEditDoctor({ ...editDoctor, name: e.target.value })}
                            value={editDoctor.name}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" name="email" rows="3" placeholder="Enter email"
                            onChange={(e) => setEditDoctor({ ...editDoctor, email: e.target.value })}
                            value={editDoctor.email}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputsurname" className="form-label">surname</label>
                        <input type="text" className="form-control" id="inputssurname" name="surname" rows="3" placeholder="Enter surname"
                            onChange={(e) => setEditDoctor({ ...editDoctor, surname: e.target.value })}
                            value={editDoctor.surname}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputAge" className="form-label">age</label>
                        <input type="text" className="form-control" id="inputAge" rows="3" name="age" placeholder="Enter age"
                            onChange={(e) => setEditDoctor({ ...editDoctor, age: e.target.value })}
                            value={editDoctor.age}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputbio" className="form-label">bio</label>
                        <input type="text" className="form-control" id="inputbio" rows="3" name="bio" placeholder="Enter bio"
                            onChange={(e) => setEditDoctor({ ...editDoctor, bio: e.target.value })}
                            value={editDoctor.bio}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputidentification" className="form-label">identification</label>
                        <input type="text" className="form-control" id="inputidentification" rows="3" name="identification" placeholder="Enter identification"
                            onChange={(e) => setEditDoctor({ ...editDoctor, identification: e.target.value })}
                            value={editDoctor.identification}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputmedical_license" className="form-label"> medical license</label>
                        <input type="text" className="form-control" id="inputmedical_license" rows="3" name="medical license<" placeholder="Enter  medical_license"
                            onChange={(e) => setEditDoctor({ ...editDoctor,  medical_license: e.target.value })}
                            value={editDoctor.medical_license}
                        />
                    </div>
    
                    <div className="mb-3">
                        <label htmlFor="inputspeciality" className="form-label">Speciality</label>
                        <select
                            className="form-select"
                            id="inputspeciality"
                            name="speciality"
                            value={speciality ? speciality.id : ""}
                            onChange={(e) => {
                                const selectedSpecialityId = parseInt(e.target.value);
                                const selectedSpeciality = specialities.find(spec => spec.id === selectedSpecialityId);
                                setSpeciality(selectedSpeciality);
                                setEditDoctor({ ...editDoctor, speciality_id: selectedSpecialityId });
                            }}
                        >
                            <option value="">Elige una opción</option> {/* Opción por defecto */}
                            {specialities.map(speciality => (
                                <option key={speciality.id} value={speciality.id}>{speciality.name}</option>
                            ))}
                        </select>
                    </div>
                 
                    <div className='d-grid gap-2'>
                        <button  className="btn btn-primary" type="submit" >Update</button>
                    </div>
                    
                    <Link to={"/"}>
                        <button className='btn buttonContact' type="submit" >Cancel, get back to contacts</button>
                    </Link>
                    </form>
                </div>
            </>
        )
    }