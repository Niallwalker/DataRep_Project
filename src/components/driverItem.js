import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class DriverItem extends React.Component {

  constructor(){
    super();

    this.DeleteDriver = this.DeleteDriver.bind(this);
  }

  DeleteDriver(d){
    d.preventDefault();
    console.log("Delete: "+this.props.driver._id);

    axios.delete("http://localhost:4000/api/drivers/"+this.props.driver._id)
    .then(()=>{
      this.props.ReloadDrivers();
    })
    .catch();
  }

  render() {
    return (
      <div className="card mb-3" style={{width: '60rem'}}>
   <div className="row no-gutters">
      <div className="col-md-4"> 
      <img src={this.props.driver.image} class="img-fluid" alt=""></img>
          <rect width="100%" height="100%" fill="#868e96" />
            </div>
             <div className="col-md-8"> 
             <div className="card-body"> 
             <h4 className="card-title">Name: {this.props.driver.fullname}</h4> 
             <h5 className="card-text"> Team: {this.props.driver.team} </h5> 
             <h5 className="card-text"> Date of birth: {this.props.driver.dob} </h5> 
             <h5 className="card-text"> Race Starts: {this.props.driver.start} </h5>
             <h5 className="card-text"> Poles: {this.props.driver.poles} </h5>
             <h5 className="card-text"> Race Wins: {this.props.driver.wins} </h5> 
             <h5 className="card-text"> Titles: {this.props.driver.titles} </h5>           
              <Link to={"/updateDriver/"+ this.props.driver._id} className="btn btn-warning">Update</Link>
          <Button variant="danger" onClick={this.DeleteDriver}>Delete</Button></div> </div> </div> </div> 
              
              
              ); } }
              
  

/* created DriverItem class. This class shows the info taken from the database in MongoDB and then
they appear in a stylish bootstrap card. 
Date 21/12/20

Added delete button to page
Date 22/12/20*/
