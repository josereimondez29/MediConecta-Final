import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

export const EditDoctor = () => {
    const { store, actions } = useContext(Context);
    const {doctorData, setDoctorData} = useState(null);
    const { id } = useParams()
    const navigate = useNavigate();

    const [editDoctor, setEditDoctor] = useState({
        name: store.doctors && store.doctors[parseInt(id)] ? store.doctors[parseInt(id)].name : "",
        surname: store.doctors && store.doctors[parseInt(id)] ? store.doctors[parseInt(id)].surname : "",
        email: store.doctors && store.doctors[parseInt(id)] ? store.doctors[parseInt(id)].email : "",
        age: store.doctors && store.doctors[parseInt(id)] ? store.doctors[parseInt(id)].age : "",
        bio: store.doctors && store.doctors[parseInt(id)] ? store.doctors[parseInt(id)].bio : "",
        identification: store.doctors && store.doctors[parseInt(id)] ? store.doctors[parseInt(id)].aidentification : "",
        medical_license: store.doctors && store.doctors[parseInt(id)] ? store.doctors[parseInt(id)].medical_license : ""
    });

    useEffect(() => {
        // Realizar la solicitud al backend para obtener los detalles del doctor
        actions.getinfoDoctor(id)
            .then(response => {
                // Actualizar el estado con los detalles del doctor
                setEditDoctor(response.data);
            })
            .catch(error => {
                console.error("Error fetching doctor details:", error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.updateDoctor(editDoctor);
        navigate("/doctor/" + id);
    }

    console.log(editDoctor)

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
                        value={editDoctor. medical_license}
                    />
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