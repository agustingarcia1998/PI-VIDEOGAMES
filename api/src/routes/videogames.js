require('dotenv').config();
const { apikey, Videogame, Genre } = require ('../db');
const { Router } = require('express');
const axios = require('axios');
const router = Router()
const {  traerJuegoDB, traerJuegosApi } = require ('../utils');


router.get('/', async(req, res) => {

    const { name } = req.query;

    if(name){
        try {
            let urlBusqueda = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${apikey}`);
             const allGamesApi = urlBusqueda.data.results.map(g => {
                return{
                    id: g.id,
                    name: g.name,
                    background_image: g.background_image,
                    rating: g.rating,
                    genres: g.genres.map(g => g.name)
                }
           });

            if(!allGamesApi) return res.status(204).send("No se encontro el juego" + name)

            const gamesDb = await Videogame.findAll({
                where: { name: name.toLowerCase() },
                include: Genre
            })
          
            const allGames = gamesDb.concat(allGamesApi).slice(0, 15) 

             res.status(200).send(allGames)
             
           
        } catch (error) {
            console.log(error); // PREGUNTAR POR QUÉ NO ANDA ????????
        }
    } 
    else{
        // busco todos los de mi db 
        const allGamesDb = await Videogame.findAll({
            attributes: ["name", "img", "rating"],
            include:{
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }

        })

        try {
            let pages = 1
            let results = [...allGamesDb]
            let urlApi = await axios.get(`https://api.rawg.io/api/games?key=${apikey}`)

            while(pages < 6){
                pages ++ 

                const infoVideoGames =  urlApi.data.results.map(g => {
                    return {
                        id: g.id,
                        img: g.background_image,
                        name: g.name,
                        rating: g.rating,
                        genres: g.genres.map(g => g.name)
                    }
                })

                results = [...results, ...infoVideoGames]
                urlApi = await axios.get(urlApi.data.next)
            }
            return res.send(results)
        } catch (error) {
            res.status(404).send(error)
        }
        
}
})


 


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if(id.includes('-')){
       try {
        const gameDb = await Videogame.findOne({
            where: { id },
            include: Genre
        })
        const gameSearchDb = traerJuegoDB(gameDb)
        res.send(gameSearchDb)   
       } catch (error) {
           res.status(404).send('no se encuentra juego por id' + error)
       }
        
    }else{
        try {
            const gameApi = await traerJuegosApi(id)
            res.send(gameApi);
        } catch (error) {
            res.status(404).send('no se encuentra juego por id' + error)
        }
       
    }
})
        

router.post("/", async (req,res) => {
   
    // platforms = platforms.join(', ')

    try {

        const {name, description, releaseDate, rating, genres, platforms} = req.body;

        const newGame = await Videogame.findOrCreate({ 
            
            where: {
                name,
                description,
                releaseDate,
                rating,
                platforms,
            }
        })

        await newGame[0].addGenres(genres);
        res.status(201).send("message: Tu juego fue creado")

    } catch (error) {
        res.status(404).send("No se pudo crear tu juego" + error)
    }
})


module.exports = router