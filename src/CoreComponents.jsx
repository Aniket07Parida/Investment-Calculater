import React from "react";

export default function CoreComponents({img,title,description}) {
    return (
        <>
            <div>
                
            <img src={img} alt={title} style={{width:100, height:100,borderRadius:5}} />
            <h2>{title}</h2>
                <p>{description}</p>
                </div>
        </>
    )
}