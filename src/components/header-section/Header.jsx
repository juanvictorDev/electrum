import React from "react";
import styles from "./style.scss";

import {HiLightningBolt, HiOutlineMail} from 'react-icons/hi'
import {RiShoppingCartLine, RiHeart2Line, RiSearchEyeLine, RiMoneyDollarCircleLine} from 'react-icons/ri'
import {FiPhoneCall} from 'react-icons/fi'
import {BiMap, BiUserCircle} from 'react-icons/bi'


export function Header() {
  return(
    <header>
      
      <div className="info-background">
        <div className="info-container">
          
          <div className="info-container-items-1">
            <div className="info-items-1">
              <div><span><FiPhoneCall /></span></div>
              <p>(81)4002-8922</p>
            </div>
            
            <div className="info-items-1">
              <div><span><HiOutlineMail /></span></div>
              <p> contato@electrum</p>
            </div>
            
            <div className="info-items-1">
              <div><BiMap /></div>
              <p>Rua do Silício, nº99</p>
            </div>
          </div>

          <div className="info-container-items-2">
            <div className="info-items-2">
              <div><RiMoneyDollarCircleLine /></div> 
              <a href="#">BRL</a>
            </div>
            
            <div className="info-items-2">
              <div><BiUserCircle /></div> 
              <a href="#">Minha Conta</a>
            </div>
          
          </div>
        </div>
      </div>

      <div className="menu-background">
        <div className="menu-container">
          
          <div className="menu-logo">
            <h2>Electrum</h2>
            <div className ="menu-logo-icon"><HiLightningBolt/></div>
          </div>

          <form className="menu-form">
            <input className="menu-form-text" type="text" placeholder="Pesquisar produto"/>
            <button className="menu-form-submit" type="submit"><RiSearchEyeLine/></button>
          </form>

          <div className="menu-options">
            <div className ="menu-options-icons">
              <RiHeart2Line />
              <a href="#">Favoritos</a>
            </div>

            <div className ="menu-options-icons">
              <RiShoppingCartLine />
              <a href="#">Carrinho</a>
            </div>
          
            <div className="menu-options-icons special">
              <BiUserCircle />
              <a href="#">Minha Conta</a>
            </div>

          </div>

        </div>
      </div>

      <nav>
        <div className="links-container">
          <ul className="links">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Promoções</a></li>
            <li><a href='#'>Smartphones</a></li>
            <li><a href='#'>Notebooks</a></li>
            <li><a href='#'>Câmera</a></li>
            <li><a href='#'>Acessórios</a></li>
          </ul>
        </div>
      </nav>
    
    </header>
  )
}