const router = require('express').Router();
const { playbackController } = require('../controllers/media.js');
const { authorize, logger } = require('../middleware/middlewares.js');


router.post('/playback', authorize, playbackController)


module.exports = router;
