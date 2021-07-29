import React from 'react'

function hendler(req,res) {
   const eventId= req.query.eventId
    if(req.method ==='POST')
    {
        const{email,name,text}=req.body
        //serverSide check value
        if(!email.includes('@')|| !name 
        ||name.trim()=='' 
        || !text 
        ||text.trim()===''
        ){
            res.status(422).json({message:'Invalid Input '})
            return;
        } 
        
        const newcomment={
            id: new Date().toISOString(),
            name,
            email,
            text,
        };
        console.log(newcomment)
        res.status(201).json({message:'Add-ToComent',comment:newcomment})

    }
    if(req.method =='GET')
    {
        const Dummydata=[
            {
                id:'c1', name:'Max',text :'A Fisrt Comment'
            },
            {
                id:'c2', name:'sumit',text :'A Second Comment'
            }
        ]
        res.status(200).json({comments:Dummydata})

    }
    return (
        <div>
            
        </div>
    )
}

export default hendler
