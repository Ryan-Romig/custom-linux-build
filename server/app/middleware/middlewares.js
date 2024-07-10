const { getSecret, secretNames } = require( "../secrets")

const authorize = (req,res,next) => {
    // if(!req.headers.authorization){
    //     return res.status(403).json({error:'no credentials sent'})
    //   }
    //   if(req.headers.authorization !== getSecret(secretNames.clientToken)){
    //     return res.status(403).json({error:'not authorized'})
    //   }
    next()
}


const logger = (req,res,next) => {
    console.log('got request from', req.socket.remoteAddress)
    next()
}
module.exports = {logger, authorize}