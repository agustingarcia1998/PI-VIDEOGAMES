import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { postVideogame, getGenres } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Div } from "./Styled";

function validate(input){
    let error = {};
    if (!input.name) {
        error.name = "Name is required";
    }
    else if (!input.description) {
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
        platforms: [],
        img: "",
        createdDb: true,
        genres: [],
    })

    function handleChange(e){
        if(e.target.name === "rating") { 
        setInput({
            ...input,
            [e.target.name] : Number(e.target.value) <= 0 || Number(e.target.value) > 5 ? "" : e.target.value,
        });
      } else {
        setError(
          validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      }
    
}

    function handleCheck(e){
        if(input.platforms.includes(e.target.value)){//incluye el valor que estoy marcando
            input.platforms = input.platforms.filter(p => p !== e.target.value)//deja los que no haya marcado
            setInput({
                ...input,
                platforms: input.platforms
            })

           
    
            }else{
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value]
            })
        }      
    }
    // console.log(input.platforms)

    function handleSelect(e){
        setInput({
            ...input,
            genres: [...input.genres, e.target.value]//traigo y concateno
        })
    }

    function handleDelete(el){
        setInput({
            ...input,
            genres: input.genres.filter(gen => gen !== el)//filtro por los que no son ese el, y me devuelve los no clickeados
        })
    }


    //////////valido si se selecciona genre y platform/////////////
    let checkErrors = [];
    if(input.genres.length < 1){
        checkErrors.push("Genres is required");
    }
    if(input.platforms.length < 1){
        checkErrors.push("Platforms is required");
    }
    //////////////////////////////////////////////////////////////

    function handleSubmit(e){
        e.preventDefault()
      if(Object.keys(error).length || checkErrors.length){
        return alert(Object.values(error).concat(checkErrors).join('\n'));
      }else{
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
    }


    useEffect(() => {
        setError(validate(input))
    }, [input])

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    // console.log(input.genres)
    return (
        <Div>
        <div className="cont-form">
            <Link to="/home"><button className="buttonreturn">Return</button></Link>
            <h1 className="titlecreate">Create Game</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="dates-col">
                    <div className="nametit">
                        <label>Name </label>
                        <input
                        autoComplete="off"
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
                        <label>Description </label>
                        <input
                        autoComplete="off"
                        type="text"
                        value={input.description}
                        name= "description"
                        onChange={handleChange}
                        />
                         {error.description && (
                            <p className="error">{error.description}</p>
                         )}
                    </div>
                    <div>
                        <label>Release date </label>
                        <input
                        type="date"
                        value={input.releaseDate}
                        name="releaseDate"
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                    <label>Image </label>
                        <input
                        autoComplete="off"
                        type="text"
                        value={input.img}
                        name="img"
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                    <label>Rating </label>
                        <input
                        type="number"
                        placeholder="Min 1 - Max 5"
                        value={input.rating}
                        name="rating"
                        onChange={handleChange}
                        />
                        {error.platforms && (
                            <p className="error">{error.platforms}</p>
                         )}
                    </div>
                </div>
                

                <label>Platforms</label>
                
                    <div className="checkbox-col">     
                        <div>
                            <input onChange={e => handleCheck(e)} name='platforms' value='PC' type="checkbox" id="PC" />
                            <label>PC</label>
                        </div>
                        <div>
                            <input onChange={e => handleCheck(e)} name='platforms' value='PlayStation 4' type="checkbox" id="PlayStation 4" />
                            <label>PlayStation 4</label>
                        </div>
                        <div>
                            <input onChange={e => handleCheck(e)} name='platforms' value='PlayStation 5' type="checkbox" id="PlayStation 5" />
                            <label>PlayStation 5</label>
                        </div>
                        <div>
                            <input onChange={e => handleCheck(e)} name='platforms' value='XboxOne' type="checkbox" id="XboxOne" />
                            <label>XboxOne</label>
                        </div>
                        <div>
                            <input onChange={e => handleCheck(e)} name='platforms' value='XboxSeriesX' type="checkbox" id="XboxSeriesX" />
                            <label>XboxSeriesX</label>
                        </div>
                        <div>
                            <input onChange={e => handleCheck(e)} name='platforms' value='Android' type="checkbox" id="Android" />
                            <label>Android</label>
                        </div>
                        <div>
                            <input onChange={e => handleCheck(e)} name='platforms' value='iOS' type="checkbox" id="iOS" />
                            <label>iOS</label>
                        </div>
                        
                       
                        
                       
                    </div>                              

                      
                            <label>Genre </label>
                <select onChange={(e) => handleSelect(e)}>
                   {genres.map((gen) => ( 
                       <option key={gen.name} name={gen.name} value={gen.name}>{gen.name}</option>
                    ))}
                   
                </select>
                
                {input.genres.map(el => 
                    <div className="divgen">
                        <p key={el}>{el}</p>
                        <button className="buttonx" onClick={() => handleDelete(el)}>X</button>
                    </div>
                )}
                <div>
                    <button className="buttonconfirm" type="submit">Confirm</button>
                </div>
            </form>
        </div>
        </Div>
    )
}