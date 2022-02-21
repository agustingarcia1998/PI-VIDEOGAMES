import React from "react";

export default function Paginado ({videoGamesPerPage, allVideoGames, paginado}){
    const pageNumber = []

    for(let i = 1; i <= Math.ceil(allVideoGames/videoGamesPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul className="paginado">
                { 
                pageNumber?.map(number =>{
                    return( 
                    <li className="number" key={number}>
                    <button onClick={() => paginado(number)}>{number}</button>
                    </li>
                )})}
            </ul>
        </nav>
    )
}