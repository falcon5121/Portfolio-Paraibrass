import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Menu from "./Menu/Menu"

{/* Fotos */}

import logo from "./imagens/Paraibrass_logo.svg"
import fundo from "./imagens/Portfolio Paraibrass.svg"
import sexteto from "./imagens/Foto e Texto.svg"

{/* Arquivos CSS */}

import "./index.css"
import "./Menu/Menu.css"


export default function () {
    
    const HandleClick = () => {
        SetIsShown(current => !current);
    }

    const [IsShown, SetIsShown] = useState(true)


    
    
    const Invisible = {
         
        width: IsShown ?   "0": "80%",
        
        }

    const animacao = {
         
        width: IsShown ?   "0": "10%",
            
            }

    return (
    <div className="vetor">
        
             <nav className="navbar">

                <ul className="mobile">

                    <li className="tela logo "><img src={ logo } alt="Logo do Paraibrass" /></li>

                    <li className="tela" id="space"></li>
                    <li className="tela"><a>Home</a></li>
                    <li className="tela"><a>Biography</a></li>
                    <li className="tela"><a>Videos</a>V</li>
                    <li className="tela"><a>Contact</a></li>
                    <li className="tela"><a>About</a></li>
                    
                    <li className="tela space" ></li>
                    <li className="tela"><SearchIcon className="search" /></li>
                    <li onClick={HandleClick} className="cima"><Menu /></li>
                </ul>
             </nav>
            
            

            <img src={ fundo } alt="" 
            className="img absolute "/>

            <section className="container">

            <img src={ sexteto } alt="Foto do Sexteto Paraibrass" className="Sexteto  container "/>
            </section>

            <img src={ fundo } alt="" 
            className=" hidden absolute"/>
            



            <div className="menuMobile" style={Invisible}>
            
            <ul className="colunaMobile" style={Invisible}>

            <li className="mobileNav"style={animacao}><a>Home</a></li>
            <li className="mobileNav"style={animacao}><a>Biography</a></li>
            <li className="mobileNav"style={animacao}><a>Videos</a></li>
            <li className="mobileNav"style={animacao}><a>Contact</a></li>
            <li className="mobileNav"style={animacao}><a>About</a></li>

            </ul>

            <u className="footer"><a href="#" style={animacao}>Paraibrass</a></u>
        </div>
    </div>
    )
    
    
}


    
        
    



