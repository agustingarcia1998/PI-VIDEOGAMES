import React from "react";

export default function Paginado ({videogamesPerPage, allVideogames, paginado}){
    const pageNumber = []//empieza como arr vacio

    for(let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){//redondeamos al entero igual o mayor mas cercano, del resultado de la division
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul className="paginado">
                { 
                pageNumber?.map(number =>{//si el array tiene algo...
                    return( 
                    <li className="number" key={number}>
                    <button onClick={() => paginado(number)}>{number}</button>
                    </li>
                )})}
            </ul>
        </nav>
    )
}