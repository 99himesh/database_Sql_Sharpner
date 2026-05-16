const express=require("express");
const db=require('./utils/database.js');
const studentRoute=require("./routes/studentRoutes.js")
const app=express();

app.use(express.json())


app.use("/students",studentRoute);


app.get("/",(req,res)=>{
    res.send("Hello world")
});

app.listen(3000,()=>{
    console.log("Server is runnning");
    
})