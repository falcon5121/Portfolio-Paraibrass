import React, {useRef} from "react";
import "./videos.css"
import Player from "./Player/Player"
import { ArrowBackIos, GolfCourseOutlined } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

export default function () {
    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        carousel.current.scrollLeft += -1400
    }
    const handleRightClick = (e) => {
        carousel.current.scrollLeft += 1400
        
    }
    
    return (
        <div className="txt margem">
            <h1 className="biografia">VIDEOS</h1>

<div className="centralizado">
    <ArrowBackIos className="setas" onClick={handleLeftClick}/>
        
        <div className="videos" ref={carousel}>
            <div className="Player-video">
                <Player/>
                <Player/>
                <Player/>
            </div>
        </div>

    <ArrowForwardIos className="setas" onClick={handleRightClick}/>
</div>
        </div>
    )
}