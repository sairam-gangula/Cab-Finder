const express = require('express');
const router = express.Router();
const axios = require("axios").default;
// const { addUser} = require('../controllers/fpcontrol');
//here we take in attributes from "/register which is front end link"
router.post("/register", async (req,res)=>{
    try{
        const {name,contact,age,gender,email,password,state,city,street} = req.body;
        console.log(req.body);
    }
    catch(error){
        console.error(error.message);
    }
    
}) 




module.exports = router;
