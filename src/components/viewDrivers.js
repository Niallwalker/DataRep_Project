import React from "react";
// Imported Drivers component
import { Drivers } from "./drivers";
// Imported Search Component
import  Search  from "./search";
import axios from "axios";

export class ViewDrivers extends React.Component {

  constructor(){
    super();

    this.ReloadDrivers = this.ReloadDrivers.bind(this);
  }
  state = {
    drivers: [],
    searchDriver: ''
  };

  handleInput = d => {
    this.setState({ searchDriver: d.target.value });
  };

  componentDidMount(){
    axios.get('http://localhost:4000/api/drivers')
    .then((response) => {
    this.setState({ drivers: response.data });
    })
    .catch((error) => {
    console.log(error);
    });
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
    let filteredDrivers = this.state.drivers.filter(driver=> {
      return driver.fullname.toLowerCase().includes(this.state.searchDriver.toLowerCase());
    });
    return (
        
        <center>
        <div class="title">
        <h1>Drivers</h1></div>
        <Search handleInput={this.handleInput} />
        <Drivers f1Drivers={this.state.drivers && filteredDrivers}  ReloadDrivers={this.ReloadDrivers}></Drivers>
        
 
        </center>
        
    );
  }
}

/* created View drivers class to show of the drivers added
Drivers now appear on mongoDB and on my apps terminal on VS Code
Here, yous ee the drivers team, name, date of birth and an image of who they look like.
Drivers now appear on localhost 4000/api/drivers in an array as well
Date:22/12/20

Added search bar component to the page. Here the user can search fro the driver they want by typing in their name
This allows for a more seemless flow and it makes the page way easier to navigate through 
Date: 30/12/20*/

