import React from "react";
import './style.scss';

import {FiPhoneCall} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';
import {BiMap} from 'react-icons/bi';

import{FaCcMastercard, FaCcVisa, FaCcAmazonPay, FaCcApplePay, FaBitcoin} from 'react-icons/fa';

export function Footer() {
  return(
    <footer>
      <div className="footer-background">
        <div className="footer-container">
          
          <div className="footer-sobre">
            <h3>SOBRE NÓS</h3>
            
            <p>Somos uma empresa focada em fornecer produtos de tecnologia para os nossos clientes, com sempre o melhor atendimento e melhor preço, para satisfazer nossos consumidores, contamos com 246 lojas físicas espalhadas no mundo, sendo a sede principal no Brasil, em São Paulo.</p>
            
            <div>
              <div className="footer-items">
                <p>(81)4002-8922</p>
                <div><span><FiPhoneCall /></span></div>
              </div>
              
              <div className="footer-items">
                <p> contato@electrum</p>
                <div><span><HiOutlineMail /></span></div>
              </div>
              
              <div className="footer-items">
                <p>Rua do Silício, nº99</p>
                <div><BiMap /></div>
              </div>    
            </div>
          
          </div>
          
          <div className="footer-info">
            <h3>CATEGORIAS</h3>
            <ul>
              <li><a href='#'>Promoções</a></li>
              <li><a href='#'>Headsets</a></li>
              <li><a href='#'>PC Gamer</a></li>
              <li><a href='#'>Câmeras</a></li>
              <li><a href='#'>Mouse e Teclado</a></li>
            </ul>
          </div>
          
          <div className="footer-info">
            <h3>INFORMAÇÕES</h3>
            <ul>
              <li><a href='#'>Sobre Nós</a></li>
              <li><a href='#'>Entre em Contato</a></li>
              <li><a href='#'>Política de Privacidade</a></li>
              <li><a href='#'>Pedidos e Devoluções</a></li>
              <li><a href='#'>Termos e Condições</a></li>
            </ul>
          </div>
          
          <div className="footer-info">
            <h3>MENU</h3>
            <ul>
              <li><a href='#'>Minha Conta</a></li>
              <li><a href='#'>Carrinho</a></li>
              <li><a href='#'>Lista de Desejos</a></li>
              <li><a href='#'>Rastrear Pedidos</a></li>
            </ul>
          </div>
        
        </div>
      
        <div className="footer-copyright">
          <div className="footer-copyright-icons">
           <span><FaCcMastercard/></span>
           <span><FaCcVisa /></span>
           <span><FaBitcoin /></span>
           <span><FaCcAmazonPay /></span>
           <span><FaCcApplePay /></span>
          </div>

          <h4>Copyright © 2022-Electrum</h4>
        </div>
      </div>
    </footer>
  )
}