require('dotenv').config();
const { apikey, Genre } = require ('../db');
const { Router } = require('express');
const axios = require('axios');
const router = Router()


router.get('/', async (req, res) => {
    let generosDB = await Genre.findAll()

    try {
        if(generosDB.length === 0 ){
            let generosAPI = await axios.get(`https://api.rawg.io/api/genres?key=${apikey}`);
            generosAPI = generosAPI.data.results.map( genre => { return {name: genre.name}})
            generosDB = await Genre.bulkCreate(generosAPI)
        }
        res.send(generosDB)
    } catch (error) {
        res.status(404).send("error al buscar generos" + error)        
    }
    
})

module.exports = router; 