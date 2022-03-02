
const initialState = {
    videogames : [],
    genres : [], 
    copyVideogames : [],
    rating : [],
    platforms : [],
    details : [],
    videogamesRender: []
}

function rootReducer (state = initialState, action){
    switch(action.type) {
        case 'GET_VIDEOGAMES' :
            return {
                ...state,
                videogames: action.payload,
               copyVideogames: action.payload,
               videogamesRender: action.payload
            }

        case 'ORDER_BY_NAME':
            let orderName = action.payload === 'Desc' ?
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
                    
                    return 0;
                })
                return {
                    ...state, 
                    videogames: orderName
                }
            
        case 'FILTER_BY_GENRES':
            let genre = action.payload === "all" ? state.copyVideogames : state.copyVideogames.filter((el) => el.genres.includes(action.payload))
                             
             return {
                 ...state,
                videogames: genre,
            }

        case 'FILTER_BY_CREATED':
            let filterGames = action.payload === "All" ? state.copyVideogames : action.payload === "Created" ? state.copyVideogames.filter(g => g.createdDb) : state.copyVideogames.filter(g => !g.createdDb)

            return{
                ...state,
                videogames: filterGames
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

        case "POST_VIDEOGAME":
            return{
                ...state,
            }

        case "GET_PLATFORMS":
            const platform = action.payload.map(g => g.platforms).flat()//concateno
            const platformMap = [...new Set(platform)]//guardo los nuevos value
            return{       
                ...state,   
                platforms: platformMap
            }

        case "GET_DETAILS":
            return{
                ...state,
                details: action.payload
            }
                                 
                

        default:
            return state;
    }
        
}

        

export default rootReducer;