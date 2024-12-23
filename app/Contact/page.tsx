"use client";

import React, { useEffect, useState } from "react";

// Components
import Header from "../../public/Components/header";
import Footer from "../../public/Components/footer";
import Form from "../../public/Components/formulario";

//Library
import '../lib/normalize.css';

//Css
import './contact.css'

export default function Contact(){
    
    
    return (
    <>
        <Header></Header>
        <h1 className="getContact">GET IN</h1>
        <h1 className="get_Contact">TOUCH</h1>
        <Form></Form>
        <Footer></Footer>
    </>)

}