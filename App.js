const fastify = require('fastify')({
    logger:true
})

fastify.get('/', function(request , reply){
    reply.send({hello :"World"})
})
//woking
fastify.listen({port:3000} , (err ,address)=>{
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
})