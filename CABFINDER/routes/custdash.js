const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const axios = require("axios").default;
var path = require("path");
var neo4j = require("neo4j-driver");
var uuid = require("uuid");
var bodyParser = require("body-parser");
const app = express();

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// dotenv.config({ path: "./config/config.env" });
const crouter = express.Router();

// function generateID() {
//     return Math.floor(Math.random() * 100000000);
//   }
//here "/register is frontend link" 
app.use("/cdashboard",require("../pages/cdashboardc"))
app.post("/cdashboard", async (req, res) => {
    try {
      console.log("aagya bhai from cdashboard");
      const ID = uuid()
      const state = req.body.state;
      const city = req.body.city;
      const street = req.body.street;
      const date = req.body.date;
      const time = req.body.time;
      const type = req.body.type;
    
      console.log(state);
      console.log(city);
      console.log(street);
      console.log(date);
      console.log(time);
      console.log(type);
      
      //neo4j coonnection
    //   var driver = neo4j.driver("bolt://localhost",neo4j.auth.basic("neo4j", "123456"));
      var addcdetailssession = driver.session({defaultAccessMode:neo4j.session.WRITE});
    
    // CREATE(C1:CUST {name:name,Age:age,Gender:gender,Email:email,password:password,State:state,city:city})
      addcdetailssession.run("CREATE(Crode:CDETAILS {ID:$ID,state:$state,city:$city,time:$time,type:$type})",
      {ID:ID,state:state,city:city,street:street,date:date,time:time,type:type})
    }
    
    catch (error) {
      console.error(error.message);
    }
  });
  
  
  
  app.get("/",  (req, res) => {
    res.send();
  }); 
  
  module.exports = crouter;