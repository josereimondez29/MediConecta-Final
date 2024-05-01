import { useNavigate, Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
export const Navbar = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const handleLoginButtonClickMedicos = () => {
        // Redirige al componente de registro
        navigate('/register');
    };
    const handleLoginButtonClickPacientes = () => {
        // Redirige al componente de inicio de sesión
        navigate('/login');
    };
    const handlePrivate = () => {
        // Obtener el tipo de usuario del almacenamiento local
        const userType = localStorage.getItem("userType");
        // Obtener el id del usuario del almacenamiento local si está disponible
        const userId = localStorage.getItem("id");
        // Verificar si el tipo de usuario y el id del usuario están definidos y son válidos
        if (userType && (userType === "doctor" || userType === "patient") && userId) {
            // Redirigir al componente de zona privada correspondiente
            navigate(`/${userType === "doctor" ? "privatedoctor" : "PrivatePatient"}`);
        } else {
            console.error("Tipo de usuario o ID de usuario no reconocido");
        }
    };
    useEffect(() => {
        console.log("cambió el token")
        console.log(localStorage.getItem("token"))
    }, [store.authentication])
    function submitLogout() {
        actions.logout();
        localStorage.removeItem("authentication"); // Elimina la autenticación del localStorage al cerrar sesión
        navigate("/"); // Cambia "/login" por la ruta correcta si es diferente
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-flex ms-3">
                    <a className="navbar-brand text-center" href="/">MediConecta</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="d-flex ms-3">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item pe-5 ms-3">
                                <a className="nav-link active p-2" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item pe-5 ms-3">
                                <a className="nav-link p-2" href="/contact">Contacto</a>
                            </li>
                            <li className="nav-item pe-5 ms-3">
                                <a className="nav-link p-2" href="/prices">Tarifas</a>
                            </li>
                            <li className="nav-item dropdown pe-5 ms-3">
                                <a className="nav-link dropdown-toggle p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Especialidades
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/MedicinaGeneral">Medicina General</a></li>
                                    <li><a className="dropdown-item" href="/Dermatologia">Dermatología</a></li>
                                    <li><a className="dropdown-item" href="/Pediatria">Pediatría</a></li>
                                    <li><a className="dropdown-item" href="/Psicologia">Psicología</a></li>
                                    <li><a className="dropdown-item" href="/Nutricion">Nutrición</a></li>
                                    <li><a className="dropdown-item" href="/Fisioterapia">Fisioterapia</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {localStorage.getItem("token") ? (
                        <div className="d-flex ms-auto">
                            <form className="d-flex p-2" role="log out">
                                <button onClick={submitLogout} className="btn btn-outline-danger" type="button">Logout</button>
                            </form>
                            <form className="d-flex p-2" role="log out">
                                <button onClick={handlePrivate} className="btn btn-outline-danger" type="button">Zona Privada</button>
                            </form>
                        </div>
                    ) : (
                        <div className="d-flex ms-auto">
                            <form className="d-flex p-2" role="register">
                                <button className="btn btn-outline-secondary me-2" onClick={handleLoginButtonClickMedicos} type="button">Registrate</button>
                            </form>
                            <form className="d-flex p-2" role="log in">
                                <button className="btn btn-outline-secondary" onClick={handleLoginButtonClickPacientes} type="button">Login</button>
                            </form>
                            <form className="d-flex p-2" role="log in">
                                <Link to={"/register/medical_appointment"}>
                                    <button className="btn btn-success" >Registrar cita</button>
                                </Link>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};