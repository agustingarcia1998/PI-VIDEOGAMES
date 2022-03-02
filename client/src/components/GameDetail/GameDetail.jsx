import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsGame, getGenres, getPlatforms } from "../../actions/index";
import { Div } from "./Styled";


export default function GameDetail(props){
const dispatch = useDispatch()
const myVideogame = useSelector((state) => state.details)


const {id} = useParams()

useEffect(() => {
    dispatch(detailsGame(id));
},[dispatch])

useEffect(() => {
    dispatch(getGenres())
}, [dispatch])

useEffect(() => {
    dispatch(getPlatforms())
}, [dispatch])


function showDescr(){
    return {__html: myVideogame.description}
}
// console.log(myVideogame)

return(
    <Div>
        <Link to='/home'>
            <button className="buttonback">Go back</button>
        </Link>
        <div className="detailback">
        { 
        myVideogame?
        <div className="contdetail">
            <h1 className="title">{myVideogame.name}</h1>
            <img src={myVideogame.img} alt="img not found" width="300px" height="300px"/>
            <h4>Release date: {myVideogame.releaseDate}</h4>
            <h4>Rating: {myVideogame.rating}</h4>
            <h4>Platforms: {(myVideogame.platforms)}</h4>
            <h4>Genres: {(myVideogame.genres)?.join(', ')}</h4>
            <h4>About this game:</h4>
            <div dangerouslySetInnerHTML={showDescr()}/>
            
        </div> : <p>Loading...</p>
        }
       
    </div>
    </Div>
)
}