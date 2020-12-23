import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class TeamItem extends React.Component {

  constructor(){
    super();

    this.DeleteTeam = this.DeleteTeam.bind(this);
  }

  DeleteTeam(t){
    t.preventDefault();
    console.log("Delete: "+this.props.team._id);

    axios.delete("http://localhost:4000/api/teams/"+this.props.team._id)
    .then(()=>{
      this.props.ReloadTeams();
    })
    .catch();
  }

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
          <Link to={"/updateTeam/"+ this.props.team._id} className="btn btn-warning">Update</Link>
          <Button variant="danger" onClick={this.DeleteTeam}>Delete</Button>
        </Card></row>
        
        <br></br></center>
      </div>
    );
  }
}
/* created teamItem class. This class shows the info taken from the state
bootstrap card used to show off data in a stylish way. 
 
Added delete button to page
Date 22/12/20*/

