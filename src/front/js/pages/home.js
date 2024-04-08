import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Register } from "./register";
// import './../../styles/home.css'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import bg_3 from "../../img/bg_3.jpg";
import Especialidades from "../component/Especialidades";


export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      {/* Banner inicial */}
      <section className="hero-wrap">
        <div
          className="hero-img"
          style={{ backgroundImage: `url(${bg_3})` }}
        ></div>
        {/* <div className="overlay"></div> */}
        {/* <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-md-6 pt-5">
              <div className="mt-5">
                <span className="subheading">Bienvenido MediConecta</span>
                <h1 className="mb-4">
                  Estamos aquí <br />
                  para tu cuidado
                </h1>
                <p className="mb-4">
                  Muy, muy lejos, detrás de las montañas de palabras, lejos de
                  los países Vokalia y Consonantia, viven los textos ciegos.
                  Separados viven en Bookmarksgrove.
                </p>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Haz tu cita
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/*segundo*/}
      <section className="section" id="about-section">
        {/* <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 col-lg-5 d-flex">
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url('img/about.jpg')" }}
              ></div>
            </div>
            <div className="col-md-6 col-lg-7 pl-lg-5 py-md-5">
              <div className="py-md-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section p-4 p-lg-5">
                    <h2 className="mb-4">
                      Nosotros Somos <span>MediConecta</span> Una Clínica Online
                    </h2>
                    <p>
                      Un pequeño río llamado Duden fluye por su lugar y le
                      proporciona la regelialia necesaria. Es un país paradisíaco, en
                      el que fragmentos asados ​​de frases vuelan a la boca. Es un
                      país paradisíaco, en el que fragmentos asados ​​de frases vuelan
                      a la boca..
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary py-3 px-4">
                        Haz tu Cita
                      </a>{" "}
                      <a href="#" className="btn btn-secondary py-3 px-4">
                        Contáctenos
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/*tercero*/}
      <section className="bg-light">
        {/* <div className="container">
          <div className="row d-flex">
            <div className="col-md-7 py-5">
              <div className="py-lg-5">
                <div className="row justify-content-center pb-5">
                  <div className="col-md-12 heading-section">
                    <h2 className="mb-3">Nuestros Servicios</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex align-self-stretch">
                    <div className="media block-6 services d-flex">
                      <div className="icon justify-content-center align-items-center d-flex">
                        <span className="icon-ambulance"></span>
                      </div>
                      <div className="media-body pl-md-4">
                        <h3 className="heading mb-3">Servicios de Emergencia</h3>
                        <p>
                          Un pequeño río llamado Duden fluye por su lugar y le
                          suministra la regelialia necesaria.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Los otros servicios van aquí */}
                {/* </div>
              </div>
            </div> */} 
            <div className="row justify-content-center">
          <Especialidades className="col-md-4" />
      </div>
            {/* <div className="col-md-5 d-flex">
              <div className="appointment-wrap bg-white p-4 p-md-5 d-flex align-items-center">
                <select name="" id="" className="form-control">
                  <option value="">Seleccione sus servicios</option>
                  <option value="">Neurología</option>
                  <option value="">Cardiología</option>
                  <option value="">Dental</option>
                  <option value="">Oftalmología</option>
                  <option value="">Otros Servicios</option>
                </select>
                <Register />
              </div>
            </div> */}
          {/* </div>
        </div> */}
      </section>

      {/* Cuarto */}
      <section className="img" style={{ backgroundImage: "url('img/bg_2.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 text-center">
              <h2>Tu salud es nuestra prioridad</h2>
              <p>
                Podemos gestionar el edificio de sus sueños. Un pequeño río llamado
                Duden fluye por su lugar.
              </p>
              <p className="mb-0">
                <a href="#" className="btn btn-danger px-4 py-3">
                  Contáctenos
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quinto */}
      <section className="section" id="department-section">
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex">
              <div
                className="img img-dept align-self-stretch"
                style={{ backgroundImage: "url('img/dept-1.jpg')" }}
              ></div>
            </div>

            <div className="col-md-8">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <div className="department-wrap p-4">
                    <div className="text p-2 text-center">
                      <div className="icon">
                        <span className="icon-stethoscope"></span>
                      </div>
                      <h3>
                        <a href="#">Neurología</a>
                      </h3>
                      <p>Muy muy lejos, detrás de la palabra montañas.</p>
                    </div>
                  </div>
                  {/* Repite esta estructura para los otros servicios */}
                </div>
                <div className="col-md-4">
                  {/* Repite esta estructura para los otros servicios */}
                </div>
                <div className="col-md-4">
                  {/* Repite esta estructura para los otros servicios */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sexto */}
      <section className="section" id="doctor-section">
        <div className="container-fluid px-5">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Nuestros doctores calificados</h2>
              <p>
                Viven separados. Un pequeño río llamado Duden fluye por su lugar
                y le suministra la regelialia necesaria. Es un país paradisiaco.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: "url('img/doc-1.jpg')" }}
                  ></div>
                </div>
                <div className="text pt-3 text-center">
                  <h3 className="mb-2">Dr. Lloyd Wilson</h3>
                  <span className="position mb-2">Neurología</span>
                  <div className="faded">
                    <p>
                      Soy un adicto al trabajo ambicioso, pero aparte de eso,
                      una persona bastante sencilla.
                    </p>
                    <ul className="text-center">
                      <li className="animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      {/* Repite esta estructura para los otros iconos sociales */}
                    </ul>
                    <p>
                      <a href="#" className="btn btn-primary">
                        Agendar
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Repite esta estructura para los otros doctores */}
          </div>
        </div>
      </section>

      {/* Séptimo */}
      <section className="facts" style={{ backgroundImage: "url('img/bg_3.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-5 heading-section heading-section-white">
              <span className="subheading">Hechos graciosos</span>
              <h2 className="mb-4">
                Más de 5,100 pacientes confían en nosotros
              </h2>
              <p className="mb-0">
                <a href="#" className="btn btn-secondary px-4 py-3">
                  Haz tu Cita
                </a>
              </p>
            </div>
            <div className="col-md-7">
              <div className="row pt-4">
                <div className="col-md-6 d-flex justify-content-center counter-wrap animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="30">0</strong>
                      <span>Años de experiencia</span>
                    </div>
                  </div>
                </div>
                {/* Repite esta estructura para los otros contadores */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Octavo */}
      <section className="section bg-light" id="blog-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-10 heading-section text-center animate">
              <h2 className="mb-4">Obtén todas las actualizaciones aquí</h2>
              <p>
                Muy, muy lejos, detrás de las montañas de la palabra, lejos de los
                países Vokalia y Consonantia.
              </p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 animate">
              <div className="blog-entry">
                <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('img/image_1.jpg')" }}></a>
                {/* Repite esta estructura para los otros elementos del blog */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Noveno */}
      <section className="section testimony-section img" style={{ backgroundImage: "url('img/bg_3.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center pb-3">
            <div className="col-md-7 text-center heading-section heading-section-white animate">
              <span className="subheading">Leer testimonios</span>
              <h2 className="mb-4">Nuestros pacientes dicen</h2>
            </div>
          </div>
          <div className="row animate justify-content-center">
            <div className="col-md-12">
              <div className="carousel-testimony">
                {/* Repite esta estructura para cada testimonio */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Décimo */}
      <section className="section contact-section" id="contact-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center animate">
              <h2 className="mb-4">Contáctenos</h2>
              <p>
                Muy, muy lejos, detrás de las montañas de la palabra, lejos de los
                países Vokalia y Consonantia, viven los textos ciegos.
              </p>
            </div>
          </div>
          <div className="row d-flex contact-info mb-5">
            {/* Repite esta estructura para cada sección de información de contacto */}
          </div>
          <div className="row no-gutters block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-light p-5 contact-form">
                {/* Aquí van los campos del formulario */}
              </form>
            </div>
            <div className="col-md-6 d-flex">
              <div id="map" className="bg-white"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
