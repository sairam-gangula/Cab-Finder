// const express = require('express');
// var path = require('path');
// var neo4j = require('neo4j-driver');
// var driver = neo4j.driver('bolt://localhost',neo4j.auth.basic('neo4j','123456'));

// const app = express();

// //get all frontpage details
// //route is  GET 
// // exports.Login = (req,res,next) =>{
// //     res.send('Get frontpage details')
// // }

// //POST all frontpage details from register page
// //route is  GET  
// const router = express.Router();
// // const { addUser} = require('');
// // router
// //     .route('/').post(addUser)    



// app.use("/register", require("../routes/register"));
// app.get("/register",(req,res)=>{
//     res.send();
// })

// app.post("/Login", async (req, res) => {
//   try {
//     // console.log("aagya bhai");
//     const name = req.body.name;
//     const contact = req.body.contact;
//     const age = req.body.age;
//     const gender = req.body.gender;
//     const email = req.body.email;
//     const password = req.body.password;
//     const state = req.body.state;
//     const city = req.body.city;
//     const street = req.body.street;
//     let newEntry;

//     var session = driver.session();

//     app.get("/", function (req, res) {
//       session
//         .run("CREATE(C1:CUST {name:name,Age:age,Gender:gender,Email:email,password:password,State:state,city:city})",[name,contact,age,gender,email,password,state,city,street])
//         .then(function (result) {
//           var data = [];
//           result.records.forEach(function (record) {
//             data.push({
//               type: record._fields[0].properties.type,
//             });
//           });
//           res.render("index", {
//             datae: data,
//           });
//         })
//         .catch(function (err) {
//           console.log(err);
//         });
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// });

