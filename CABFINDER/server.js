const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const axios = require("axios").default;
var path = require("path");
var neo4j = require("neo4j-driver");
const cors = require("cors");
// const https = require('https');
// var uuid = require("uuid");
const app = express();
app.use(cors());

// var logger = require('logger');
var bodyParser = require("body-parser");
const { url } = require("inspector");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
dotenv.config({ path: "./config/config.env" });

const router = express.Router();
const PORT = process.env.PORT || 5000;

//here "/register is frontend link"
app.use("/register", require("./pages/cregister"));
//i have no clue what is this

//this is http post request from front end link to the backend
app.post("/register", async (req, res) => {
  try {
    // console.log("aagya bhai");
    const name = req.body.name;
    const contact = req.body.contact;
    const age = req.body.age;
    const gender = req.body.gender;
    const email = req.body.email;
    const password = req.body.password;
    const state = req.body.state;
    const city = req.body.city;
    const street = req.body.street;
    console.log(name);
    console.log(contact);
    console.log(age);
    console.log(gender);
    console.log(email);
    console.log(password);
    console.log(state);
    console.log(city);
    console.log(street);

    //neo4j coonnection
    var driver = neo4j.driver(
      "bolt://localhost",
      neo4j.auth.basic("neo4j", "123456")
    );
    var addsession = driver.session({ defaultAccessMode: neo4j.session.WRITE });
    //regestering the customer
    // CREATE(C1:CUST {name:name,Age:age,Gender:gender,Email:email,password:password,State:state,city:city})
    addsession.run(
      "CREATE(C1:CUST {name:$name,contact:$contact,Age:$age,Gender:$gender,Email:$email,password:$password,State:$state,city:$city,street:$street})",
      {
        name: name,
        contact: contact,
        age: age,
        gender: gender,
        email: email,
        password: password,
        state: state,
        city: city,
        street: street,
      }
    );
    // .then(resultgraph=>{
    //   console.log(resultgraph.records._fields);
    // }
  } catch (error) {
    console.error(error.message);
  }
});

//searchng for cabs
app.use("/cdashboard", require("./pages/cdashboardc"));
app.post("/cdashboard", async (req, res) => {
  try {
    // console.log("aagya bhai from cdashboard");
    // const ID = uuid()
    const ID = Math.floor(1000 + Math.random() * 9000);
    const ststate = req.body.ststate;
    const stcity = req.body.stcity;
    const ststreet = req.body.ststreet;
    const endstate = req.body.endstate;
    const endcity = req.body.endcity;
    const endstreet = req.body.endstreet;
    const date = req.body.date;
    const time = req.body.time;
    const type = req.body.type;

    console.log(ID);
    console.log(ststate);
    console.log(stcity);
    console.log(ststreet);
    console.log(endstate);
    console.log(endcity);
    console.log(endstreet);
    console.log(date);
    console.log(time);
    console.log(type);
    //start coordinates
    let url =
      "  https://us1.locationiq.com/v1/search.php?key=pk.f4b82f67dc7185ac3f7d25a4afb338b3&q=" +
      ststate.split(" ").join("%20") +
      ",%20" +
      stcity.split(" ").join("%20") +
      ",%20" +
      ststreet.split(" ").join("%20") +
      ",%20" +
      "&format=json";
    console.log(url);

    const l = await axios
      .get(url)
      .then((res) => {
        console.log(res.data[0].lat);
        console.log(res.data[0].lon);
        return res.data[0];
      })

      .catch((error) => {
        console.error(error.message);
      });
    const lat = l.lat;
    const lon = l.lon;
    console.log("latitude:",lat);
    console.log("longitude:",lon);

    //end coordinates
    let eurl =
      "  https://us1.locationiq.com/v1/search.php?key=pk.f4b82f67dc7185ac3f7d25a4afb338b3&q=" +
      endstate.split(" ").join("%20") +
      ",%20" +
      endcity.split(" ").join("%20") +
      ",%20" +
      endstreet.split(" ").join("%20") +
      ",%20" +
      "&format=json";
    console.log(eurl);
    const el = await axios
      .get(url)
      .then((res) => {
        console.log("latitude:",res.data[0].lat);
        console.log(res.data[0].lon);
        return res.data[0];
      })
      .catch((error) => {
        console.error(error.message);
      });
      
    const elat = el.lat;
    const elon = el.lon;
    console.log("latitude:",elat);
    console.log("longitude:",elon);

    //neo4j coonnection
    var driver = neo4j.driver(
      "bolt://localhost",
      neo4j.auth.basic("neo4j", "123456")
    );
    var addcdetailssession = driver.session({
      defaultAccessMode: neo4j.session.WRITE,
    });

    // CREATE(C1:CUST {name:name,Age:age,Gender:gender,Email:email,password:password,State:state,city:city})
    addcdetailssession.run(
      "CREATE(Crode:CDETAILS {ID:$ID,ststate:$ststate,stcity:$stcity,ststreet:$ststreet,endstate:$endstate,endcity:$endcity,endstreet:$endstreet,time:$time,type:$type,date:$date,lat:$lat,lon:$lon,elat:$elat,elon:$elon})",
      {
        ID: ID,
        ststate: ststate,
        stcity: stcity,
        ststreet: ststreet,
        endstate: endstate,
        endcity: endcity,
        endstreet: endstreet,
        date: date,
        time: time,
        type: type,
        lat:lat,
        lon:lon,
        elat:elat,
        elon:elon
      }
    );
  } catch (error) {
    console.error(error.message);
  }
});

var driver = neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "123456")
);
var giveridedetails = driver.session({ defaultAccessMode: neo4j.session.READ });

//printing ride history
// app.use("/cdasboard",require("./pages/cdashboardc"))
app.get("/crides", async (req, res) => {
  // console.log("chalaya gaya bhai to ride history");

  const rider = await giveridedetails.run("match (n:CDETAILS) return n");
  console.log("here")
  console.log(rider.records[1]._fields[0].properties)
  res.json(rider.records[1]._fields[0].properties);
});

//get coordinates
var getcoord = driver.session({ defaultAccessMode: neo4j.session.READ });
app.get("/coordinate", async (req, res) => {
  // console.log("chalaya gaya bhai to ride history");

  const cod = await getcoord.run("match(n:CDETAILS) RETURN n");
  console.log("herecod")
  console.log(cod.records[0]._fields[0].properties);
  res.json(cod.records[0]._fields[0].properties);
});

//best driver
var getbest = driver.session({ defaultAccessMode: neo4j.session.READ });
app.get("/bestdriver", async (req, res) => {
  // console.log("chalaya gaya bhai to ride history");

  const cod = await getbest.run("match (n:Mapdata) where n.Rating=5 return n");
  console.log("best driver:")
  console.log(cod.records[0]._fields[0].properties);
  res.json(cod.records[0]._fields[0].properties);
});



app.get("/", (req, res) => {
  res.send();
});

app.listen(
  PORT,
  console.log(
    `Server is running on ${process.env.NODE_ENV}mode on port ${PORT}`.yellow
      .bold
  )
);


module.exports = app;
