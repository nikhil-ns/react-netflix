import React, { useState } from 'react'
import "./TitleCards.css"
import cards_data from "../../assets/cards/Cards_data"
import { useRef } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const TitleCards = ({title, category}) => {

  

// const cardsRef = useRef();

// const handleWheel = (event)=>{
//   event.preventDefault();
//   cardsRef.current.scollLeft += event.deltaY;
// };

useEffect(()=>{

  // fetch(url, options)
  // .then(response => response.text())
  // .then(response => setApiData(response.data))
  // .catch(err => console.log(err));

}, []);

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list"> {/* ref={cardsRef} */}
        {cards_data.map((card, index)=>{
          return <Link to={`/player/1`} className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
