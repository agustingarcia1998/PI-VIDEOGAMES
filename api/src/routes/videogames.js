require('dotenv').config();
const { apikey, Videogame, Genre } = require ('../db');
const { Router } = require('express');
const axios = require('axios');
const router = Router();
const {  getGamesApi } = require ('../utils');


router.get('/', async(req, res) => {

    let { name } = req.query;
    

    if(name){
        try {
            name = name.charAt(0).toUpperCase() + name.slice(1);
            let urlBusqueda = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${apikey}`);
             const allGamesApi = urlBusqueda.data.results.map(g => {
                return{
                    id: g.id,
                    name: g.name,
                    img: g.background_image,
                    rating: g.rating,
                    genres: g.genres.map(g => g.name),
                    description: g.description,
                    platforms: g.platforms.map(p => p.platform.name),
                }
           });

            if(!allGamesApi) return res.status(404).send("Game not found" + name)

            const gamesDb = await Videogame.findAll({
                where: { name: name },
                attributes: ["id", "name", "img", "rating", "description", "platforms"],
                include: {
                    model: Genre,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
          
            const allGames = gamesDb.concat(allGamesApi).slice(0, 15) 

             res.status(200).send(allGames)
             
           
        } catch (error) {
            console.log(error);
        }
    } 
    else{//no hay name  recibido por query
        // busco todos los de mi db 
        const allGamesDb = await Videogame.findAll({
            attributes: ["id", "name", "img", "rating", "platforms", "createdDb"],
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
                        name: (g.name),
                        rating: g.rating,
                        genres: g.genres.map(g => g.name),
                        platforms: g.platforms.map(p => p.platform.name) // accedo al array platformS, luego a cada platform y me traigo solo su nombre 
                    }
                })

                results = [...results, ...infoVideoGames]// guardo lo que ya habia mas lo de info
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
    if(id.includes('-')){//db
       try {
        const gameDb = await Videogame.findByPk(
            id,
            {include: Genre})
            const myGameDb = {
                id: gameDb.id,
                name: gameDb.name,
                img: gameDb.img,
                description: gameDb.description,
                releaseDate: gameDb.releaseDate,
                rating: gameDb.rating,
                platforms: gameDb.platforms,
                genres: gameDb.genres.map(g => g.name)
            }

            if(myGameDb){
                return res.send(myGameDb)
            }
        
        
       } catch (error) {
           res.status(404).send('Game not found by id' + error)
       }
        
    }else{
        try {
            const gameApi = await getGamesApi(id)
            res.send(gameApi);
        } catch (error) {
            res.status(404).send('Game not found by id' + error)
        }
       
    }
})
        

router.post("/", async (req, res) => {

    try {

        let {name, description, releaseDate, rating, genres, platforms, createdDb, img} = req.body;
        platforms = platforms.join(", ")
        name = name.charAt(0).toUpperCase() + name.slice(1)
        if(!img.length) {
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRvZqBmoaDOK5dmTAV1t8FuWpjHnQ4LzlVg&usqp=CAU"
        }
        
        const [newGame, created] = await Videogame.findOrCreate({ 
            where: {
                name,//rec por body
                description,
                releaseDate,
                rating,
                platforms,
                createdDb: true,
                img
            }
        })
        
        if(!created){
            return res.status(400).json("This game already exists")
        }
       
        let genreVG = await Genre.findAll({
            where: {
                name: genres
            }
        })


        await newGame.setGenres(genreVG)
        console.log(newGame)

        res.status(201).send("message: Your game was created")

    } catch (error) {
        console.log("Your game can not be created" + error)
    }
})


module.exports = router