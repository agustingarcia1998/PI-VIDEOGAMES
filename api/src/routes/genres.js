require('dotenv').config();
const { apikey, Genre } = require ('../db');
const { Router } = require('express');
const axios = require('axios');
const router = Router()


router.get('/', async (req, res) => {
    let generosDB = await Genre.findAll()// busco en la tabla todos

    try {
        if(generosDB.length === 0 ){
            let generosAPI = await axios.get(`https://api.rawg.io/api/genres?key=${apikey}`);
            generosAPI = generosAPI.data.results.map( genre => { return {name: genre.name}})
            generosDB = await Genre.bulkCreate(generosAPI)// guarda en Genre todos los generos sacados de la Api

        }
        res.send(generosDB)
    } catch (error) {
        res.status(404).send("error to looking genres" + error)        
    }
    
})

module.exports = router; 