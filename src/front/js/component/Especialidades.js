import React from 'react';
import Especialidad from './Especialidad';
import bg_3 from "../../img/bg_3.jpg";
import image_3 from "../../img/image_3.jpg"
import dermatologia from "../../img/dermatologia.jpg"
import nutricion2 from "../../img/nutricion2.jpg"
import fisioterapia from "../../img/fisioterapia.jpg"
import psicologia from "../../img/psicologia.jpg"


const Especialidades = () => {
  let cardData = [
    { title: "Medicina General", text: "Nosotros te atendemos", image: bg_3 },
    { title: "Pediatría", text: "#Birds", image: image_3 },
    { title: "Dermatología", text: "Most iconic", image: dermatologia },
    { title: "Psicología ", text: "#picture123", image: psicologia },
    { title: "Nutrición", text: "#picture123", image: nutricion2 },
    { title: "Fisioterapia???", text: "#picture123", image: fisioterapia }
  ];

  // Función para dividir el array en grupos de tres elementos
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Dividir el array en grupos de tres elementos
  const cardGroups = chunkArray(cardData, 3);

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-secondary" style={{ backgroundColor: "#83a8b1", color: "#fff" }}>Especialidades</button>
      </div>
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
          {cardGroups.map((group, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex justify-content-center">
                {group.map((card, cardIndex) => (
                  <div key={cardIndex} className="p-2">
                    <Especialidad title={card.title} text={card.text} image={card.image} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" style={{ color: 'black', backgroundColor: 'transparent' }}>
          <span className="carousel-control-prev-icon" style={{ backgroundColor: "#5C8692" }} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" style={{ color: 'black', backgroundColor: 'transparent' }}>
          <span className="carousel-control-next-icon" style={{ backgroundColor: "#5C8692" }} aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Especialidades;
