import React  from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../../actions";
import { Div } from "./Styled";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

function handleInputChange(e){ 
    e.preventDefault()
    setName(e.target.value)
    
}
function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameVideogames(name.toLowerCase()))
   

}
    return (
        <Div>
        <div className="searchbar">
            <input
            className="inputsearch"
            type='text'
            placeholder="Search..."
            onChange = {(e) => handleInputChange(e)}
            />
            <button className="buttonsearch" type="submit" onClick={(e) => handleSubmit(e)}>Search games</button>
        </div>
        </Div>
    )
}