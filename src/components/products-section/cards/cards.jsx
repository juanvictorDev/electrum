import React from "react";
import './style.scss';

export function Cards({children}) {
  return(
    <section>
      <div className='cards-container'>
        {children}
      </div>
    </section>
  )
}