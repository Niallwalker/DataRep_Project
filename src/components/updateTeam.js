import React from "react";
import axios from 'axios';


export class UpdateTeam extends React.Component {

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

  componentDidMount(){
    console.log(this.props.match.params.id);

    axios.get('http://localhost:4000/api/teams/'+this.props.match.params.id)
    .then(response =>{
        this.setState({
            _id:response.data._id,
            strTeam:response.data.name,
            intFormedYear:response.data.year,
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

  onSubmit(t) {
    t.preventDefault();
    alert("Team: " + this.state.strTeam + " "
      + this.state.intFormedYear + " " +
      this.state.strTeamBadge);

      const newTeam = {
            name: this.state.strTeam,
            year: this.state.intFormedYear,
            logo: this.state.strTeamBadge,
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
              value="Update Team"
              className="btn btn-danger"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}