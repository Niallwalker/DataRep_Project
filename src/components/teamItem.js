import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class TeamItem extends React.Component {
  render() {
    return (
      <div>
          <center>
            <row>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={this.props.team.logo} />
          <Card.Body>
            <Card.Title>{this.props.team.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{this.props.team.year}</ListGroupItem>
          </ListGroup>
        </Card></row>
        
      

        <br></br></center>
      </div>
    );
  }
}
/* created teamItem class. This class shows the info taken from the state
bootstrap card used to show off data in a stylish way. 
 */
