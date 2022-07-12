import { borderRadius } from "@mui/system";
import React from "react";
import "../../index.css"


export default function () {
    
    return (
        
            <iframe className="player-video" 
            src="https://www.youtube.com/embed/ai1zmNO5Z3E" 
            title="YouTube video player" 
            frameBorder={0}
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen />
        

    )

    

}