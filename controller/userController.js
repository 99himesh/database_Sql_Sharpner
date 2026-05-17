const db=require("../utils/database.js")

const addUser=(req,res)=>{
     const {name,email}=req.body;
     const addQuery=`INSERT INTO Users (name,email) VALUES (?,?)` 
     db.execute(addQuery,[name,email],(err )=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            return;
        }
        res.status(200).send(`User have been created with name ${name}`)
     })
     
}

const getUser=(req,res)=>{
    const getQuery=`Select * from Users`;
    db.execute(getQuery,(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            return; 
        }
        console.log(result);
        
        res.status(200).send({data:result,message:`Fetch all users`})

    })

    
}



module.exports={
    addUser,
    getUser
}