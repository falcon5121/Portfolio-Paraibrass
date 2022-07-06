import React, { useRef } from "react";
import '../../Cards/Cards.css'
import Card from '../../Cards/Cards'
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

export default function carrosel () {
    
    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    
    const handleRightClick = (e) => {
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    
    return (
        
        <div className="txt">
                    <h1 className="biografia">BIOGRAFIA</h1>
            <div className="arrow">
                <ArrowBackIos className="setas" onClick={handleLeftClick} transition="transform 0.2s"/>
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
                <ArrowForwardIos className="setas" onClick={handleRightClick}/>
        </div>


            </div>

    )
}