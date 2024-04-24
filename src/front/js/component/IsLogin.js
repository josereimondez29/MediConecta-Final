import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const IsLogin = () => {
    // Inicializamos el estado local para almacenar el ID del usuario
    const [id, setId] = useState(() => localStorage.getItem("id"));


    useEffect(() => {
        const idFromStorage = localStorage.getItem("id");
        console.log("ID recuperado de localStorage:", idFromStorage);
        setId(idFromStorage);
    }, []);

    return (
        <>
            <div className="container">
                <h4>Login correcto</h4>
                <p>Para la correcta funcionalidad de la web, debes tener completo la información del perfil</p>
                
                <div className="container-fluid d-flex justify-content-between">
                    <Link to="/private">
                        <button className="btn btn-info">Ir a zona privada</button>
                    </Link>
                    {/* Utilizamos el valor actualizado de id */}
                    { id && (
                            <Link to={`/editDoctor/${id}`}>
                                <button className="btn btn-info">Modificar perfil</button>
                            </Link>
                    )}
                </div>
            </div>
        </>
    );
};