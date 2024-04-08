import React from 'react'
import Card from './Card'

const Cards = () => {
  let cardData = [
    { title: "Medicina General", text: "Services...", image: "https://picsum.photos/id/15/367/267" },
    { title: "Medicina General", text: "Services...", image: "https://picsum.photos/id/15/367/267" },
    { title: "Medicina General", text: "Services...", image: "https://picsum.photos/id/15/367/267" },
    { title: "Medicina General", text: "Services...", image: "https://picsum.photos/id/15/367/267" },
    { title: "Medicina General", text: "Services...", image: "https://picsum.photos/id/15/367/267" }
  ]
  return (
    <>
      {cardData.map((value, index) => {
        return <Card key={index} title={value.title} text={value.text} image={value.image} />;
      })}
    </>
  )
}

export default Cards