const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogamesRouter = require('./videogames.js');
const genRouter = require('./genres.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRouter);
router.use('/genres', genRouter);

module.exports = router;
