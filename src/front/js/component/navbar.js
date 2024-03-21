import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="text-center mt-5">
      <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="py-1 bg-primary top">
          <div className="container">
            <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
              <div className="col-lg-12 d-block">
                <div className="row d-flex">
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                    <span className="text">6666666666</span>
                  </div>
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                    <span className="text">info@mediconecta.com</span>
                  </div>
                  <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
                    <p className="mb-0 register-link"><a href="#" className="mr-3">Inscribirse</a><a href="#">Iniciar Sesión</a></p>
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
