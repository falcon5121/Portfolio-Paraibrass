import React, { useState, useRef } from "react";
import Menu from "./Menu/Menu";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import SearchIcon from "@mui/icons-material/Search";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

{
  /* Fotos */
}

import logo from "./imagens/Paraibrass_logo.svg";
import sexteto from "./imagens/FIMUS.png";
import menor from "./imagens/menor.png"

{
  /* Arquivos CSS */
}

import "./index.css";
import "./Menu/Menu.css";
import CarouselReact from "./carouselReact";
import VideosCarousel from "./videosCarousel";






export default function () {

  const firebaseConfig = {
    apiKey: "AIzaSyAoL_cFALlSXHPF4vrg0k1FSw_vDLIhUrY",
    authDomain: "site-paraibrass.firebaseapp.com",
    projectId: "site-paraibrass",
    storageBucket: "site-paraibrass.appspot.com",
    messagingSenderId: "365186144207",
    appId: "1:365186144207:web:fabd784c1cd6427626a4ba",
    measurementId: "G-L0M7RFR6KT"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




  const HandleClick = () => {
    SetIsShown((current) => !current);
    tela.style.overflowY = variable;
  };

  const [IsShown, SetIsShown] = useState(true);

  const tela = document.querySelector(".scroll");

  const variable = `${IsShown ? "hidden" : "auto"}`;

  const Invisible = {
    width: IsShown ? "0" : "80%",
  };

  const animacao = {
    width: IsShown ? "0" : "10%",
  };

  




  return (
    <div className="vetor">
      {/* Tela Inicial com NavBar */}

      <section className="background">
        <article className="pagina1" id="Home">
          <nav className="navbar">
            <ul className="mobile">
              <li className="logo">
                <img src={logo} alt="Logo do Paraibrass" />
              </li>

              <li className="tela" id="space"></li>
              <li className="tela">
                <a href="#Home">Home</a>
              </li>
              <li className="tela">
                <a href="#Biografia">Biography</a>
              </li>
              <li className="tela">
                <a href="#Videos">Videos</a>
              </li>
              <li className="tela">
                <a>Contact</a>
              </li>
              <li className="tela">
                <a>About</a>
              </li>

              <li className="tela space"></li>
              <li className="tela">
                <SearchIcon className="search" />
              </li>
              <li onClick={HandleClick} className="cima">
                <Menu /> 
              </li>
            </ul>
          </nav>

          <section className="containerPg1">
            <div className="retRed"></div>
            <div className="retBlack">
              <h1>Sexteto</h1>
              <h2>Paraibrass</h2>
              <p>João Pessoa - PB</p>
            </div>

            <div className="backSexteto" >
              <picture>
                <source srcSet={sexteto}  className="imgSexteto" media="(min-width: 865px)" />
                <img src={ menor } alt="imgSexteto" className="imgSexteto" />
              </picture>
            </div>
          </section>
        </article>

        <article className="pagina2">
          {/* Cards de Biografia */}

          <div className="txt" id="txt">
            <section className="letreiro1">
              <div className="tinyRetRed" id="Biografia"></div>
              <div className="tinyRetBlack">
                <h1 className="biografia">BIOGRAFIA</h1>
              </div>
            </section>
              <article className="containerReact">
                
              <CarouselReact/>

              </article>
          </div>
        </article>

        <article className="pagina3">
          {/* Carrossel de Videos */}

          <div className="cardDeVideo">
            <section className="letreiro2">
              <div className="tinyRetRed2" id="Videos">

              <div className="tinyRetBlack2">
                <h1 className="biografia">VIDEOS</h1>
              </div>
              </div>
            </section>
              <section className="containerVideos2">
                <VideosCarousel/>
              </section>
            
          </div>
          <article className="conteudo">
              <h1>Música</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dolores odit minima est nostrum. Animi adipisci aliquam eveniet
                fuga, atque non suscipit quam assumenda ipsa rem unde, eos
                sequi! Quidem.
              </h3>
            </article>
        </article>

        {/* Parte Mobile da Pagina */}

        <div className="menuMobile" style={Invisible}>
          <ul className="colunaMobile" style={Invisible}>
            <li className="mobileNav" style={animacao}>
              <a>Home</a>
            </li>
            <li className="mobileNav" style={animacao}>
              <a>Biography</a>
            </li>
            <li className="mobileNav" style={animacao}>
              <a>Videos</a>
            </li>
            <li className="mobileNav" style={animacao}>
              <a>Contact</a>
            </li>
            <li className="mobileNav" style={animacao}>
              <a>About</a>
            </li>
          </ul>

          <u className="footer">
            <a href="#" style={animacao}>
              Paraibrass
            </a>
          </u>
        </div> 
      </section>
    </div>
  );
}
