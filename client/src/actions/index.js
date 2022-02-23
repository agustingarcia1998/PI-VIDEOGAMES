import axios from "axios";


export function getVideogames(){
    return async function(dispatch){ 
        const json = await axios.get ("http://localhost:3001/videogames");

        return dispatch({
        type: "GET_VIDEOGAMES",
        payload: json.data
        })

    }
}

export function getGenres(){
    return async function(dispatch){
            const info = await axios.get("http://localhost:3001/genres");
            return dispatch({
                type: "GET_GENRES",
                payload: info.data
    })
}
}

export function filterByGenre(payload){
    return {
        type: "FILTER_BY_GENRES", 
        payload
    }

}


export function orderByName(payload){
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}

export function sortRating(payload){
    return{
        type: "SORT_RATING",
        payload
    }
}

export function getNameVideogames(name){
    return async function (dispatch){
        try  { 
        var json = await axios.get ("http://localhost:3001/videogames?name=" + name);
            return dispatch({
                type: "GET_NAME_VIDEOGAMES",
                payload: json.data
            })
    }catch(err) {
        console.log(err)
    }
}
}

export function postVideogame(payload){
    return async function(dispatch){
        const info = await axios.post("http://localhost:3001/videogames", payload)
        return info
    }
}

export function getPlatforms(){
    return async function (dispatch){
        try {
            const response = await axios.get("http://localhost:3001/videogames")
            return dispatch({
                type: "GET_PLATFORMS",
                payload: response.data

            })
        } catch (err) {
            // console.log(err)
        }
    }
}

export function detailsGame(id){
    return async function(dispatch){
        try {
            let response = await axios.get(`http://localhost:3001/videogames/${id}`)
            console.log(response)
            console.log(id)
            return dispatch({
                type: "GET_DETAILS",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}







