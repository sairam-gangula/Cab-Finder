const express = require('express');
var path = require('path');
var neo4j = require('neo4j-driver');
var driver = neo4j.driver('bolt://localhost',neo4j.auth.basic('neo4j','123456'));
var session = driver.session();

app.get('/register',function(req,res){
    session 
        .run('MATCH (n:VEH) RETURN n')
        .then(function(result){
            var data = [];
            result.records.forEach(function(record){
                data.push({
                    type:record._fields[0].properties.type
                })
                
            });
            res.render('index',{
                datae:data
            });
        })
        .catch(function(err){
            console.log(err);
        });
      
})