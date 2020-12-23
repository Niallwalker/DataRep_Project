import React from "react";
import { Drivers } from "./drivers";
import axios from "axios";

export class ViewDrivers extends React.Component {

  constructor(){
    super();

    this.ReloadDrivers = this.ReloadDrivers.bind(this);
  }
  state = {
    drivers: [],
  };

  componentDidMount(){
    axios.get('http://localhost:4000/api/drivers')
    .then((response) => {
    this.setState({ drivers: response.data });
    })
    .catch((error) => {
    console.log(error);
    })
    }   

    ReloadDrivers(){
      axios.get('http://localhost:4000/api/drivers')
      .then((response) => {
      this.setState({ drivers: response.data });
      })
      .catch((error) => {
      console.log(error);
      });  
    
    }

  render() {
    return (
      <div>
        <center>
        <div class="title">
        <h1>Drivers</h1>
        <Drivers f1Drivers={this.state.drivers}  ReloadDrivers={this.ReloadDrivers}></Drivers>
      </div></center></div>
    );
  }
}
/* created View drivers class to show of the drivers added
Drivers now appear on mongoDB and on my apps terminal on VS Code
Here, yous ee the drivers team, name, date of birth and an image of who they look like.
Drivers now appear on localhost 4000/api/drivers in an array as well
Date:22/12/20*/ 

