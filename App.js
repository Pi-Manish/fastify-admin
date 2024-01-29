const fastify = require('fastify')({
    logger:true
})
const mongoose = require("mongoose")
const User = require('./models/userModel');
require("dotenv").config();
// const fastifyEnv = require('@fastify/env')

mongoose 
 .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
      })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

fastify.get('/', async function(request , reply){
    // reply.send({hello :"World"})
    const obj =new User({
        name :"Manish",
        email:"saaJanyankee@gmail.com",
        mobile:"8222828123",
        role:"Operator",
        password:"King@123"
    });
    const result = await obj.save();
    console.log(result);
    reply.send({result});

})

fastify.listen(process.env.PORT , (err ,address)=>{
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
})