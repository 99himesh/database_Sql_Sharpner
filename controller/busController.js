const db=require("../utils/database.js")

const addBus=(req,res)=>{
     const {busName,busNumber,availableSeats}=req.body;
     const addQuery=`INSERT INTO Bus (busName,busNumber,availableSeats) VALUES (?,?,?)` 
     db.execute(addQuery,[busName,busNumber,availableSeats],(err )=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            return;
        }
        res.status(200).send(`Bus have been created with name ${busName}`)
     })
     
}

const getBus=(req,res)=>{
    const getQuery=`Select * from Bus WHERE availableSeats>10`;
    db.execute(getQuery,(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            return; 
        }
        console.log(result);
        
        res.status(200).send({data:result,message:`Fetch all Busses`})

    })

    
}



module.exports={
    addBus,
    getBus
}