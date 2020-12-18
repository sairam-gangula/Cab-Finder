const express = require('express');
const router = express.Router();
const axios = require("axios").default;
// const { addUser} = require('../controllers/fpcontrol');
//here we take in attributes from "/register which is front end link"
router.get("/cdashboard", async (req,res)=>{
    try{
        const {ID,ststate,stcity,ststreet,endstate,endcity,endstreet,date,time,type} = req.body;
        console.log(req.body);
    }
    catch(error){
        console.error(error.message);
    }
    
}) 

module.exports = router;