import React from "react";

export default function Card({ name, img, genres, rating, platforms, id }) {
    if(typeof genres[0] !== "string"){
        genres = genres.map(g => g.name)
    } else {
        genres = genres 
    }

    // console.log(platforms)


    return(
        <div>
            <h3>{name}</h3>
            <img src={img} alt="img not found" width="200px" height="250px" />
            <h6>EL ID ES {id}</h6>
           <h5>Géneros: {genres.join( ", ")}</h5>
           <h5>Rating: {rating}</h5>
           <h5>Platforms: {
               typeof platforms === "string" ? platforms : platforms?.join(", ")
               }
            </h5>
        </div>

    );
}