import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Menu from "./Menu/Menu"
import logo from "./imagens/Paraibrass_logo.svg"
import fundo from "./imagens/Portfolio Paraibrass.svg"
import sexteto from "./imagens/Foto e Texto.svg"
import "./index.css"
import "./Menu/Menu.css"


export default function () {
    return (
    <div className="vetor  ">
             <nav className="navbar">
                <ul className="mobile">
                    <li className="tela logo "><img src={ logo } alt="Logo do Paraibrass" /></li>

                    <li className="tela" id="space"></li>
                    <li className="tela">Home</li>
                    <li className="tela">Biography</li>
                    <li className="tela">Videos</li>
                    <li className="tela">Contact</li>
                    <li className="tela">About</li>
                    
                    <li className="tela space" ></li>
                    <li className="tela"><SearchIcon className="search" /></li>
                    <li><Menu className="" /></li>
                </ul>
             </nav>
            <img src={ fundo } alt="" 
            className="img absolute "/>
            <section className="container">
            <img src={ sexteto } alt="Foto do Sexteto Paraibrass" className="Sexteto  container "/>
            </section>
            <img src={ fundo } alt="" 
            className=" hidden absolute"/>
    </div>
    )
}