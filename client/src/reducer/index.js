
const initialState = {
    videogames : [],
    genres : [], 
    copyVideogames : [],
    rating : [],
}

function rootReducer (state = initialState, action){
    switch(action.type) {
        case 'GET_VIDEOGAMES' :
            return {
                ...state,
                videogames: action.payload,
               copyVideogames: action.payload
            }

        case 'ORDER_BY_NAME':
            let sortedArr = action.payload === 'Asc' ?
                state.videogames.sort(function (a, b) {
                    if(a.name > b.name) {
                        return 1;
                    }
                    if(b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.videogames.sort(function (a, b) {
                    if(a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    
                })
                return {
                    ...state, 
                    videogames: sortedArr
                }
            
        case 'FILTER_BY_GENRES':
            let genre = action.payload === "all" ? state.copyVideogames : state.copyVideogames.filter((el) => el.genres.includes(action.payload))
                             
             return {
                 ...state,
                videogames: genre,
            }

        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }

        case 'SORT_RATING':
            let sortRating = action.payload === 'Asc' ?
            [...state.videogames].sort(function (a, b) {
                    return (a.rating - b.rating);
            }) :
              [...state.videogames].sort(function(a, b){
                  return (b.rating - a.rating)
              })
            return {
                ...state, 
                videogames: sortRating
            }

        case "GET_NAME_VIDEOGAMES":
            return {
                ...state,
                videogames: action.payload
            }

                                 
                

        default:
            return state;
    }
        
}

        

export default rootReducer;