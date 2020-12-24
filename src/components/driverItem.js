import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
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
    
        <Container>
            <row>
            <Col><Card border="danger" style={{ width: "30rem" }}>
          <Card.Img variant="top" src={this.props.driver.image} />
          <Card.Body>
            <Card.Title>{this.props.driver.fullname}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>Team: {this.props.driver.team}</ListGroupItem>
          <ListGroupItem>Age: {this.props.driver.dob}</ListGroupItem>
          <ListGroupItem>Starts: {this.props.driver.starts}</ListGroupItem>
          <ListGroupItem>Poles: {this.props.driver.poles}</ListGroupItem>
          <ListGroupItem>Wins: {this.props.driver.wins}</ListGroupItem>
          <ListGroupItem>Titles: {this.props.driver.titles}</ListGroupItem>
          </ListGroup>
          <Link to={"/updateDriver/"+ this.props.driver._id} className="btn btn-warning">Update</Link>
          <Button variant="danger" onClick={this.DeleteDriver}>Delete</Button>
        </Card></Col>
        <br></br>
        </row>
       </Container>  
    );
  }
}
/* created DriverItem class. This class shows the info taken from the database in MongoDB and then
they appear in a stylish bootstrap card. 
Date 21/12/20

Added delete button to page
Date 22/12/20*/
