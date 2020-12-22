const express = require("express");
const f1 = express();
const port = 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

f1.use(cors());
f1.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

f1.use(bodyParser.urlencoded({ extended: false }));

f1.use(bodyParser.json());

const myConnection =
  "mongodb+srv://admin:admin@cluster0.gugut.mongodb.net/f12020?retryWrites=true&w=majority";
mongoose.connect(myConnection, { useNewUrlParser: true });

const Schema = mongoose.Schema;

var f1Schema = new Schema({
  name: String,
  year: String,
  logo: String,
});

var F1Model = mongoose.model("F1", f1Schema);

var driverSchema = new Schema({
  fullname: String,
  dob: String,
  team: String,
  image: String
});

var driverModel = mongoose.model("Drivers", driverSchema);

f1.get("/api/teams", (req, res) => {
  F1Model.find((err, data) => {
    res.json(data);
  });
});

f1.get("/api/drivers", (req, res) => {
  driverModel.find((err, data) => {
    res.json(data);
  });
});

f1.post('/api/drivers', (req, res)=>{
  console.log('Driver Registered!');
  console.log(req.body.fullname);
  console.log(req.body.dob);
  console.log(req.body.team);
  console.log(req.body.image);

  driverModel.create({
    fullname: req.body.fullname,
    dob: req.body.dob,
    image: req.body.image,
    team: req.body.team
  })

  res.send('driver added')
});

f1.get("/api/teams/:id", (req, res) => {
  console.log(req.params.id);

  F1Model.findById(req.params.id, (error, data) => {
    res.json(data);
  });
});

f1.get("/api/drivers/:id", (req, res) => {
  console.log(req.params.id);

  driverModel.findById(req.params.id, (error, data) => {
    res.json(data);
  });
});

f1.delete('/api/teams/:id',(req,res)=>{
  console.log("Delete Team: "+req.params.id);

  F1Model.findByIdAndDelete(req.params.id,(error, data)=>{
    res.send(data);
  })
})

f1.delete('/api/drivers/:id',(req,res)=>{
  console.log("Delete Driver: "+req.params.id);

  driverModel.findByIdAndDelete(req.params.id,(error, data)=>{
    res.send(data);
  })
})


f1.post("/api/teams", (req, res) => {
  console.log("Team Registered!");
  console.log(req.body.name);
  console.log(req.body.year);
  console.log(req.body.logo);

  F1Model.create({
    name: req.body.name,
    year: req.body.year,
    logo: req.body.logo,
  });

  res.send("Team added");
});

f1.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/*created server.js file, this stores the array of the teams and it releases it into the console log
this file lisitens on localhost 4000 and it shares information down to localhost 3000
added mongodDB connection to page and added add driver functions so that now on MongoDB 
And in the view teams and drivers pages, the added teams and drivers will appear
this file lositens on localhost 4000 and it shares information down to localhost 3000 

Added delete components for drivers and teams
Date 22/12/20*/

