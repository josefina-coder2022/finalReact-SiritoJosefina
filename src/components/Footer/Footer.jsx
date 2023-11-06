import React from 'react'
import Logo from '../../imagenes/logo-ecommerce2.jpg'

function Footer() {

  return (
    <section id="contenidoFooter">
      
      <section className="infoFooter">
        <div className="logoFooter">
            <img src={Logo} />
        </div>

        <div className="parrFooter">
          Bv. Los Alemanes 453 <br />Tel. +543453 445790 <br />clotheshop.com.ar
        </div>
      </section>

        <div className="iconFooter">
            <i className="bi bi-facebook" > </i>
            <i className="bi bi-instagram"> </i>
            <i className="bi bi-whatsapp"></i> 
      </div>
      
    </section> 
  )
}


export default Footer