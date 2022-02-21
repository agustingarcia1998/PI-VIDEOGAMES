const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videoGamesRouter = require('./videogames.js');
const genRouter = require('./genres.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videoGamesRouter);
router.use('/genres', genRouter);

module.exports = router;
