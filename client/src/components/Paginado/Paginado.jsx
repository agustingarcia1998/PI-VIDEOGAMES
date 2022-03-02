import React from "react";
import { Div } from "./Styled";

export default function Paginado ({videogamesPerPage, allVideogames, paginado}){
    const pageNumber = []//empieza como arr vacio

    for(let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){//redondeamos al entero igual o mayor mas cercano, del resultado de la division
        pageNumber.push(i)
    }

    return(
        <Div>
        <div>
            <div className="paginado">
                { 
                pageNumber?.map(number =>{//si el array tiene algo...
                    return( 
                    <ul className="number" key={number}>
                    <button className="contnumbers" onClick={() => paginado(number)}>{number}</button>
                    </ul>
                )})}
            </div>
        </div>
        </Div>
    )
}