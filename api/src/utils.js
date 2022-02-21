const axios = require ('axios');
require('dotenv').config();
const { apikey } = require ('./db');
function traerJuegoDB(value) {
    const infoJuegoDB = {
        id: value.id,
        name: value.name,
        description: value.description,
        releaseDate: value.releaseDate,
        rating: value.rating,
        // platform: value.platform
    }
    return infoJuegoDB
}
    

async function traerJuegosApi  (value) {
    const urlApi = await axios.get(`https://api.rawg.io/api/games/${value}?key=${apikey}&page_size=100`)//revisar tamaño de pagina

    const infoJuegoApi = {
        id: urlApi.data.id,
        name: urlApi.data.name,
        description: urlApi.data.description,
        releaseDate: urlApi.data.releaseDate,
        rating: urlApi.data.rating,
        // platform: urlApi.data.platform, revisar
    }
    return infoJuegoApi
}













module.exports = {
    traerJuegoDB,
    traerJuegosApi,
}
