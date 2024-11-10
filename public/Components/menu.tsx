import React , { useState } from "react";
import Link from 'next/link';

// CSS
import '../CSS/menu.css';

// ICONOS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faInstagram,faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Menu() {

const [menuVisible, setMenu] = useState(false);

const toggleMenu = () => {setMenu(!menuVisible);}

const closeMenu = () => {setMenu(false);}

return( 
<>

{menuVisible ? (
    <nav>
        <div className='points'>
        <FontAwesomeIcon icon={faEllipsis} size="2x" onClick={closeMenu}/>
        </div>

        <ul>
            <li>
                <Link className='Link animate__animated animate__fadeInLeft' href="/">AcercaDe</Link>
            </li>

            <li>
                <Link className='Link animate__animated animate__fadeInRight' href="/Project" >MisTrabajos</Link>
            </li>

            <li>
                <Link className='Link animate__animated animate__fadeInRight' href="/">Contactame!</Link>
            </li>
        </ul>

        <div className='redes'>
            <FontAwesomeIcon icon={faInstagram} beat size="2x" style={{color: "#111114",}}/>

            <FontAwesomeIcon icon={faSquareXTwitter} beat size="2x"  style={{color: "#111114",}} />
        </div>
    </nav>

    ) : ( <div> 
    <FontAwesomeIcon className='dropDown' icon={faCircleChevronDown} size='2x' onClick={toggleMenu}/>
    </div>
)}

</>
)
}