import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginButtonClickLogin = () => {
    // Redirige al componente Login
    navigate('/login');
  };

  const handleLoginButtonClickRegister = () => {
    // Redirige al componente Register
    navigate('/register');
  };

  return (
    <div>
      <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="top bg-primary top mt-auto">
          <div className="container">
            <div className="row no-gutters d-flex align-items-start align-items-center">
              <div className="col-lg-12 d-block">
                <div className="row d-flex">
                  <div className="col-md-4 pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                    <span className="text text-white">6666666666</span>
                  </div>
                  <div className="col-md-4 pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                    <span className="text text-white">info@mediconecta.com</span>
                  </div>
                  <div className="col-md-4 pr-4 d-flex topper align-items-center">
                    {/*Button trigger Login */}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleLoginButtonClickLogin}
                    >
                      Ingrese
                    </button>
                    
                    {/*Button trigger Register*/}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleLoginButtonClickRegister}
                    >
                      Registro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">MediConecta</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a href="#home-section" className="nav-link"><span>Inicio</span></a></li>
                <li className="nav-item"><a href="#about-section" className="nav-link"><span>Sobre Nosotros</span></a></li>
                <li className="nav-item"><a href="#department-section" className="nav-link"><span>Departmentos</span></a></li>
                <li className="nav-item"><a href="#doctor-section" className="nav-link"><span>Doctores</span></a></li>
                <li className="nav-item"><a href="#blog-section" className="nav-link"><span>Blog</span></a></li>
                <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contacto</span></a></li>
                <li className="nav-item cta mr-md-2"><a href="appointment.html" className="nav-link">Cita</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

