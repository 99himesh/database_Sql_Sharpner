const db=require("../utils/database.JS")

const addEnteries=(req,res)=>{
   const {name,email}=req.body;
   const addEntry=`SELECT INSERT INTO STUDENTS (name,email) VALUES (?,?)`
   db.execute(addEntry,[name,email],(err)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message)
       return;
    }
    console.log('Value has been inserted');
    res.status(200).send(`Students with name ${name}created successfull`)
   })
}

const updateEntry=(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const updateQuery=`UPDATE STUDENTS 
                      SET name=?
                      where id=?`
    db.execute(updateQuery,[name,id],(err,result)=>{
         if(err){
        console.log(err.message);
        res.status(500).send(err.message)
       return;
         } 
         if(result.affectedRows==0){
            res.status(404).send("Student not found");
            return;
         } 
       res.status(200).send(`Students with name ${name} update successfull`)


    })

}

const deleteEntery=(req,res)=>{
    const {id}=req.params;
    const deleteQuery=`DELETE FROM STUDENTS 
                        WHERE id=?`;
   db.execute(deleteQuery,[id],(err,result)=>{
         if(err){
            console.log(err.message);
            res.status(500).send(err.message)
            return;
            } 
         if(result.affectedRows==0){
            res.status(404).send("Student not found");
            return;
         } 
       res.status(200).send(`Studentsid ${id} deleted successfull`)
    })
}


module.exports={
    addEnteries,
    updateEntry,
    deleteEntery
}