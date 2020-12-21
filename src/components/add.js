import React from "react";
import axios from 'axios';

export class Add extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTeam = this.onChangeTeam.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeLogo = this.onChangeLogo.bind(this);

    this.state = {
      strTeam: "",
      intFormedYear: "",
      strTeamBadge: "",
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

  onChangeLogo(t) {
    this.setState({
      strTeamBadge: t.target.value,
    });
  }

  onSubmit(t) {
    t.preventDefault();
    alert("Team: " + this.state.strTeam + " "
      + this.state.intFormedYear + " " +
      this.state.strTeamBadge);

      const newTeam = {
            name: this.state.strTeam,
            year: this.state.intFormedYear,
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
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Team Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strTeam}
              onChange={this.onChangeTeam}
            ></input>
          </div>
          <div className="form-group">
            <label>Year Formed: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.intFormedYear}
              onChange={this.onChangeYear}
            ></input>
          </div>
          <div className="form-group">
            <label>Team Logo: </label>
            <textarea
              type="text"
              className="form-control"
              value={this.state.strTeamBadge}
              onChange={this.onChangeLogo}
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
    );
  }
}
/* created add class to show of add class in app
created components folder and placed add file in it 
Date 21/12/10
added a form from reactjs and constructor. Here users will be able to create teams and add them to the DB*/
