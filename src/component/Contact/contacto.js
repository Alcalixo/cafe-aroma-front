import React from "react";
import './contacto.css'
import CardList from './tarjeta/CardList'
import logo from '../../assets/img/contactanos.png';
import FormContacto from './FormularioContacto/formContacto'
import  './FormularioContacto/formContacto.css'



function Contacto(){
    return(
        <>
        <div className="logo_contacto">
        <img src={logo} alt="Logo Cafe Aroma" />
        
        </div>
        <div className="contenedorContacto">
           <div className="container-contacto">
         
              <CardList/>
       
            </div>
            <div className="formbody-contacto">
             <FormContacto/>  
            </div> 
         </div>
         
        </>
    )
}

export default Contacto;