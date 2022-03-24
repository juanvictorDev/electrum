import React from "react";
import './style.scss';

export function Card(props) {
  return(
    <div className="card-container">
      <div className="product-container">
        <img height = "100%" width = "100%" src = {props.img} />
      </div>
      
      <div className="category">
        <p>{props.category}</p>
      </div>
      
      <div className="infos">
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <button className="btn">Comprar</button>
      </div>
    </div>
  )
}