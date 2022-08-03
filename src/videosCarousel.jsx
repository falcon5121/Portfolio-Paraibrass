import React from "react";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';
import { useQuery, gql } from '@apollo/client';


const SextetoData = gql`
query DadosSexteto {
    videosYoutubes {
        ident
        videoUrl
        musicaNome
        musicaDescricao
    }
}
`


export default function () {
    
    
    
        // <iframe width="560" height="315"
        // src="https://www.youtube.com/embed/VfUAKUEeM7g" 
        // title="YouTube video player" frameborder="0" 
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        // allowfullscreen></iframe>


        const { loading , error , data} = useQuery(SextetoData)

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;





    return (
      <article className="videosCarousel">
        <i className="fa-solid fa-angle-left fa-2xl visible antes" />
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          pagination
          slidesPerView={1}
          navigation={{ nextEl: ".proximo", prevEl: ".antes" }}
          loop={false}
          className="videosContainer"
          // breakpoints={{[]: {}}}
        >
          {data.videosYoutubes.map((user) => (
            <SwiperSlide className="videoSlide" key={user.ident}>

              <article className="videoLegenda">
                <iframe
                  className="testeVideos"
                  src={user.videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>

                <article className="conteudo">
                  <h1>{user.musicaNome}</h1>
                  <h3>
                        {user.musicaDescricao}
                  </h3>
                </article>
              </article>
            </SwiperSlide>

          ))}
        </Swiper>
        <i className="fa-solid fa-angle-right fa-2xl visible proximo" />

        <article className="designMobile invisible">
          <i className="fa-solid fa-angle-left fa-2xl invisible antes" />
          <i className="fa-solid fa-angle-right fa-2xl invisible proximo" />
        </article>
      </article>
    );
}