
const express = require('express');
const app = express();
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.get('/api/teams', (req, res)=>{

    const myteams =[
            {
            "strTeam":"Alfa Romeo Racing",
            "intFormedYear":"1950",
            "strLeague":"Formula 1",
            "strCountry":"Switzerland",
            "strTeamBadge":"https:\/\/www.thesportsdb.com\/images\/media\/team\/badge\/jh76wn1575237510.png"
            },
            {
              "strTeam":"Ferrari",
              "intFormedYear":"1947",
              "strLeague":"Formula 1",
              "strCountry":"Italy",
              "strTeamBadge":"https:\/\/www.thesportsdb.com\/images\/media\/team\/badge\/rxwsqv1420417429.png"
            }
    ];
res.status(200).json({
      "message": "Everything is sound",
      teams:myteams
    })
})

app.post('/api/teams', (req, res)=>{
  console.log('Team Registered!');
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.year);
  console.log(req.body.logo);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//created server.js file, this stores the array of the teams and it releases it into the console log 
//this file lositens on localhost 4000 and it shares information down to localhost 3000