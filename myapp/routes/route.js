const express=require("express")
const router= express.Router()
const loginTemplateCopy =require('../models/loginmodel')

router.post('/login',(request,response)=>{
    const loginuser= new loginTemplateCopy({
         fullName: request.body.fullName,
         userName: request.body.userName,
         position: request.body.position,
         login :true

    })
    loginuser.save().then(data=>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })

})

module.exports =router