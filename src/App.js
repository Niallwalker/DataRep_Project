import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, Form, FormControl, Button}from 'react-bootstrap';
import { Add } from "./components/add";
import { View } from "./components/view";
import { Content } from "./components/content";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AddDriver } from "./components/addDriver";
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
        alt="https://www.formula1.com/"
        src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png"
        width="100"
        height="25"
        className="d-inline-block align-top"
      />{' '}
      Formula 1
    </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/view">Teams</Nav.Link>
            <Nav.Link href="/viewDrivers">Drivers</Nav.Link>
            <Nav.Link href="/add">Add Team</Nav.Link>
            <Nav.Link href="/addDriver">Add Driver</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar>
        </div>
        <br></br>
        <Switch>
          <Route path='/' component={Content} exact/>
          <Route path='/view' component={View} exact/>
          <Route path='/viewDrivers' component={ViewDrivers} exact/>
          <Route path='/add' component={Add} exact/>
          <Route path='/addDriver' component={AddDriver} exact/>
          <Route path='/updateTeam/:id' component={UpdateTeam} exact/>
          <Route path='/updateDriver/:id' component={UpdateDriver} exact/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

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
<img src={logo} className="App-logo" alt="logo" />