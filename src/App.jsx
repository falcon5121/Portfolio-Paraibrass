import React, { useState, useRef } from "react";
import Menu from "./Menu/Menu";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import SearchIcon from "@mui/icons-material/Search";

{
  /* Fotos */
}

import logo from "./imagens/Paraibrass_logo.svg";
import sexteto from "./imagens/FIMUS.png";
import menor from "./imagens/menor.png"
import Sexteto2 from "./imagens/Foto Paraibrass 6.png"
import SextetoMedio from "./imagens/SextetoMedio.png"
import SextetoMenor from "./imagens/SextetoMenor.png"
{
  /* Arquivos CSS */
}

import "./index.css";
import "./Menu/Menu.css";
import CarouselReact from "./carouselReact";
import VideosCarousel from "./videosCarousel";
import styled from "styled-components";







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


  const toTop = () => {
    window.scroll(0,0)
  }

  
  
  addEventListener("scroll", () => {
    const button = document.querySelector(".goToTop")
    if(window.scrollY !== 0) {
      button.style.display = "flex"
    } else {
      button.style.display = "none"
    }
  })

  
 

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

  const position = {
    position: IsShown ? "unset" : "fixed"
  }
    
  const A = styled.a`
    color: #fff;
    text-decoration: none;
  `

  
  
  return (
    <div className="vetor">
      {/* Tela Inicial com NavBar */}

      <section className="background" style={position}>
        
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
                <a href="#Sobre">About</a>
              </li>
              <li className="tela">
                <a href="#Contact">Contact</a>
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

            <div className="backSexteto">
              <picture>
                <source
                  srcSet={sexteto}
                  className="imgSexteto"
                  media="(min-width: 865px)"
                />
                <img src={menor} alt="imgSexteto" className="imgSexteto" />
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
              <CarouselReact />
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
              <VideosCarousel />
            </section>
          </div>
        </article>

        <article className="pagina4" id="Sobre">
          <section className="inBox">
            <div className="letreiro4">
                <span className="textoLetreiro3">SEXTETO PARAÍBRASS</span>
              </div>
            <div className="primeiraParte">
            <article className="imgLabel">
              <picture className="imgSobre">
                <source media="(max-width: 1365px, min-width: 866px)" srcSet={ SextetoMedio } />
                <source media="(max-width: 865px)" srcSet={ SextetoMenor } />
                <img src={ Sexteto2 } alt="" />
              </picture>
            </article>
              <div className="letreiro3">
                <span className="textoLetreiro3">SEXTETO PARAÍBRASS</span>
              </div>

            </div>
            <article className="text">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus ea quo eaque ullam, tenetur laborum, pariatur
                necessitatibus obcaecati non beatae rem deleniti quam, dolor eos
                labore eius nemo similique fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus ea quo eaque ullam, tenetur laborum, pariatur
                necessitatibus obcaecati non beatae rem deleniti quam, dolor eos
                labore eius nemo similique fugit.
              </h3>
              <div>
              <img src={logo} alt="Logo do Paraibrass" />
              </div>
            </article>
          </section>
        </article>

        <article className="pagina5" id="Contact">
          <div className="form">
          <input type="text" placeholder="Nome"/>
          <input type="text" placeholder="Telefone"/>
          <input type="text" placeholder="Assunto"/>
          {/* <input type="text" placeholder="Descrição" row="10" cols=""/> */}
          <textarea id="Descrição" cols="10" rows="5" placeholder="Descrição"></textarea>
          <div className="buttonSubmit"><span>Enviar</span></div>
          </div>

          <article className="contactAbout">
          <div className="contactUs"><h1>FALE CONOSCO</h1></div>

          <div className="contactUs2">
            <h3>Por favor utilize o formulário ao lado para deixar sua mensagem e tirar dúvidas.</h3>
          </div>
          </article>

          
        </article>
        <article className="pagina6">
        <section className="redes">
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </section>

          
          <section className="final">
              <div className="divisao1">
              <h3>“A música é a arte perfeita que exprime os sentimentos dos seres imperfeitos.”</h3>
              </div>
              <div className="divisao2">
              <h3>paraibrass@gmail.com</h3>
              <h3>ParaíBrass</h3>
              </div>
          </section>
          
          
            <section className="logoWhite">LOGO EM BRANCO</section>
        </article>
        {/* Parte Mobile da Pagina */}

        <div className="menuMobile" style={Invisible}>
          <ul className="colunaMobile" style={Invisible}>
            <li className="mobileNav" style={animacao}>
              <A onClick={HandleClick} href="#Home" >Home</A>
            </li>
            <li className="mobileNav" style={animacao}>
              <A onClick={HandleClick} href="#Biografia" >Biography</A>
            </li>
            <li className="mobileNav" style={animacao}>
              <A onClick={HandleClick} href="#Videos" >Videos</A>
            </li>
            <li className="mobileNav" style={animacao}>
              <A onClick={HandleClick} href="#Sobre" >About</A>
            </li>
            <li className="mobileNav" style={animacao}>
              <A onClick={HandleClick} href="#Contact">Contact</A>
            </li>
          </ul>

          <u className="footer">
            <a href="#" style={animacao}>
              Paraibrass
            </a>
          </u>
        </div>

        <div className="goToTop" onClick={toTop} >
          <i className="fa-solid fa-angle-up Top" ></i>
        </div>
      </section>
    </div>
  );
}
