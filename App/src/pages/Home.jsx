import React from 'react'
import { Navbar } from '../components/Navbar'
import terceros from '../assets/img/terceros.jpg'
import { Button } from 'primereact/button'
import { Cards } from '../shared/components/molecules/card/Card';
import "../assets/css/Home.css";
import  Imagen from "../assets/img/terceros.jpg";

export const Home = () => {
  return (
      <div>
        <Navbar/>


  <div className="grid grid-nogutter surface-section text-800">
    <div className="md:col-8 p-6 text-left md:text-left flex align-items-left ">
        <section>
            <span className="fs-1">Tenemos lo que buscas</span>
            <div className="fs-1 text-primary  mb-5 content">servicios de consultoria de intereses.</div>
            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Button label="Learn More" type="button" className="button1" ></Button>
            <Button label="Live Demo" type="button" className="p-button-outlined"></Button>
        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden">
        <img src={Imagen} alt="hero-1" className="md:ml-auto block md:h-full imageHome"  />
    </div>
</div>
<br />

        <div className="surface-ground px-4 py-8 md:px-6 lg:px-8 row card main" id='Plans'>
          <br />
              <h3 className="text-900 font-bold text-6xl mb-4 text-center">PLANES Y CREDENCIALES.</h3>
              <div className="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
          <div className='row'>
            <Cards plan="Basico" description=" 3 paquetes"
              price="$19 " time=" -  Mes." 
              label="Arcu vitae elementum" label2="Dui faucibus in ornare" 
              label3="Morbi tincidunt augue" labelButton=" Adquirir"/>
            <Cards plan="Medio" description=" 8 paquetes"
               price="$29 " time=" -  Trimestre." 
               label="Arcu vitae elementum" label2="Dui faucibus in ornare" 
               label3="Morbi tincidunt augue" labelButton=" Adquirir"/>
            <Cards plan="Avanzado" description=" 15 paquetes"
               price="$39" time=" -  Semenestre." 
               label="Arcu vitae elementum" label2="Dui faucibus in ornare" 
               label3="Morbi tincidunt augue" labelButton=" Adquirir"/>
            <Cards plan="Profesional" description=" 24 paquetes"
               price="$49" time=" -  Año." 
               label="Arcu vitae elementum" label2="Dui faucibus in ornare" 
               label3="Morbi tincidunt augue" labelButton=" Adquirir"/>                     
          </div>
        </div>
      </div>
  )
}
