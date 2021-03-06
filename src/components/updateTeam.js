import React from "react";
import axios from 'axios';


export class UpdateTeam extends React.Component {

  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTeam = this.onChangeTeam.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeStarts = this.onChangeStarts.bind(this);
    this.onChangeWins = this.onChangeWins.bind(this);
    this.onChangeTitles = this.onChangeTitles.bind(this);
    this.onChangeLogo = this.onChangeLogo.bind(this);

    this.state = {
      strTeam: "",
      intFormedYear: "",
      strTeamBadge: "",
      strStarts: "",
      strWins: "",
      strTitles: "",
    };
  }

  componentDidMount(){
    console.log(this.props.match.params.id);

    axios.get('http://localhost:4000/api/teams/'+this.props.match.params.id)
    .then(response =>{
        this.setState({
            _id:response.data._id,
            strTeam:response.data.name,
            intFormedYear:response.data.year,
            strStarts:response.data.starts,
            strWins:response.data.wins,
            strTitles:response.data.titles,
            strTeamBadge:response.data.logo
        })
    })
    .catch((error)=>{
        console.log(error);
    });
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

  onChangeStarts(t) {
    this.setState({
      strStarts: t.target.value,
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

  onSubmit(t) {
    t.preventDefault();
    alert("Team: " + this.state.strTeam + " "
      + this.state.intFormedYear + " " +
      this.state.strTeamBadge + " " +
      this.state.strStarts + " " +
      this.state.strWins + " " +
      this.state.strTitles);

      const newTeam = {
            name: this.state.strTeam,
            year: this.state.intFormedYear,
            logo: this.state.strTeamBadge,
            starts: this.state.strStarts,
            wins: this.state.strWins,
            titles: this.state.strTitles,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/teams/'+this.state._id, newTeam)
        .then(res =>{
            console.log(res.data)
        })
        .catch();
  }

  render() {
    return (
      <center>
      <div class="updateStyle">
        <h1>Update Team</h1>
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
            <label>Starts: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strStarts}
              onChange={this.onChangeStarts}
            ></input>
          </div>
          <div className="form-group">
            <label>Wins: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strWins}
              onChange={this.onChangeWins}
            ></input>
          </div>
          <div className="form-group">
            <label>Titles: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strTitles}
              onChange={this.onChangeTitles}
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
              value="Update Team"
              className="btn btn-warning"
            ></input>
          </div>
        </form>
      </div>
      </div>
      </center>
    );
  }
}

/* Created the update team class which I made on the 23/12/20
I added a border around it to make it look a lot mnore stylish 
things availabe to update are the image, name, year fromed, race starts,
wins and titles

I also added an update race starts to the page so that it can give the user more information
Date 30/12/20 */