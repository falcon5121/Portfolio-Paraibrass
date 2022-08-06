import React from "react";
import Card from "./Cards/Cards";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';

import { useQuery, gql } from '@apollo/client';

const SextetoData = gql`
query DadosSexteto {
  componenteSexteto {
    ident
    nome
    urlImg
    curtaBiografia
    biografiaTexto {
      text
    }
    bioCurta2
    bioCurta3
    bioCurta4
    bioCurta5
    bioCurta6
  }
}
`



export default React.memo(function () {

  const { loading , error , data} = useQuery(SextetoData)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;




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
      className="caixaMobile"
      modules={[Navigation]}
      spaceBetween={0}
      pagination
      initialSlide={0}
      slidesPerView={1}
      navigation={{ nextEl: "#next", prevEl: "#prev"}}
      centeredSlides={true}
      centeredSlidesBounds={true}
      loop={true}
      breakpoints={{[758]:{ initialSlide:1 ,spaceBetween:0, slidesPerView: 3,}}}

    >
      {data.componenteSexteto.map(user => (
        <SwiperSlide key={user.ident} className="slide" 
        >
          <Card texto={user.curtaBiografia}
            texto1={user.bioCurta2}
            texto2={user.bioCurta3}
            texto3={user.bioCurta4}
            texto4={user.bioCurta5}
            texto5={user.bioCurta6}
            imagem={user.urlImg}/>
        </SwiperSlide>
      ))}
      
      
    </Swiper>
    <i className="fa-solid fa-angle-right fa-2xl" id="next"/>
  </article>
    
  )
})