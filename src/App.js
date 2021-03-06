import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Imported Component from React Bootstrap
import { Navbar, Nav } from "react-bootstrap";
// Imported Router from React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// All imported Components
import { Add } from "./components/add";
import { AddTeam } from "./components/addTeam";
import { AddDriver } from "./components/addDriver";
import { ViewTeams } from "./components/viewTeams";
import { Home } from "./components/home";
import { ViewDrivers } from "./components/viewDrivers";
import { UpdateTeam } from "./components/updateTeam";
import { UpdateDriver } from "./components/updateDriver";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="title">
          <div className="App">
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png"
                  width="100"
                  height="25"
                  className="d-inline-block align-top"
                />{" "}
                Formula 1
              </Navbar.Brand>
              <Nav>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/viewTeams">Teams</Nav.Link>
                  <Nav.Link href="/viewDrivers">Drivers</Nav.Link>
                  <Nav.Link href="/add">Create</Nav.Link>
              </Nav>
            </Navbar>
          </div>
          <br></br>

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/viewTeams" component={ViewTeams} exact />
            <Route path="/viewDrivers" component={ViewDrivers} exact />
            <Route path="/add" component={Add} exact />
            <Route path="/addTeam" component={AddTeam} exact />
            <Route path="/addDriver" component={AddDriver} exact />
            <Route path="/updateTeam/:id" component={UpdateTeam} exact />
            <Route path="/updateDriver/:id" component={UpdateDriver} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

<img src={logo} className="App-logo" alt="logo" />;
/*Clock added and simple H1 tag.
App function changed to App class
added rneder method to wrap return 
imported bootstrap css file
Added a navbar with search bar and logo

Installed Router Dom and added switch & route
Date: 20/12/20 */

/*Added read and creat components known as view and add
Date: 21/12/20*/

/*Added add driver and view drivers to the navbar and added their appropriate paths.  
Date: 22/12/20*/

/*Added a video section underneath text and replaced add teams and drivers with just add for a simplier look  
Date: 28/12/20

Renamed page to home so that it was easy to establish what it it
31/12/20*/
