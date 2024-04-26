import { useNavigate, Link } from "react-router-dom";
import React, { useContext, useEffect }  from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const handleLoginButtonClickMedicos = () => {
    // Redirige al componente Login
    navigate('/register');
  };

  const handleLoginButtonClickPacientes = () => {
    // Redirige al componente Login
    navigate('/login');
  };


  function submitLogout() {
    actions.logout();
    localStorage.removeItem("authentication"); // Elimina la autenticación del localStorage al cerrar sesión
    navigate("/"); // Cambia "/login" por la ruta correcta si es diferente
}


  useEffect (()=>{
    console.log("cambió el token")
    console.log(localStorage.getItem("token"))
  },[store.authentication])

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <div className="d-flex ms-3">
                  <a className="navbar-brand text-center" href="#">MediConecta</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <div className="d-flex ms-3">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item pe-5 ms-3">
                              <a className="nav-link active p-2" aria-current="page" href="#">Home</a>
                          </li>
                          <li className="nav-item pe-5 ms-3">
                              <a className="nav-link p-2" href="#">Blog</a>
                          </li>
                          <li className="nav-item dropdown pe-5 ms-3">
                              <a className="nav-link dropdown-toggle p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Especialidades
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="/MedicinaGeneral">Medicina General</a></li>
                                  <li><a className="dropdown-item" href="/Dermatologia">Dermatología</a></li>
                                  <li><a className="dropdown-item" href="#">Pediatría</a></li>
                                  <li><a className="dropdown-item" href="#">Psicología</a></li>
                                  <li><a className="dropdown-item" href="#">Nutrición</a></li>
                                  <li><a className="dropdown-item" href="#">Fisioterapia</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
                  {localStorage.getItem("token") ? (
                      <div className="d-flex ms-auto">
                          <form className="d-flex p-2" role="log out">
                              <button onClick={submitLogout} className="btn btn-outline-danger" type="button">Logout</button>
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
                            <Link to = {"/register/medical_appointment"}>
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

    // <div>
    //   <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
    //     <div className="top bg-primary top mt-auto">
    //       <div className="container">
    //         <div className="row no-gutters d-flex align-items-start align-items-center">
    //           <div className="col-lg-12 d-block">
    //             <div className="row d-flex">
    //               <div className="col-md-4 pr-4 d-flex topper align-items-center">
    //                 <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
    //                 <span className="text text-white">6666666666</span>
    //               </div>
    //               <div className="col-md-4 pr-4 d-flex topper align-items-center">
    //                 <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
    //                 <span className="text text-white">info@mediconecta.com</span>
    //               </div>
    //               <div className="col-md-4 pr-4 d-flex topper align-items-center">
    //                 {/*Button trigger Login */}
    //                 <button
    //                   type="button"
    //                   className="btn btn-danger"
    //                   onClick={handleLoginButtonClickLogin}
    //                 >
    //                   Ingrese
    //                 </button>
                    
    //                 {/*Button trigger Register*/}
    //                 <button
    //                   type="button"
    //                   className="btn btn-danger"
    //                   onClick={handleLoginButtonClickRegister}
    //                 >
    //                   Registro
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
    //       <div className="container">
    //         <a className="navbar-brand" href="index.html">MediConecta</a>
    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
    //           <span className="oi oi-menu"></span> Menu
    //         </button>

    //         <div className="collapse navbar-collapse" id="ftco-nav">
    //           <ul className="navbar-nav ml-auto">
    //             <li className="nav-item"><a href="#home-section" className="nav-link"><span>Inicio</span></a></li>
    //             <li className="nav-item"><a href="#about-section" className="nav-link"><span>Sobre Nosotros</span></a></li>
    //             <li className="nav-item"><a href="#department-section" className="nav-link"><span>Departmentos</span></a></li>
    //             <li className="nav-item"><a href="#doctor-section" className="nav-link"><span>Doctores</span></a></li>
    //             <li className="nav-item"><a href="#blog-section" className="nav-link"><span>Blog</span></a></li>
    //             <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contacto</span></a></li>
    //             <li className="nav-item cta mr-md-2"><a href="appointment.html" className="nav-link">Cita</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
//   );
// };