"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';

import "../CSS/main.css";

export default function Main(){

    const [scrollActive, setScrollActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setScrollActive(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

return( 
<>
    <div className={`title ${scrollActive ? "scrollActive" : ""}`}>
        <h1 className="txtHome_h1">MARTINA CABRERA</h1>
        <h2 className="txtHome_h2">Barcelona</h2>
        <h1 className="txtHome_h1">MAKE UP</h1>
        <h2 className="txtHome_h2">Artist</h2>
    </div>

    <Image src="/Fotos/PortadaEdit.jpg"
        alt="Make Up Artist Givenchy"
        width={500} 
        height={400}
        className="homePicture"
    ></Image>
</>
)
}