import React from "react";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';






export default React.memo(function () {
    
    
    
    
    const data = {
        configs:{
                largura: "1200",
                altura: "700",
            },
            videos:[
                {
                    id:1,
                    link: "https://www.youtube.com/embed/VfUAKUEeM7g"
                },
                {
                    id:2,
                    link: "https://www.youtube.com/embed/VfUAKUEeM7g"
                },
                {
                    id:3,
                    link: "https://www.youtube.com/embed/VfUAKUEeM7g"
                }
            ]
            
            
        }
        
        const VideoCarou = (largura, altura, link) => {
        
            return(
        
                <iframe className="testeVideos"
                        src="https://www.youtube.com/embed/VfUAKUEeM7g" 
                        title="YouTube video player" frameborder="0" 
                        
                        allowfullscreen></iframe>
        
        
            )
        }


        // <iframe width="560" height="315"
        // src="https://www.youtube.com/embed/VfUAKUEeM7g" 
        // title="YouTube video player" frameborder="0" 
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        // allowfullscreen></iframe>




    return(
        <article className="videosCarousel">
            <i className="fa-solid fa-angle-left fa-2xl visible antes"/>
            <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            pagination
            slidesPerView={1}
            navigation={{nextEl:".proximo", prevEl:".antes"}}
            
            onSlideChange={() => console.log('slide change')}
            onSwiper={() => console.log(Swiper)}
            
            
            loop={true}
            // breakpoints={{[]: {}}}
            >
             {data.videos.map(user => (

                    <SwiperSlide 
                    className="videoSlide"
                    key={user.id}
                    >
                        <VideoCarou />
                        

                    </SwiperSlide>
             ))}   
                
                
            </Swiper>
            <i className="fa-solid fa-angle-right fa-2xl visible proximo" />

                <article className="designMobile invisible">

                    <i className="fa-solid fa-angle-left fa-2xl invisible antes"/>
                    <i className="fa-solid fa-angle-right fa-2xl invisible proximo"/>
                </article>

        </article>
    )
})