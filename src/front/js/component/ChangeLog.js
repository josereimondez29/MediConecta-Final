import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const ChangeLog = () => {
   
    const [id, setId] = useState(() => localStorage.getItem("id"));


    useEffect(() => {
        const idFromStorage = localStorage.getItem("id");
        console.log("ID recuperado de localStorage:", idFromStorage);
        setId(idFromStorage);
    }, []);

    return (
        <div className="container">
            <p>Cambios actualizados con éxito</p>
            <Link to={`/doctor/${id}`}>
                <button className="btn btn-info">Ir a zona privada</button>
            </Link>
        </div>
    );
};