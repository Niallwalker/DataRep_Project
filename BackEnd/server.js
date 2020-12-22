const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

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

app.get("/api/teams", (req, res) => {
  F1Model.find((err, data) => {
    res.json(data);
  });
});

app.get("/api/drivers", (req, res) => {
  driverModel.find((err, data) => {
    res.json(data);
  });
});

app.post('/api/drivers', (req, res)=>{
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

app.get("/api/teams/:id", (req, res) => {
  console.log(req.params.id);

  F1Model.findById(req.params.id, (error, data) => {
    res.json(data);
  });
});

app.get("/api/drivers/:id", (req, res) => {
  console.log(req.params.id);

  driverModel.findById(req.params.id, (error, data) => {
    res.json(data);
  });
});

app.post("/api/teams", (req, res) => {
  console.log("Team Registered!");
  console.log(req.body.name);
  console.log(req.body.year);
  console.log(req.body.logo);

  F1Model.create({
    name: req.body.name,
    year: req.body.year,
    logo: req.body.logo,
  });

  res.send("team added");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/*created server.js file, this stores the array of the teams and it releases it into the console log
this file lisitens on localhost 4000 and it shares information down to localhost 3000
added mongodDB connection to page and added add driver functions so that now on MongoDB 
And in the view teams and drivers pages, the added teams and drivers will appear
this file lositens on localhost 4000 and it shares information down to localhost 3000 */

