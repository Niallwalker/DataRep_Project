import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, Form, FormControl, Button}from 'react-bootstrap';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Content } from "./components/content";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
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
            <Nav.Link href="/view">View</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
            <Nav.Link href="/remove">Remove</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar>

        <br></br>
        <Switch>
          <Route path='/' component={Content} exact/>
          <Route path='/view' component={Header} exact/>
          <Route path='/remove' component={Footer} exact/>
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
<img src={logo} className="App-logo" alt="logo" />