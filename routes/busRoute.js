const express=require("express");
const router=express.Router();
const busController=require("../controller/busController.js")


router.post("/add",busController.addBus)
router.get("/getBus",busController.getBus)


module.exports=router;