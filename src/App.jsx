import React, { useState, useRef } from "react";
import Menu from "./Menu/Menu";
import Player from "./Components/Player/Player";

/* Icones SVG */
import Curva1 from "./imagens/Curva Clara.svg";
import Curva2 from "./imagens/Curva.svg";
import Bola from "./imagens/Bola.svg";

import Brightness1Icon from "@mui/icons-material/Brightness1";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

import "./Cards/Cards.css";
import Card from "./Cards/Cards";

{
  /* Fotos */
}

import logo from "./imagens/Paraibrass_logo.svg";

import sexteto from "./imagens/FIMUS.svg";

{
  /* Arquivos CSS */
}

import "./index.css";
import "./Menu/Menu.css";

export default function () {
  /* Carrossel da Biografia*/
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  /* Carrossel de Videos*/

  const carouselVideos = useRef(null);

  const handleLeftClickVideos = (e) => {
    carouselVideos.current.scrollLeft -= carouselVideos.current.offsetWidth;
  };

  const handleRightClickVideos = (e) => {
    console.log(carouselVideos.current.offsetWidth);
    carouselVideos.current.scrollLeft += carouselVideos.current.offsetWidth;
  };

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
        <article className="pagina1">
          <nav className="navbar">
            <ul className="mobile">
              <li className="tela logo ">
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

          <section>
            <div className="retRed"></div>
            <div className="retBlack">
              <h1>Sexteto</h1>
              <h2>Paraibrass</h2>
              <p>João Pessoa - PB</p>
            </div>
          </section>

          <div className="backSexteto">
            <img src={sexteto} alt="" className="imgSexteto" />
          </div>
        </article>

        <article className="pagina2">
          {/* Cards de Biografia */}

          <div className="txt" id="txt">
            <section>
              <div className="tinyRetRed"></div>
              <div className="tinyRetBlack">
                <h1 className="biografia" id="Biografia">
                  BIOGRAFIA
                </h1>
              </div>
            </section>

            <div className="arrow">
              <ArrowBackIos className="setas" onClick={handleLeftClick} />
              <div className="container1" ref={carousel}>
                <Card
                  imagem="https://github.com/falcon5121.png"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id enim et diam fringilla bibendum. 
                Aenean vestibulum feugiat ipsum. Etiam faucibus turpis id tellus gravida, 
                tempor ornare felis suscipit. Nulla in leo quis nulla sollicitudin tempus blandit ut justo. 
                Nullam luctus risus id placerat ullamcorper. Nam nulla nulla, fermentum in nulla vel, mollis molestie neque. 
                Proin placerat dui ut sem condimentum condimentum. Cras malesuada mauris sed nulla ultrices, vel egestas leo tristique. 
                Vivamus mollis eu quam eu tempor. Phasellus scelerisque, sem vitae"
                />
                <Card
                  imagem="https://github.com/falcon5121.png"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id enim et diam fringilla bibendum. 
                Aenean vestibulum feugiat ipsum. Etiam faucibus turpis id tellus gravida, 
                tempor ornare felis suscipit. Nulla in leo quis nulla sollicitudin tempus blandit ut justo. 
                Nullam luctus risus id placerat ullamcorper. Nam nulla nulla, fermentum in nulla vel, mollis molestie neque. 
                Proin placerat dui ut sem condimentum condimentum. Cras malesuada mauris sed nulla ultrices, vel egestas leo tristique. 
                Vivamus mollis eu quam eu tempor. Phasellus scelerisque, sem vitae"
                />
                <Card
                  imagem="https://github.com/falcon5121.png"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id enim et diam fringilla bibendum. 
                Aenean vestibulum feugiat ipsum. Etiam faucibus turpis id tellus gravida, 
                tempor ornare felis suscipit. Nulla in leo quis nulla sollicitudin tempus blandit ut justo. 
                Nullam luctus risus id placerat ullamcorper. Nam nulla nulla, fermentum in nulla vel, mollis molestie neque. 
                Proin placerat dui ut sem condimentum condimentum. Cras malesuada mauris sed nulla ultrices, vel egestas leo tristique. 
                Vivamus mollis eu quam eu tempor. Phasellus scelerisque, sem vitae"
                />
                <Card
                  imagem="https://github.com/falcon5121.png"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id enim et diam fringilla bibendum. 
                Aenean vestibulum feugiat ipsum. Etiam faucibus turpis id tellus gravida, 
                tempor ornare felis suscipit. Nulla in leo quis nulla sollicitudin tempus blandit ut justo. 
                Nullam luctus risus id placerat ullamcorper. Nam nulla nulla, fermentum in nulla vel, mollis molestie neque. 
                Proin placerat dui ut sem condimentum condimentum. Cras malesuada mauris sed nulla ultrices, vel egestas leo tristique. 
                Vivamus mollis eu quam eu tempor. Phasellus scelerisque, sem vitae"
                />
                <Card
                  imagem="https://github.com/falcon5121.png"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id enim et diam fringilla bibendum. 
                Aenean vestibulum feugiat ipsum. Etiam faucibus turpis id tellus gravida, 
                tempor ornare felis suscipit. Nulla in leo quis nulla sollicitudin tempus blandit ut justo. 
                Nullam luctus risus id placerat ullamcorper. Nam nulla nulla, fermentum in nulla vel, mollis molestie neque. 
                Proin placerat dui ut sem condimentum condimentum. Cras malesuada mauris sed nulla ultrices, vel egestas leo tristique. 
                Vivamus mollis eu quam eu tempor. Phasellus scelerisque, sem vitae"
                />
                <Card
                  imagem="https://github.com/falcon5121.png"
                  texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id enim et diam fringilla bibendum. 
                Aenean vestibulum feugiat ipsum. Etiam faucibus turpis id tellus gravida, 
                tempor ornare felis suscipit. Nulla in leo quis nulla sollicitudin tempus blandit ut justo. 
                Nullam luctus risus id placerat ullamcorper. Nam nulla nulla, fermentum in nulla vel, mollis molestie neque. 
                Proin placerat dui ut sem condimentum condimentum. Cras malesuada mauris sed nulla ultrices, vel egestas leo tristique. 
                Vivamus mollis eu quam eu tempor. Phasellus scelerisque, sem vitae"
                />
              </div>
              <ArrowForwardIos className="setas" onClick={handleRightClick} />
            </div>
          </div>
        </article>

        <article className="pagina3">
          {/* Carrossel de Videos */}

          <section>
              <div className="tinyRetRed2"></div>
              <div className="tinyRetBlack2">
                  
            <h1 className="biografia" id="Videos">
              VIDEOS
            </h1>
            
              </div>
          </section>

          <div className="cardDeVideo">

            <div className="centralizado">
              <ArrowBackIos
                className="videoSeta"
                onClick={handleLeftClickVideos}
              />

              <div className="videos" ref={carouselVideos}>
                <div className="conainerVideos">
                  <Player />
                  <Player />
                  <Player />
                </div>
              </div>

              <ArrowForwardIos
                className="videoSeta"
                onClick={handleRightClickVideos}
              />
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
          </div>
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
