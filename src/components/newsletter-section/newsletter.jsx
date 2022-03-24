import React from "react";
import './style.scss';
import {FaFacebookSquare} from 'react-icons/fa'
import {SiInstagram , SiTwitter , SiPinterest} from 'react-icons/si'


export function Newsletter() {
  return(
    <section>
      <div className='newsletter-container'>
        <h2>Assine a nossa NEWSLETTER</h2>
        
        <form className="newsletter-form">
          <input className="newsletter-form-text" type="email" placeholder="Seu melhor e-mail"/>
          <button className="newsletter-form-submit" type="submit">Assinar</button>
        </form>
        
        <div className="newsletter-icons">
         <a href='#'><span className="facebook"><FaFacebookSquare /></span></a>
         <a href='#'><span className="instagram"><SiInstagram /></span></a>
         <a href='#'><span className="twitter"><SiTwitter /></span></a>
         <a href='#'><span className="pinterest"><SiPinterest /></span></a>
        </div>
      </div>
    </section>
  );
}