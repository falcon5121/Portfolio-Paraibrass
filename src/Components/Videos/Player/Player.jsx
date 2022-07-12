import React from "react";
import "./Player.css"


export default function () {
    
    return (
        <div className="container-video">
            <iframe width={1200} height={720} 
            src="https://www.youtube.com/embed/ai1zmNO5Z3E" 
            title="YouTube video player" 
            frameBorder={0} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
        </div>

    )

    

}