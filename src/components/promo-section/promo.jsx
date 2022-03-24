import React from "react";
import './style.scss';

export function Promo() {
  return(
    <section>
      <div className="promo-background">
        
        <img className='headset-1' height="100%" width ="40%" src='/assets/headset-1.png'/>
        
        <div className='texto'>
          <div className='time'>
            <h4>02 <br/> <span>Dias</span></h4>
            <h4>12 <br/> <span>Horas</span></h4>
            <h4>23 <br/> <span>Minutos</span></h4>
            <h4>44 <br/> <span>Segundos</span></h4>
          </div>
          
          <h2>Promoção de Headset Gamer</h2>
          <h3>Toda linha Gamer com 50% de Desconto</h3>
          <button>Comprar Agora</button>
        </div>
      
        <img className='headset-2' height="90%" width ="29%" src='/assets/headset-2.png'/>
      </div>
    </section>
  )
}