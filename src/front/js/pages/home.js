import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
    <div>
      {/*banner inicial*/}
      <section
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: "url('img/bg_3.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
            data-scrollax-parent="true"
          >
            <div className="col-md-6 pt-5 ftco-animate">
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
        </div>
      </section>
      {/*segundo*/}
      <section
        className="ftco-counter img ftco-section ftco-no-pt ftco-no-pb"
        id="about-section"
      >
        <div className="container">
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
                  <div className="col-md-12 heading-section ftco-animate p-4 p-lg-5">
                    <h2 className="mb-4">
                      Nosotros Somos <span>MediConecta</span> Una Clínica Online
                    </h2>
                    <p>
                      Un pequeño río llamado Duden fluye por su lugar y le
                      proporciona la regelialia necesaria. Es un país
                      paradisíaco, en el que fragmentos asados ​​de frases
                      vuelan a la boca. Es un país paradisíaco, en el que
                      fragmentos asados ​​de frases vuelan a la boca..
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
        </div>
      </section>
      {/*tercero*/}
      <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2 bg-light">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-7 py-5">
              <div className="py-lg-5">
                <div className="row justify-content-center pb-5">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h2 className="mb-3">Nuestros Servicios</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex align-self-stretch ftco-animate">
                    <div className="media block-6 services d-flex">
                      <div className="icon justify-content-center align-items-center d-flex">
                        <span className="flaticon-ambulance"></span>
                      </div>
                      <div className="media-body pl-md-4">
                        <h3 className="heading mb-3">
                          Servicios de Emergencia
                        </h3>
                        <p>
                          Un pequeño río llamado Duden fluye por su lugar y le
                          suministra la regelialia necesaria..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-self-stretch ftco-animate">
                    <div className="media block-6 services d-flex">
                      <div className="icon justify-content-center align-items-center d-flex">
                        <span className="flaticon-doctor"></span>
                      </div>
                      <div className="media-body pl-md-4">
                        <h3 className="heading mb-3">Doctores Calificados</h3>
                        <p>
                          Un pequeño río llamado Duden fluye por su lugar y le
                          suministra la regelialia necesaria..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-self-stretch ftco-animate">
                    <div className="media block-6 services d-flex">
                      <div className="icon justify-content-center align-items-center d-flex">
                        <span className="flaticon-stethoscope"></span>
                      </div>
                      <div className="media-body pl-md-4">
                        <h3 className="heading mb-3">Revisión Online</h3>
                        <p>
                          Un pequeño río llamado Duden fluye por su lugar y le
                          suministra la regelialia necesaria.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-self-stretch ftco-animate">
                    <div className="media block-6 services d-flex">
                      <div className="icon justify-content-center align-items-center d-flex">
                        <span className="flaticon-24-hours"></span>
                      </div>
                      <div className="media-body pl-md-4">
                        <h3 className="heading mb-3">Servicio las 24h</h3>
                        <p>
                          Un pequeño río llamado Duden fluye por su lugar y le
                          suministra la regelialia necesaria.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 d-flex">
              <div className="appointment-wrap bg-white p-4 p-md-5 d-flex align-items-center">
                <form action="#" className="appointment-form ftco-animate">
                  <h3>Consulta gratis</h3>
                  <div className="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Primer Nombre"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Segundo Nombre"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down"></span>
                          </div>
                          <select name="" id="" className="form-control">
                            <option value="">Seleccione sus servicios</option>
                            <option value="">Neurologia</option>
                            <option value="">Cardiologia</option>
                            <option value="">Dental</option>
                            <option value="">Oftalmologia</option>
                            <option value="">Otros Servicios</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Movil"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <div className="input-wrap">
                        <div className="icon">
                          <span className="ion-md-calendar"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control appointment_date"
                          placeholder="Fecha"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-wrap">
                        <div className="icon">
                          <span className="ion-ios-clock"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control appointment_time"
                          placeholder="Hora"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="2"
                        className="form-control"
                        placeholder="Mensaje"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Registro"
                        className="btn btn-secondary py-3 px-4"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*cuarto*/}
      <section
        className="ftco-intro img"
        style={{ backgroundImage: "url('img/bg_2.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 text-center">
              <h2>Tu salud es nuestra prioridad</h2>
              <p>
                Podemos gestionar el edificio de sus sueños. Un pequeño río
                llamado Duden fluye por su lugar.
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
      {/*quinto*/}
      <section
        className="ftco-section ftco-no-pt ftco-no-pb"
        id="department-section"
      >
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
                  <div className="department-wrap p-4 ftco-animate">
                    <div className="text p-2 text-center">
                      <div className="icon">
                        <span className="flaticon-stethoscope"></span>
                      </div>
                      <h3>
                        <a href="#">Neurología</a>
                      </h3>
                      <p>Muy muy lejos, detrás de la palabra montañas.</p>
                    </div>
                  </div>
                  <div className="department-wrap p-4 ftco-animate">
                    <div className="text p-2 text-center">
                      <div className="icon">
                        <span className="flaticon-stethoscope"></span>
                      </div>
                      <h3>
                        <a href="#">Cardiología</a>
                      </h3>
                      <p>Muy muy lejos, detrás de la palabra montañas.</p>
                    </div>
                  </div>
                  <div className="department-wrap p-4 ftco-animate">
                    <div className="text p-2 text-center">
                      <div className="icon">
                        <span className="flaticon-stethoscope"></span>
                      </div>
                      <h3>
                        <a href="#">Dental</a>
                      </h3>
                      <p>Muy muy lejos, detrás de la palabra montañas.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="department-wrap p-4 ftco-animate">
                    <div className="text p-2 text-center">
                      <div className="icon">
                        <span className="flaticon-stethoscope"></span>
                      </div>
                      <h3>
                        <a href="#">Oftalmología</a>
                      </h3>
                      <p>Muy muy lejos, detrás de la palabra montañas.</p>
                    </div>
                  </div>
                  <div className="department-wrap p-4 ftco-animate">
                    <div className="text p-2 text-center">
                      <div className="icon">
                        <span className="flaticon-stethoscope"></span>
                      </div>
                      <h3>
                        <a href="#">Cardiología</a>
                      </h3>
                      <p>Muy muy lejos, detrás de la palabra montañas.</p>
                    </div>
                  </div>
                  <div className="department-wrap p-4 ftco-animate">
                    <div className="text p-2 text-center">
                      <div className="icon">
                        <span className="flaticon-stethoscope"></span>
                      </div>
                      <h3>
                        <a href="#">Traumatología</a>
                      </h3>
                      <p>Muy muy lejos, detrás de la palabra montañas.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="department-wrap p-4 ftco-animate">
                    <div className="text p-2 text-center">
                      <div className="icon">
                        <span className="flaticon-stethoscope"></span>
                      </div>
                      <h3>
                        <a href="#">Cerebral</a>
                      </h3>
                      <p>Muy muy lejos, detrás de la palabra montañas.</p>
                    </div>
                  </div>
                  <div className="department-wrap p-4 ftco-animate">
                    <div className="text p-2 text-center">
                      <div className="icon">
                        <span className="flaticon-stethoscope"></span>
                      </div>
                      <h3>
                        <a href="#">X-ray</a>
                      </h3>
                      <p>Muy muy lejos, detrás de la palabra montañas.</p>
                    </div>
                  </div>
                  {/* Añade más secciones de departamentos aquí si es necesario */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*sexta*/}
      <section className="ftco-section" id="doctor-section">
        <div className="container-fluid px-5">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4">Nuestros doctores calificados</h2>
              <p>
                Viven separados. Un pequeño río llamado Duden fluye por su lugar
                y le suministra la regelialia necesaria. Es un país paradisiaco.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 ftco-animate">
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
                      una persona bastante sencilla..
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
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
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: "url('img/doc-2.jpg')" }}
                  ></div>
                </div>
                <div className="text pt-3 text-center">
                  <h3 className="mb-2">Dr. Rachel Parker</h3>
                  <span className="position mb-2">Oftalmología</span>
                  <div className="faded">
                    <p>
                      Soy un adicto al trabajo ambicioso, pero aparte de eso,
                      una persona bastante sencilla..
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
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
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: "url('img/doc-3.jpg')" }}
                  ></div>
                </div>
                <div className="text pt-3 text-center">
                  <h3 className="mb-2">Dr. Ian Smith</h3>
                  <span className="position mb-2">Dentista</span>
                  <div className="faded">
                    <p>
                      Soy un adicto al trabajo ambicioso, pero aparte de eso,
                      una persona bastante sencilla..
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
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
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: "url('img/doc-4.jpg')" }}
                  ></div>
                </div>
                <div className="text pt-3 text-center">
                  <h3 className="mb-2">Dr. Alicia Henderson</h3>
                  <span className="position mb-2">Pediatra</span>
                  <div className="faded">
                    <p>
                      Soy un adicto al trabajo ambicioso, pero aparte de eso,
                      una persona bastante sencilla..
                    </p>
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
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
          </div>
        </div>
      </section>
      {/*septimo*/}
      <section
        className="ftco-facts img ftco-counter"
        style={{ backgroundImage: "url('img/bg_3.jpg')" }}
      >
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
                <div className="col-md-6 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="30">
                        0
                      </strong>
                      <span>Años de experiencia</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="4500">
                        0
                      </strong>
                      <span>Pacientes felices</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="84">
                        0
                      </strong>
                      <span>Número de Doctores</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="300">
                        0
                      </strong>
                      <span>Número de personal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*octavo*/}
      <section className="ftco-section bg-light" id="blog-section">
        <div className="container" />
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h2 className="mb-4">Obtiene todas las actualizaciones aquí</h2>
            <p>
              Muy muy lejos, detrás de las montañas de la palabra, lejos de los
              países Vokalia y Consonantia.
            </p>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 ftco-animate">
            <div className="blog-entry">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: "url('img/image_1.jpg')" }}
              ></a>
              <div className="text d-block">
                <div className="meta mb-3">
                  <div>
                    <a href="#">Junio 9, 2019</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">Lo aterrador es que no duermes lo suficiente</a>
                </h3>
                <p>
                  Muy, muy lejos, detrás de las montañas de la palabra, lejos de
                  los países Vokalia y Consonantia, viven los textos ciegos..
                </p>
                <p>
                  <a
                    href="blog-single.html"
                    className="btn btn-primary py-2 px-3"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 ftco-animate">
            <div className="blog-entry">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: "url('img/image_2.jpg')" }}
              ></a>
              <div className="text d-block">
                <div className="meta mb-3">
                  <div>
                    <a href="#">Junio 9, 2019</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">Lo aterrador es que no duermes lo suficiente</a>
                </h3>
                <p>
                  Muy, muy lejos, detrás de las montañas de la palabra, lejos de
                  los países Vokalia y Consonantia, viven los textos ciegos.
                </p>
                <p>
                  <a
                    href="blog-single.html"
                    className="btn btn-primary py-2 px-3"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 ftco-animate">
            <div className="blog-entry">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: "url('img/image_3.jpg')" }}
              ></a>
              <div className="text d-block">
                <div className="meta mb-3">
                  <div>
                    <a href="#">Junio 9, 2019</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">Lo aterrador es que no duermes lo suficiente</a>
                </h3>
                <p>
                  Muy, muy lejos, detrás de las montañas de la palabra, lejos de
                  los países Vokalia y Consonantia, viven los textos ciegos.
                </p>
                <p>
                  <a
                    href="blog-single.html"
                    className="btn btn-primary py-2 px-3"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 ftco-animate">
            <div className="blog-entry">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: "url('img/image_4.jpg')" }}
              ></a>
              <div className="text d-block">
                <div className="meta mb-3">
                  <div>
                    <a href="#">Junio 9, 2019</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">Lo aterrador es que no duermes lo suficiente</a>
                </h3>
                <p>
                  Muy, muy lejos, detrás de las montañas de la palabra, lejos de
                  los países Vokalia y Consonantia, viven los textos ciegos.
                </p>
                <p>
                  <a
                    href="blog-single.html"
                    className="btn btn-primary py-2 px-3"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 ftco-animate">
            <div className="blog-entry">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: "url('img/image_5.jpg')" }}
              ></a>
              <div className="text d-block">
                <div className="meta mb-3">
                  <div>
                    <a href="#">Junio 9, 2019</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading">
                  <a href="#">Lo aterrador es que no duermes lo suficiente</a>
                </h3>
                <p>
                  Muy, muy lejos, detrás de las montañas de la palabra, lejos de
                  los países Vokalia y Consonantia, viven los textos ciegos..
                </p>
                <p>
                  <a
                    href="blog-single.html"
                    className="btn btn-primary py-2 px-3"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 ftco-animate">
            <div className="blog-entry">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: "url('img/image_6.jpg')" }}
              ></a>
              <div className="text d-block">
                <div className="meta mb-3">
                  <div>
                    <a href="#">Junio 9, 2019</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                </div>
                <div className="text d-block">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">Junio 9, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Lo aterrador es que no duermes lo suficiente</a>
                  </h3>
                  <p>
                    Muy, muy lejos, detrás de las montañas de la palabra, lejos
                    de los países Vokalia y Consonantia, viven los textos
                    ciegos.
                  </p>
                  <p>
                    <a
                      href="blog-single.html"
                      className="btn btn-primary py-2 px-3"
                    >
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*noveno*/}
      <section
        className="ftco-section testimony-section img"
        style={{ backgroundImage: "url(img/bg_3.jpg)" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center pb-3">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">Leer testimonios</span>
              <h2 className="mb-4">Nuestros pacientes dicen</h2>
            </div>
          </div>
          <div className="row ftco-animate justify-content-center">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(img/person_1.jpg)" }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text px-4">
                      <p className="mb-4">
                        Muy, muy lejos, detrás de las montañas de la palabra,
                        lejos de los países Vokalia y Consonantia, viven los
                        textos ciegos.
                      </p>
                      <p className="name">Jeff Freshman</p>
                      <span className="position">Paciente</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(img/person_2.jpg)" }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text px-4">
                      <p className="mb-4">
                        Muy, muy lejos, detrás de las montañas de la palabra,
                        lejos de los países Vokalia y Consonantia, viven los
                        textos ciegos.
                      </p>
                      <p className="name">Jeff Freshman</p>
                      <span className="position">Paciente</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(img/person_3.jpg)" }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text px-4">
                      <p className="mb-4">
                        Muy, muy lejos, detrás de las montañas de la palabra,
                        lejos de los países Vokalia y Consonantia, viven los
                        textos ciegos.
                      </p>
                      <p className="name">Jeff Freshman</p>
                      <span className="position">Paciente</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(img/person_1.jpg)" }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text px-4">
                      <p className="mb-4">
                        Muy, muy lejos, detrás de las montañas de la palabra,
                        lejos de los países Vokalia y Consonantia, viven los
                        textos ciegos..
                      </p>
                      <p className="name">Jeff Freshman</p>
                      <span className="position">Paciente</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(img/person_3.jpg)" }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text px-4">
                      <p className="mb-4">
                        Muy, muy lejos, detrás de las montañas de la palabra,
                        lejos de los países Vokalia y Consonantia, viven los
                        textos ciegos.
                      </p>
                      <p className="name">Jeff Freshman</p>
                      <span className="position">Paciente</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*decimo*/}
      <section className="ftco-section contact-section" id="contact-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2 className="mb-4">Contactenos</h2>
              <p>
                Muy, muy lejos, detrás de las montañas de la palabra, lejos de
                los países Vokalia y Consonantia, viven los textos ciegos.
              </p>
            </div>
          </div>
          <div className="row d-flex contact-info mb-5">
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-map-signs"></span>
                </div>
                <h3 className="mb-4">Dirección</h3>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-phone2"></span>
                </div>
                <h3 className="mb-4">Numero de Contacto</h3>
                <p>
                  <a href="tel://1234567920">66666666</a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-paper-plane"></span>
                </div>
                <h3 className="mb-4">Email</h3>
                <p>
                  <a href="mailto:info@yoursite.com">info@MediConecta.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box p-4 text-center bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-globe"></span>
                </div>
                <h3 className="mb-4">Website</h3>
                <p>
                  <a href="#">MediConecta.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row no-gutters block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-light p-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Su Nombre"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Su Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Asunto"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Mensaje"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Enviar Mensaje"
                    className="btn btn-secondary py-3 px-5"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6 d-flex">
              <div id="map" className="bg-white"></div>
            </div>
          </div>
        </div>
      </section>
	  {/*fin*/}
    </div>
  );
};
