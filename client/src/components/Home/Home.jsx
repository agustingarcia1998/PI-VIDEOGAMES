import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getGenres , filterByGenre, orderByName, sortRating, filterByCreated  } from "../../actions";
import { Link } from 'react-router-dom'
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Div } from "./Styled";

export default function Home (){

    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.videogames)
    const genres = useSelector((state) => state.genres)//equivale al mapStateToProps
    const videogamesRender = useSelector((state) => state.videogamesRender)

    //estados para mi paginacion
    const [order, setOrder] = useState('');
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
        dispatch(getVideogames());
    };


    function handleSort (e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))//elem clickeado
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    };

    
    function handleFilterCreated(e){
        dispatch(filterByCreated(e.target.value))
        setCurrentPage(1);
    }
   

    function handleFilterByGenre(e){
        e.preventDefault()
        dispatch(filterByGenre(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    };

    function handleSortRating(e){
        e.preventDefault()
        dispatch(sortRating(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    };


    

    if(videogamesRender.length === 0){
        return (
            <Div>
                <div className="loadpage">
                    <img src="https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-25.gif"/>
                </div>
            </Div>
        )
    }else{
    return ( 
        <Div>
        <h1> VIDEOGAMES </h1>
        <SearchBar/>
        <div className="contbuttons">
            <Link className="link" to='/videogame'><button className="buttoncreate"> Create Game! </button></Link>
           
            
            <button className="buttonallg" onClick={e => {handleClick(e)}}>
            All Games
            </button>
        </div>
        <div className="contfilters">
            <select className="selectfilter" onChange={e => handleSort(e)}>
                <option value='Order'>Alphabetical Order</option>
                <option value='Asc'> Z-A </option>
                <option value='Desc'> A-Z </option>
            </select>
            <select className="selectfilter" onChange={e => handleFilterCreated(e) }>
                <option value='All'>Filter origin</option>
                <option value='Api'> Api </option>
                <option value='Created'> Created </option>
            </select>

                
                <select className="selectfilter" onChange={(e) => handleFilterByGenre(e)}>
                    {<option value="all"> All Genres </option>}
                    {genres?.map((genres) => {
                        return (
                            <option key={genres.name} value={genres.name}>{genres.name}</option>
                        )
                    }
                    )}
                </select>
            <select className="selectfilter" onChange={handleSortRating}>
                <option value='Order'> Rating </option>
                <option value="Asc"> Increasing Rating</option>
                <option value="Desc"> Decreasing Rating</option>
            </select>
        </div>
       
          
        <div className="allcards">
        {currentVideogames.length > 0 ? ( currentVideogames.map(g => {
            return ( 
                <div key={g.id}>
                <Link className="link" to={"/home/" + g.id}>
               <Card name={g.name} id={g.id} img={g.img} genres={g.genres} 
                rating={g.rating} platforms={g.platforms}/>
               </Link>
               </div>
               
            );
           })) : <p className="notfound">Videogames not found...</p>
        }
         

        </div>
        <div>
          <Paginado
          videogamesPerPage = {videogamesPerPage}
          allVideogames = {allVideogames.length}
          paginado = {paginado}
          />
          
        </div>
        
        </Div>)}
}