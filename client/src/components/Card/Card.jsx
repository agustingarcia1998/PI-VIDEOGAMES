import React from "react";
import { Div } from "./Styled";

export default function Card({ name, img, genres, id, rating}) {
    if(typeof genres[0] !== "string"){
        genres = genres.map(g => g.name)
    }
        
    
    return(
        <Div>
        <div key={id} className="cards">
            <h2 className="namecard">{name}</h2>
            <img className="image" src={img} alt="img not found" width="300px" height="250px" />
           <h5 className="genrecards">Rating: {rating}</h5>
           <h5 className="genrecards">Genres: {genres.join( ", ")}</h5>
        </div>
        </Div>);
}