const mysql=require("mysql2");



const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Himesh1999@",
    database:"ticketBookingApp"
});

connection.connect((err)=>{ 
  if(err){
    console.log(err);
    return;
  }
  console.log("Connection has been created");
  const createQuery=[
             `CREATE TABLE IF NOT EXISTS Students(
              id int primary key AUTO_INCREMENT,
              name varchar(20),
              email varchar(100)
            )`,
            `CREATE TABLE IF NOT EXISTS Bus(
              id int primary key AUTO_INCREMENT,
              busName varchar(20),
              busNumber int,
              availableSeats int
            )`,
            `CREATE TABLE IF NOT EXISTS Users(
              id int primary key AUTO_INCREMENT,
              name varchar(20),
              email varchar(100)
            )`
          ]
   createQuery.map((query)=>{
    return connection.execute(query,(err)=>{
    if(err){
        connection.end();
        return;   
    }
    console.log("table is created ");
    
   })
   })
   
  
  })


module.exports=connection