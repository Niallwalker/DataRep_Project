import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class DriverItem extends React.Component {
  render() {
    return (
      <div>
          <center>
            <row>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={this.props.driver.image} />
          <Card.Body>
            <Card.Title>{this.props.driver.fullname}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>{this.props.driver.team}</ListGroupItem>
            <ListGroupItem>{this.props.driver.dob}</ListGroupItem>
          </ListGroup>
        </Card></row>
        
      

        <br></br></center>
      </div>
    );
  }
}
/* created DriverItem class. This class shows the info taken from the database in MongoDB and then
they appear in a stylish bootstrap card. */
