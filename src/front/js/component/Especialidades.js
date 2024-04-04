import React from 'react'
import Especialidad from './Especialidad'

const Especialidades = () => {
  let cardData = [
    { title: "Medicina General", text: "Iceland feelings...", image: "https://picsum.photos/id/50/367/267" },
    { title: "Psicología", text: "#Birds", image: "https://picsum.photos/id/50/367/267" },
    { title: "Dermatología", text: "Most iconic bridge", image: "https://picsum.photos/id/43/367/267" },
    { title: "Pediatría ", text: "#picture123", image: "https://picsum.photos/id/69/367/267" },
    { title: "Entrenador Personal", text: "#picture123", image: "https://picsum.photos/id/69/367/267" },
    { title: "Diana???", text: "#picture123", image: "https://picsum.photos/id/69/367/267" }
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
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" style={{ color: 'black',  backgroundColor: 'transparent' }}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" style={{ color: 'black',  backgroundColor: 'transparent' }}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
      </div>
  );
};

export default Especialidades;