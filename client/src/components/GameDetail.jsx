import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsGame, getGenres, getPlatforms } from "../actions/index";


export default function GameDetail(props){
    console.log(props)
const dispatch = useDispatch()
const myVideogame = useSelector((state) => state.details)
console.log(myVideogame)

const {id} = props.match.params

useEffect(() => {
    dispatch(detailsGame(id));
},[dispatch])

useEffect(() => {
    dispatch(getGenres())
}, [dispatch])

useEffect(() => {
    dispatch(getPlatforms())
}, [dispatch])




return(
    <div>
        { 
        myVideogame?
        <div>
            <h1>{myVideogame.name}</h1>
            <img src={myVideogame.img} alt="" width="500px" height="700px"/>
            <h2>{myVideogame.description}</h2>
            <p>{myVideogame.releaseDate}</p>
            <h4>{myVideogame.rating}</h4>
            <h4>Platforms: {myVideogame.platforms}</h4>
            <h5>Genres: {myVideogame.genres}</h5>

        </div> : <p>Loading...</p>
        }
        <Link to='/home'>
            <button>Go back</button>
        </Link>
    </div>
)
}