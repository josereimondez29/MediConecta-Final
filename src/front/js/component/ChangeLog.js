import React from "react";
import { useNavigate } from 'react-router-dom';

export const ChangeLog = () => {
    const navigate = useNavigate();
    const id = localStorage.getItem("id");

    const handleNavigate = () => {
        navigate("/doctor/" + id);
    };

    return (
        <div className="container">
            <p>Cambios actualizados con éxito</p>
            <button className="btn btn-success" onClick={handleNavigate}>
                Ir a página de doctor
            </button>
        </div>
    );
};