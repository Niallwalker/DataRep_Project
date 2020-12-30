import React from "react";
// Imported Teams
import { Teams } from "./teams";
// Imported Search Component
import  Search  from "./search";
import axios from "axios";

export class ViewTeams extends React.Component {

  constructor(){
    super();

    this.ReloadTeams = this.ReloadTeams.bind(this);
  }
  state = {
    teams: [],
    searchTeam: ''
  };

  handleInput = t => {
    this.setState({ searchTeam: t.target.value });
  };


  componentDidMount(){
    axios.get('http://localhost:4000/api/teams')
    .then((response) => {
    this.setState({ teams: response.data });
    })
    .catch((error) => {
    console.log(error);
    });
    }   

ReloadTeams(){
  axios.get('http://localhost:4000/api/teams')
  .then((response) => {
  this.setState({ teams: response.data });
  })
  .catch((error) => {
  console.log(error);
  });  

}

  render() {
    let filteredTeam = this.state.teams.filter(team=> {
      return team.name.toLowerCase().includes(this.state.searchTeam.toLowerCase());
    });
    return (
      <div>
        <center>
        <div class="title">
        <h1>Teams</h1></div>
        <Search handleInput={this.handleInput} />
        <Teams f1Teams={this.state.teams && filteredTeam} ReloadTeams={this.ReloadTeams}></Teams>
      </center></div>
    );
  }
}
/* created View class to show of footer in app
created components folder and placed View file in it
Added team state from F1 Api online
added f1Teams JSX
Date:20/12/20 
(API To used at a later stage)
https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4370*/

/*Teams now appear on mongoDB and on my apps terminal on VS Code when added
Here, you see the teams name logo and year formed.
Teams now appear on localhost 4000/api/teams in an array as well
They can also be searched via ID
Date:22/12/20

Added search bar component to the page. Here the user can search fro the team they want by typing in their team name
Date: 30/12/20*/
