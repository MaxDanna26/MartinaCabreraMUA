import React from "react";
import '../CSS/footer.css';

//Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){

return (
    <>
    <footer>
        <h4 className="contact">
            Contacta
        </h4>

        <p className="correo">
            martinacabreramua89@gmail.com
        </p>

        <div className='redesFooter'>
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{color: "#11114"}}/>

            <FontAwesomeIcon icon={faSquareXTwitter} size="2x" style={{color: "white"}} />
        </div>
    </footer>

    </>
)
}