const router = require('express').Router();
const { authorize, logger } = require('../middleware/middlewares.js');
const { activateHotspot } = require('../controllers/system.js');


router.post('/hotspot', authorize, activateHotspot)


module.exports = router;
