const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogamesRouter = require('./videogames.js');
const genRouter = require('./genres.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRouter);//get y post
router.use('/genres', genRouter);//vamos a tener la peticion get que muestra todos los generos

module.exports = router;
