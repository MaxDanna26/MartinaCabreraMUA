import React from "react";
import Image from "next/image";

import aboutMeImage from '../Fotos/aboutMe.jpg';
import ImageSlider from "./slider";

import '../CSS/aboutMe.css';

export default function AboutMe(){

    const images = [
        '/Fotos/Martu/IMG-20241026-WA0041.jpg',
        '/Fotos/Martu/IMG-20241026-WA0013.jpg',
        '/Fotos/Martu/IMG-20241026-WA0019.jpg',
        '/Fotos/Martu/IMG-20241026-WA0034.jpg',
        '/Fotos/Martu/IMG-20241026-WA0035.jpg',
        '/Fotos/Martu/IMG-20241026-WA0037.jpg',
      ];

return(

    <>
    <section className="aboutMe">

        <h4>
            Hello everyone!
        </h4>

        <p>
            Soy Martina Cabrera, maquilladora para Givenchy en <strong>Barcelona.</strong>
            Desde que tengo memoria, siempre he estado fascinada por el arte y la creatividad, me la pasaba soñando con algún día ser <strong>ARTISTA.</strong>
        </p>

        <p>
            Con el tiempo, descubrí que mi verdadera pasión era el <strong>maquillaje</strong>:
        </p>

    </section>

    <div className="fraseCentral">        
        <h3>
            "Una forma de arte en la que podía resaltar la belleza única de cada persona y ayudarla a expresar su autenticidad"
        </h3>

        <Image className="aboutMeImage" src={aboutMeImage} alt="Make up Artist maquillaje"></Image>

    </div>

    <section className="aboutMe">
        <p>
            El maquillaje, para mí, no es solo una herramienta; es una forma de realzar lo que ya es hermoso y de brindar a las personas un toque de <strong>confianza y seguridad.</strong> Creo que cada rostro cuenta una historia, y me apasiona la idea de trabajar en conjunto con mis clientes para descubrir qué es lo que desean expresar al mundo.
        </p>
        
        <p>
            Al final, me di cuenta de que no podría dedicarme a nada que no fuera el arte, y el maquillaje se convirtió en mi forma de vida. Cada pincelada es una oportunidad para transmitir emociones, capturar momentos y, sobre todo, para hacer que cada persona se sienta en su mejor versión.
        </p>

         <h4 className="lastFrase">
            Me acompañas en este camino?
        </h4>

        <ImageSlider images={images}></ImageSlider>

        
    </section>
    </>
)
}