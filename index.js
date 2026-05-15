const express=require("express");
const mysql=require("mysql2");
const app=express();



const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Himesh1999@",
    database:"testdb"
});

connection.connect((err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("Connection has been created");
  
  const createQuery=`CREATE TABLE students(
    id int primary key,
    name varchar(20),
    email varchar(20)
  )`
  console.log("Table is created");
  connection.execute(createQuery,(err)=>{
    if(err){
        console.log(err);
        connection.end();
        return;
        
    }
    console.log("table is created");
    
  })
})

app.get("/",(req,res)=>{
    res.send("Hello world")
});



app.listen(3000,()=>{
    console.log("Server is runnning");
    
})