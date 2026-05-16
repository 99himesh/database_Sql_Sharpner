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
  const createQuery=
             `CREATE TABLE IF NOT EXISTS Students(
              id int primary key AUTO_INCREMENT,
              name varchar(20),
              email varchar(100)
            )`
   connection.execute(createQuery,(err)=>{
    if(err){
        connection.end();
        return;   
    }
    console.log("table is created ");
    
   })
  
  })


module.exports=connection