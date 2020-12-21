import React from "react";
import { Teams } from "./teams";
import axios from "axios";

export class View extends React.Component {
  state = {
    teams: [],
  };

  componentDidMount(){
    axios.get('http://localhost:4000/api/teams')
    .then((response) => {
    this.setState({ teams: response.data.teams });
    })
    .catch((error) => {
    console.log(error);
    })
    }
    

  render() {
    return (
      <div>
        <h1>Teams</h1>
        <Teams f1Teams={this.state.teams}></Teams>
      </div>
    );
  }
}
/* created View class to show of footer in app
created components folder and placed View file in it
Added team state from F1 Api online
added f1Teams JSX
Date:20/12/21 
(API To use at later stage)
https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4370*/
