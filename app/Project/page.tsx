"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import '../lib/normalize.css';
import './proyectos.css';
import Header from "../../public/Components/header";
import Footer from "../../public/Components/footer";

import A from '../../public/Fotos/A.jpg';
import B from '../../public/Fotos/B.jpg';
import C from '../../public/Fotos/C.jpg';
import D from '../../public/Fotos/D.jpg';
import E from '../../public/Fotos/E.jpg';
import F from '../../public/Fotos/F.jpg';
import G from '../../public/Fotos/G.jpg';
import H from '../../public/Fotos/H.jpg';
import J from '../../public/Fotos/J.jpg';
import carola from '../../public/Fotos/carola.jpg';
import O from '../../public/Fotos/o.jpg';
import P from '../../public/Fotos/Portada.jpg'
import Q from '../../public/Fotos/Portada2.jpg'

export default function Proyectos() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Header />
            <div className={`titleProject ${scrollY > 0 ? "scrollActive" : ""}`}>
                <h1 className="h1">MIS</h1>
                <h2 className="h2">Trabajos</h2>
            </div>
            <div className="galeria">

                
            <div className="twoImage">
                    <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={P} alt="Make up Artist" />
                    <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={Q} alt="Make up Artist" />
                </div>

                <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={J} alt="Make Up Artist" />
                
                <div className="twoImage">
                    <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={A} alt="Make up Artist" />
                    <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={O} alt="Make up Artist" />
                </div>

                <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={B} alt="Make Up Artist" />

                <div className="twoImage">
                    <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={C} alt="Make up Artist" />
                    <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={carola} alt="Make up Artist" />
                </div>
                
                <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={E} alt="Make Up Artist" />
                
                <div className="twoImage">
                    <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={H} alt="Make up Artist" />
                    <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={G} alt="Make up Artist" />
                </div>
                
                <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={F} alt="Make Up Artist" />
                
                <Image className="picture" style={{ transform: `translateY(${-scrollY * 0.06}px)` }} src={D} alt="Make Up Artist" />
            </div>
            <Footer />
        </>
    );
}
