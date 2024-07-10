const router = require('express').Router();
const { authorize, logger } = require('../middleware/middlewares.js');
const {getConfig, createNewConfig, updateConfig} = require('../controllers/config.js');


router
.get('/',  authorize, getConfig)
.get('/:key', authorize, getConfig)
.post('/', authorize, createNewConfig)
.post('/:key', authorize, createNewConfig)
.patch('/:key', authorize, updateConfig)
.put('/:key', authorize, updateConfig)

module.exports = router;
