import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class TeamItem extends React.Component {
  render() {
    return (
      <div>
          <center>
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={this.props.team.url} />
          <Card.Body>
            <Card.Title>{this.props.team.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{this.props.team.nationality}</ListGroupItem>
          </ListGroup>
        </Card>
        <br></br></center>
      </div>
    );
  }
}
/* created teamItem class. This class shows the info taken from the state
bootstrap card used to show off data in a stylish way. 
 */
