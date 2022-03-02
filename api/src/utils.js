const axios = require ('axios');
require('dotenv').config();
const { apikey } = require ('./db');


function getGamesDb(value) {
    const infoJuegoDB = {
        id: value.id,
        name: value.name,
        img: value.img,
        description: value.description,
        releaseDate: value.releaseDate,
        rating: value.rating,
        // platform: value.platform
    }
    return infoJuegoDB
}
    

async function getGamesApi  (value) {
    const urlApi = await axios.get(`https://api.rawg.io/api/games/${value}?key=${apikey}&page_size=100`);
    let platforms2 = (urlApi.data.platforms).map(p => p.platform.name)
    platforms2 = platforms2.join(', ')
    
    const infoJuegoApi = {
        id: urlApi.data.id,
        name: urlApi.data.name,
        img: urlApi.data.background_image,
        description: urlApi.data.description,
        genres: (urlApi.data.genres).map(g => g.name),
        releaseDate: urlApi.data.released,
        rating: urlApi.data.rating,
        platforms: platforms2, 
        
    }
    return infoJuegoApi
}




module.exports = {
    getGamesDb,
    getGamesApi,
}
