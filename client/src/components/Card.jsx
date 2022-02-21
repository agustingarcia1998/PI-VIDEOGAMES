import React from "react";

export default function Card({ name, img, genres, rating }) {
    if(typeof genres[0] !== "string"){
        genres = genres.map(g => g.name)
    } else {
        genres = genres 
    }
    return(
        <div>
            <h3>{name}</h3>
            <img src={img} alt="img not found" width="200px" height="250px" />
           <h5>Géneros:{genres.join( ", ")}</h5>
           <h5>Rating:{rating}</h5>
        </div>

    );
}