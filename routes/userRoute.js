const express=require("express");
const router=express.Router();
const userController=require("../controller/userController.js")


router.post("/add",userController.addUser)
router.get("/getUser",userController.getUser)

module.exports=router;