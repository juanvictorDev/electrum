import React from "react";
import './style.scss';
import {HiOutlineArrowCircleRight} from 'react-icons/hi'

export function Highlight(props) {
  return(
    <div className="highlight-container">
      <div className="text">
        <h2>{props.text}</h2>
        
        <div className='link'>
          <a href="#">Ver Mais </a>
          <HiOutlineArrowCircleRight />
        </div>
      </div>
      <img className="img" height="100%" width="100%" src={props.img}/>
    </div>
  )
}