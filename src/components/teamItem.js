import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
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
      <div class="col-lg-6 mb-4"> 
              <Card border="danger" style={{ width: "30rem" }}>
          <Card.Img variant="top" src={this.props.team.logo} />
          <Card.Body>
            <Card.Title>{this.props.team.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>Year Formed: {this.props.team.year}</ListGroupItem>
          <ListGroupItem>Wins: {this.props.team.wins}</ListGroupItem>
          <ListGroupItem>Titles: {this.props.team.titles}</ListGroupItem>
          </ListGroup>
          <Link to={"/updateTeam/"+ this.props.team._id} className="btn btn-warning">Update</Link>
          <Button variant="danger" onClick={this.DeleteTeam}>Delete</Button>
        </Card><br></br>
    </div>
    );
  }
}
/* created teamItem class. This class shows the info taken from the state
bootstrap card used to show off data in a stylish way. 
 
Added delete button to page
Date 22/12/20*/

