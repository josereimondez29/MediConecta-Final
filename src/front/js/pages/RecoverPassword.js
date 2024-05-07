import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const RecoverPassword = () => {

    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || userType === "") {
            setFormSubmitted(true);
            return;
        }
        actions.recoverPassword(email, userType)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                setError("Error: " + error.message);
            });
    };
    const handleGoBack = () => {
        setError(""); // Clear error message when going back
        navigate(-1);
    };
    
    return (
        <>
            <div className="container" style={{ marginTop: "30px" }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Tipo de Usuario:</label>
                        <select
                            className="form-control"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}>
                            <option value="">Elige una opción</option>
                            <option value="patient">Paciente</option>
                            <option value="doctor">Médico</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-around">
                        <button type="submit" className="btn btn-primario">Hecho</button>
                        <button className="btn btn-secondary" onClick={handleGoBack}>Volver</button>
                    </div>
                </form>
                {formSubmitted && (email === "" || userType === "") && <p style={{ color: "red" }}>Debe completar todos los campos</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {formSubmitted && (email !== "" && userType !== "") && (
                    <div className="popup text-center">
                        <p>¡Password temporal enviado!</p>
                    </div>
                )}
            </div>
        </>
    );
};