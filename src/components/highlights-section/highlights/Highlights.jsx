import React from "react";
import { Highlight } from "../highlight/Highlight";
import './style.scss';

export function Highlights() {
  return(
    <section>
      <div className="highlights-container">
        <Highlight img={"assets/banner-1.jpg"} text={'Promoções de Notebooks'} />
        <Highlight img={"assets/banner-2.jpg"} text={'Lançamento de Acessórios'}/>
        <Highlight img={"assets/banner-3.jpg"} text={'Câmeras Potentes'}/>
      </div>
    </section>
  )
}