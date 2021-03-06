import React from "react";
// Imported Component from React Bootstrap
import {Button,Card} from 'react-bootstrap';
import axios from 'axios';
// Imported Link from React Router
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
     
      <Card border="danger" style={{ width: '50%' }}>
      <div className="card mb-3" >
      <div className="row no-gutters">
         <div className="col-md-4"> 
         <img src={this.props.team.logo} style={{ width: "75%" }} class="img-fluid" alt="" />
             <rect width="80%" height="80%" fill="#868e96" />
               </div>
                <div className="col-md-8"> 
                <div className="card-body"> 
                <h5 className="card-text"> Team Name: {this.props.team.name} </h5> 
                <h5 className="card-text"> Year Formed: {this.props.team.year} </h5> 
                <h5 className="card-text"> Race Starts: {this.props.team.starts} </h5> 
                <h5 className="card-text"> Race Wins: {this.props.team.wins} </h5> 
                <h5 className="card-text"> Titles: {this.props.team.titles} </h5>   
                </div></div></div>
          <Link to={"/updateTeam/"+ this.props.team._id} className="btn btn-warning">Update</Link>
          <Button variant="danger" onClick={this.DeleteTeam}>Delete</Button></div>
          </Card>
    );
  }
}
/* created teamItem class. This class shows the info taken from the state
bootstrap card used to show off data in a stylish way. 
 
Added delete button to page
Date: 22/12/20

Added new card layout, same as the driver page 
Date: 28/12/20

Added race starts inm the team array
Date: 30/12/20 */

