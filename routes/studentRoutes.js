const express=require("express");
const router=express.Router();
const studentController=require("../controller/studentController.js")


router.post("/add",studentController.addEnteries)
router.put("/update/:id",studentController.updateEntry)
router.delete("/delete/:id",studentController.deleteEntery)

module.exports=router;