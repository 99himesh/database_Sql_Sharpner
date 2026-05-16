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
  const createQuery=[
             `CREATE TABLE Users(
              id int primary key,
              name varchar(20),
              email varchar(20)
            )`,
            `CREATE TABLE Busses(
              id int primary key,
              busNumber int,
              totalSeats int,
              availableSeats int
            )`,
            `CREATE TABLE Bookings(
              id int primary key,
              seatNumber int
            )`,
            `CREATE TABLE Payments(
              id int primary key,
              amountPaid int,
              paymentStatus int
            )`
];


createQuery.map((query)=>{
  return connection.execute(query,(err)=>{
    if(err){
        connection.end();
        return;   
    }
    console.log("table is created");
    
  })
})
  
})

app.get("/",(req,res)=>{
    res.send("Hello world")
});

app.listen(3000,()=>{
    console.log("Server is runnning");
    
})