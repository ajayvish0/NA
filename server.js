const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/index.html");
  
// });

//  app.get("/contact",function(req,res){
//     console.log(req);
//  });

 
app.get("/", async function(req,res){
    res.render("h");
})
app.get("/h", async function(req,res){
    res.render("h");
})

app.post("/",async function(req,res){
    res.render("success");
})

//  app.post("/success",function(req,res){
//    res.sendFile(__dirname+"/success.html");
//    console.log(req.body);
//  })

 

app.listen(3000, function () {
    console.log("server is running on port 3000");
});
