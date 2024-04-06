import React, { Component } from "react";
import "./../../styles/footer.css"

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
      <div className="container-fluid px-md-5">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">MediConecta</h2>
              <p className="text">Ofrecemos las 24 horas del día, los 7 días de la semana atención a los pacientes. Ya sea que se trate de una consulta de rutina, una emergencia médica o simplemente una pregunta sobre la salud.</p>
              <ul className="ftco-footer-social list-unstyled mt-5">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Departamentos</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Dermatología</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Fisioterapia</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Medicina General</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Nutrición</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Pediatría</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Psicología</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Psiquiatría</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-3 ml-md-3">
              <h2 className="ftco-heading-2">Enlaces</h2>
              <ul className="list-unstyled">
                <li><a href="#home-section">Inicio</a></li>
                <li><a href="#about-section">Sobre Nosotros</a></li>
                <li><a href="#department-section">Departamentos</a></li>
                <li><a href="#doctor-section">Doctores</a></li>
                <li><a href="#blog-section">Blog</a></li>
                <li><a href="#">Precios</a></li>
                <li><a href="#contact-section">Contactenos</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Horarios de atención</h2>
              <ul className="list-unstyled">
                <li> <span className="icon-long-arrow-right mr-2">Lunes a domingo</span> </li>
                <li> <span className="icon-long-arrow-right mr-2">24h</span></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">¿Alguna Pregunta?</h2>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><a href="#"><span className="icon icon-phone"></span><span className="text">+32 569 874 875</span></a></li>
                  <li><a href="#"><span className="icon icon-envelope pr-4"></span><span className="text">info@mediconecta.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Todos los derechos reservados | Web diseñada por Diana Pérez - José Reimondez - Ruben MP para <a href="https://4geeksacademy.com/es/inicio" target="_blank" rel="noopener noreferrer">4geek</a> © Copyright 2024</p>
          </div>
        </div>
      </div>
    </footer>
    
);
