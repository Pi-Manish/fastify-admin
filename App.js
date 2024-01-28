const fastify = require('fastify')({
    logger:true
})
require("dotenv").config();
const fastifyEnv = require('@fastify/env')
fastify.register(require('@fastify/mongodb'), {
    // force to close the mongodb connection when app stopped
    // the default value is false
    forceClose: true,
    
    url: process.env.MONGODB_URI
  })

fastify.get('/', function(request , reply){
    reply.send({hello :"World"})
})
    //  working

    console.log(process.env.MONGODB_URI)
fastify.listen(process.env.PORT , (err ,address)=>{

    if(err){
        fastify.log.error(err)
        process.exit(1)
    }

})