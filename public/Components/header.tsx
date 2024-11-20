"use client";

import React from "react";
import Image from 'next/image';
import Link from "next/link";

//CSS
import '../CSS/header.css';

//Imagenes
import Logo from "../Fotos/Logo.jpg";

//Components
import ScrollIndicator from "../Components/scrollComponent";
import Menu from './menu';

export default function Header() {

  return (
    <>

    <Link href="/"><Image className='Logo'  priority={true} src={Logo} alt="Logo Make Up Artist Barcelona"></Image></Link>

    <header>

      <div className='navMenu'>
        <ScrollIndicator></ScrollIndicator>
        <Menu></Menu>
      </div>


    </header>
    </>

  );
  }