import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { postVideogame, getGenres } from "../actions";
import { useDispatch, useSelector } from "react-redux";


function validate(input){
    let error = {};
    if (!input.name){
        error.name = "Name is required";
    }else if (!input.description){
        error.description = "Description is required";
    }

    return error;
}



export default function CreateGame(){
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.genres)
    const [error, setError] = useState({});


    const [input, setInput] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: "",
        platforms: "",
        img: "",
        createdDb: true,
        genres: [],
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value//toma el input y lo modifica
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value]
            })
        }
    }

    function handleSelect(e){
        setInput({
            ...input,
            genres: [...input.genres, e.target.value]//traigo y concateno
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(postVideogame(input))
        alert(`Your game ${input.name} has been created succesfully`)
        
        setInput({ //vacio los campos del form 
            name: "",
            description: "",
            releaseDate: "",
            rating: "",
            platforms: "",
            img: "",
            createdDb: true,
            genres: [],
        })
    }


    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div>
            <Link to="/home"><button>Return</button></Link>
            <h1>Create Game</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={handleChange}
                    />  
                    {error.name && (
                        <p className="error">{error.name}</p>
                    )}
                </div>
                <div>
                    <label>Description</label>
                    <input
                    type="text"
                    value={input.description}
                    name= "description"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Release date</label>
                    <input
                    type="date"
                    value={input.releaseDate}
                    name="releaseDate"
                    onChange={handleChange}
                    />
                </div>

                <div>
                <label>Image</label>
                    <input
                    type="text"
                    value={input.img}
                    name="img"
                    onChange={handleChange}
                    />
                </div>

                <div>
                <label>Rating</label>
                    <input
                    type="number"
                    value={input.rating}
                    name="rating"
                    onChange={handleChange}
                    />
                </div>
            
                <div>
                <label>Platforms</label>
                            <div>
                                <input onChange={e => handleCheck(e)} name='platforms' value='PC' type="checkbox" id="PC" />
                                <label>PC.</label>
                            </div>
                            <div>
                                <input onChange={e => handleCheck(e)} name='platforms' value='iOS' type="checkbox" id="iOS" />
                                <label>iOS.</label>
                            </div>
                            <div>
                                <input onChange={e => handleCheck(e)} name='platforms' value='Android' type="checkbox" id="Android" />
                                <label>Android.</label>
                            </div>
                            <div>
                                <input onChange={e => handleCheck(e)} name='platforms' value='macOS' type="checkbox" id="macOS" />
                                <label>macOS.</label>
                            </div>
                            <div>
                                <input onChange={e => handleCheck(e)} name='platforms' value='PlayStation 4' type="checkbox" id="PlayStation 4" />
                                <label>PlayStation 4.</label>
                            </div>
                            <div>
                                <input onChange={e => handleCheck(e)} name='platforms' value='PlayStation 5' type="checkbox" id="PlayStation 5" />
                                <label>PlayStation 5.</label>
                            </div>
                            <div>
                                <input onChange={e => handleCheck(e)} name='platforms' value='XBOX' type="checkbox" id="XBOX" />
                                <label>XBOX.</label>
                            </div>
                </div>

                        <div>
                            <label>Genre</label>
                <select onChange={(e) => handleSelect(e)}>
                   {genres.map((gen) => ( 
                       <option name={gen.name} value={gen.name}>{gen.name}</option>
                    ))}
                </select>
                <ul><li>{input.genres.map(e => e + " ,")}</li></ul>
                <button type="submit">Confirm</button>
                </div>
            </form>
        </div>
    )
}