import React from 'react'

function handler(req,res) {
    if(req.method ==="POST"){
        const UserEmail=req.body.email;
        if(!UserEmail || !UserEmail.includes('@')){
            res.status(422).json({message:'Invalide Email Addres !'});
            return;

        }
        console.log(UserEmail)
        res.status(201).json({message:'Singup'})
    }
    
}

export default handler
