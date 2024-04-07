import React, { Component } from "react";
import "../../styles/footer.css";
import MediConecta from "../../img/MediConecta.jpg"

export const Footer = () => {

  const handleInstagram = () => {
    // Redirige al componente Login
    navigate('Instagram');
  };
  const handleFacebook = () => {
    // Redirige al componente Login
    navigate('Facebook');
  };
  const handleTwitter= () => {
    // Redirige al componente Login
    navigate('Twitter');
  };
  const handleLinkedin = () => {
    // Redirige al componente Login
    navigate('Linkedin');
  };

  return(
	<footer className="footer mt-auto py-3 text-center">
      {/* <div className="overlay"></div> */}
      <div className="container-fluid px-md-5">
        <div className="row mb-5">
          
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Especialidades</h2>
              <div className="">
                <ul className="list-unstyled">
                <li>
                  
                  <button className="btn btn-Facebook" style={{color: "white"}}onClick={handleFacebook}>
                  <i className="fa-brands fa-facebook fa-xl"></i>
                  </button>
              </li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Medicina General</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Pediatría</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Dermatología</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Psiquiatria</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Nutrición</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Fisioterapia</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Conócenos</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Inicio</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Sobre Nosotros</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Departamentos</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Doctores</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Blog</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Precios</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Contactenos</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <div className="">
            <a href="ruta/a/MediConecta"><img src={MediConecta} alt="MediConecta" /></a>
              <p className="mt-2">Muy muy lejos, detrás de la palabra montañas, lejos de los países..</p>
              </div>
              <div className="d-flex justify-content-center">
              <div className="Instagram">
                  <button className="btn btn-Instagram" style={{color: "white"}}onClick={handleInstagram}>
                  <i className="fab fa-instagram fa-xl"></i> 
                  </button>
                </div>
                <div className="Facebook">
                  <button className="btn btn-Facebook" style={{color: "white"}}onClick={handleFacebook}>
                  <i className="fa-brands fa-facebook fa-xl"></i>
                  </button>
                </div>
                <div className="Twitter">
                  <button className="btn btn-Twitter" style={{color: "white"}}onClick={handleTwitter}>
                  <i className="fa-brands fa-twitter fa-xl"></i>
                  </button>
                </div>
                <div className="Linkedin">
                  <button className="btn btn-Linkedin" style={{color: "white"}}onClick={handleLinkedin}>
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Servicios</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Servicios de Emergencia</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Doctores Calificados</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Revisión Online</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Servicio las 24h</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Contacto</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><a href="#"><span className="icon icon-phone"></span><span className="text">+66666666</span></a></li>
                  <li><a href="#"><span className="icon icon-envelope pr-4"></span><span className="text">info@MediConecta.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Todos los derechos reservados | Web diseñada por <a href="https://4geeksacademy.com/es/inicio" target="_blank" rel="noopener noreferrer">Diana Pérez - José Reimondez</a></p>
          </div>
        </div>
      </div>
    </footer>
  
  )
    
};
