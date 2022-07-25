import React from "react";
import Card from "./Cards/Cards";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';


export default function () {
  const data = {
    cards: [
      {
        id: 1,
        imagem: "https://github.com/falcon5121.png",
        texto:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit, reiciendis alias iure sint aliquam quibusdam, ex mollitia totam cum error. Doloribus debitis dolorem perferendis. Dolor consequuntur quia molestiae esse!",
      },
      {
        id: 2,
        imagem: "https://github.com/falcon5121.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia dolore vero animi. Neque veritatis culpa dignissimos et? Iure voluptas quidem molestias commodi sit ut illum magnam. Enim, temporibus mollitia!",
      },
      {
        id: 3,
        imagem: "https://github.com/falcon5121.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia dolore vero animi. Neque veritatis culpa dignissimos et? Iure voluptas quidem molestias commodi sit ut illum magnam. Enim, temporibus mollitia!",
      },
      {
        id: 4,
        imagem: "https://github.com/falcon5121.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia dolore vero animi. Neque veritatis culpa dignissimos et? Iure voluptas quidem molestias commodi sit ut illum magnam. Enim, temporibus mollitia!",
      },
      {
        id: 5,
        imagem: "https://github.com/falcon5121.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia dolore vero animi. Neque veritatis culpa dignissimos et? Iure voluptas quidem molestias commodi sit ut illum magnam. Enim, temporibus mollitia!",
      },
      {
        id: 6,
        imagem: "https://github.com/falcon5121.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia dolore vero animi. Neque veritatis culpa dignissimos et? Iure voluptas quidem molestias commodi sit ut illum magnam. Enim, temporibus mollitia!",
      },
    ],
  };



  const breakpoints = {
    758:{
        slidesPerView: 2,
        spaceBetween:0
    }
  }

  return (
    
    <article className="containerReactCards">
    
    <i className="fa-solid fa-angle-left fa-2xl" id="prev"/>
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      pagination
      slidesPerView={1}
      navigation={{ nextEl: "#next", prevEl: "#prev"}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={true}
      centeredSlidesBounds={true}
      loop={true}
      breakpoints={{[758]:{spaceBetween:0, slidesPerView: 3, loop: true}}}

    >
      {data.cards.map(user => (
        <SwiperSlide key={user.id} className="slide" 
        >
          <Card texto={user.texto} imagem={user.imagem}/>
        </SwiperSlide>
      ))}
      
      
    </Swiper>
    <i className="fa-solid fa-angle-right fa-2xl" id="next"/>
  </article>
    
  )
}