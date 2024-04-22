import React from "react";
import { Link } from "react-router-dom";

export const IsLogin = () => {
    
    const id = localStorage.getItem("id");

    return (
        <>
            <div className="container">
                <h4>Login correcto</h4>
                <p>Para la correcta funcionalidad de la web, debes tener completo la información del perfil</p>
                
                
                <div className="container-fluid d-flex justify-content-between">
                    <Link to="/private">
                        <button className="btn btn-info">Ir a zona privada</button>
                    </Link>
                    <Link to={`/editDoctor/${id}`}>
                        <button className="btn btn-info">Modificar perfil</button>
                    </Link>
                </div>
            </div>
        </>
    );
};