import axios from "axios";


export function getVideogames(){
    return async function(dispatch){ 
        const json = await axios.get ("http://localhost:3001/videogames");

        return dispatch({
        type: 'GET_VIDEOGAMES',
        payload: json.data
        })

    }
}

export function getGenres(){
    return async function(dispatch){
            const response = await axios.get("http://localhost:3001/genres");
            return dispatch({
                type: "GET_GENRES",
                payload: response.data
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
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function sortRating(payload){
    return{
        type: "SORT_RATING",
        payload
    }
}

export function creationFilter(payload){
    return{
        type: "CREATION_FILTER",
        payload,
    };
}


        







