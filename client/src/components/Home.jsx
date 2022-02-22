import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getGenres , filterByGenre, orderByName, sortRating  } from "../actions";
import { Link } from 'react-router-dom'
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

export default function Home (){

    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.videogames)
    const genres = useSelector((state) => state.genres)//equivale al mapStateToProps
    

    //estados para mi paginacion
    const [orden, setOrden] = useState('');
    const [currentPage, setCurrentPage] = useState(1);//pagina inicial
    const [videogamesPerPage, setvideogamesPerPage] = useState(15);//juegos por pagina
    const indexOfLastVideogame = currentPage * videogamesPerPage; // 15
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; //0
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame);


    const paginado = (pageNumber) => {//pasamos num de pagina
        setCurrentPage(pageNumber)//lo cambiamos
    };

    
    // console.log(allVideogames)
    useEffect (() => {
        dispatch(getVideogames());
        dispatch(getGenres())
    }, [dispatch]) 


    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames);
    };


    function handleSort (e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleFilterByGenre(e){
        e.preventDefault()
        dispatch(filterByGenre(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleSortRating(e){
        e.preventDefault()
        dispatch(sortRating(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

  
    return ( 
        <div>
            <Link to='/videogame'> Crear juego </Link>
            <h1> Videogames </h1>
            <button onClick={e => {handleClick(e)}}>
            Todos los juegos
            </button>
        <div>
            <select onChange={e => handleSort(e)}>
                <option>Orden alfabético</option>
                <option value='Asc'> A-Z Videogames </option>
                <option value='Desc'> Z-A Videogames </option>
            </select>
                <div className="orden-container"/>
                <select onChange={(e) => handleFilterByGenre(e)}>
                    {<option value="all"> Todos los generos </option>}
                    {genres?.map((genres) => {
                        return (
                            <option key={genres.name} value={genres.name}>{genres.name}</option>
                        )
                    }
                    )}
                </select>
            <select onChange={handleSortRating}>
                <option value="Asc"> Increasing Rating</option>
                <option value="Desc"> Decreasing Rating</option>
            </select>
        <div>
          <Paginado
          videogamesPerPage = {videogamesPerPage}
          allVideogames = {allVideogames.length}
          paginado = {paginado}
          />
          <SearchBar/>
          </div>

          
        
        {currentVideogames?.map(g => {
            return ( 
                <div>
                <Link to={"/home/" + g.id}>
               <Card name={g.name} img={g.img} genres={g.genres} key={g.id} rating={g.rating}/>
               </Link>
               </div>
            );
           })}
        </div>
        </div>
    )
}