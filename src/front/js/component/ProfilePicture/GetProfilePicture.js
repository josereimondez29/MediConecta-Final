import React, { useState, useEffect, useContext } from "react";
import { Context } from "./../../store/appContext";
import { Link, useParams } from "react-router-dom";

const GetProfilePicture = (props) => {
    const { store, actions } = useContext(Context);
    const [profilePicture, setProfilePicture] = useState(null);
    const id = localStorage.getItem("id");

    useEffect(() => {
        // Llamar a la función para obtener la imagen de perfil
        getPicture(id);
    }, [id]);

    const getPicture = () => {
        const userType = localStorage.getItem("userType")
        const id = localStorage.getItem("id")
        // Hacer la solicitud al backend para obtener la imagen de perfil del usuario
        fetch(process.env.BACKEND_URL + `/uploadprofilepicture/${userType}/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener la imagen de perfil');
                }
                console.log("Respuesta obtenida correctamente:", response);
                return response.json();
            })
            .then((data) => {
                console.log("DATA", data);
                setProfilePicture(data); // Actualizar el estado con la imagen de perfil obtenida del backend
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
  <div className="col-fluid-md-4 mb-3 cardDoctore"  >
    <div className="cardDoctor d-flex flex-row text-center align-items-center justify-content-between">
      {/* Renderizado condicional para mostrar la imagen de perfil */}
      <div className="d-flex flex-column align-items-start">
        <img src={profilePicture ? profilePicture.url_picture : "https://cdn-icons-png.freepik.com/512/3177/3177438.png"} alt="Imagen del perfil" style={{ width: "9rem", objectFit: "cover" }} />
      </div>
      <div className="buttons mt-3" style={{ width: "50%" }}>
        {/* Agregar el evento onClick con la función deletePicture */}
        <div className="d-flex flex-column">
         
          <Link to={"/img"}>
              <button className="btn" style={{ marginBottom:"15px",backgroundColor: "#5C8692", color: "#fff", transition: "background-color 0.3s", ":hover": { backgroundColor: "#7A9CA5" } }} onMouseEnter={(e) => e.target.style.backgroundColor = "#7A9CA5"} onMouseLeave={(e) => e.target.style.backgroundColor = "#5C8692"}>Subir foto <i className="fa-solid fa-circle-arrow-up" style={{ marginLeft: "5px" }}></i></button>
          </Link>
          <button onClick={actions.deletePicture} className="btn btn-danger mb-2">Eliminar foto</button>
        </div>
      </div>
    </div>
  </div>
    )
}

export default GetProfilePicture;