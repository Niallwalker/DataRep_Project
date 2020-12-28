import React from "react";
import axios from 'axios';

export class AddTeam extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTeam = this.onChangeTeam.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeWins = this.onChangeWins.bind(this);
    this.onChangeTitles = this.onChangeTitles.bind(this);
    this.onChangeLogo = this.onChangeLogo.bind(this);

    this.state = {
      strTeam: "",
      intFormedYear: "",
      strTeamBadge: "",
      strWins: "",
      strTitles: "",
    };
  }

  onChangeTeam(t) {
    this.setState({
      strTeam: t.target.value,
    });
  }

  onChangeYear(t) {
    this.setState({
      intFormedYear: t.target.value,
    });
  }

  onChangeWins(t) {
    this.setState({
      strWins: t.target.value,
    });
  }

  onChangeTitles(t) {
    this.setState({
      strTitles: t.target.value,
    });
  }

  onChangeLogo(t) {
    this.setState({
      strTeamBadge: t.target.value,
    });
  }

  onSubmit(t) {
    t.preventDefault();
    alert("Team: " + this.state.strTeam + " "
      + this.state.intFormedYear + " " +
      this.state.strWins + " " +
      this.state.strTitles + " " +
      this.state.strTeamBadge);

      const newTeam = {
            name: this.state.strTeam,
            year: this.state.intFormedYear,
            wins: this.state.strWins,
            titles: this.state.strTitles,
            logo: this.state.strTeamBadge
        }
        axios.post('http://localhost:4000/api/teams',newTeam)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
  }

  render() {
    return (
      <center>
        <div class="formStyle">
      <div class="title">
        <h1>Add Team</h1>
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Team Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strTeam}
              onChange={this.onChangeTeam} placeholder="What the team name?"
            ></input>
          </div>
          <div className="form-group">
            <label>Year Formed: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.intFormedYear}
              onChange={this.onChangeYear} placeholder="When was it formed"
            ></input>
          </div>
          <div className="form-group">
            <label>Wins: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strWins}
              onChange={this.onChangeWins} placeholder="How many race wins?"
            ></input>
          </div>
          <div className="form-group">
            <label>Titles: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strTitles}
              onChange={this.onChangeTitles} placeholder="How many titles?"
            ></input>
          </div>
          <div className="form-group">
            <label>Team Logo: </label>
            <textarea
              type="text"
              className="form-control"
              value={this.state.strTeamBadge}
              onChange={this.onChangeLogo} placeholder="What is their logo?"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Team"
              className="btn btn-danger"
            ></input>
          </div>
        </form>
      </div>
      </div>
      </div>
      </center>
    );
  }
}
/* created add class to show of add class in app
created components folder and placed add file in it 
Date 21/12/10
added a form from reactjs and constructor. Here users will be able to create teams and add them to the DB

Info now appears in terminal and in an array called f1 on MongoDB
Date: 22/12/20*/
