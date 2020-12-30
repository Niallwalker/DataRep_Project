import React from "react";
import axios from 'axios';


export class UpdateDriver extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName= this.onChangeName.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeTeam = this.onChangeTeam.bind(this);
    this.onChangeStarts = this.onChangeStarts.bind(this);
    this.onChangePoles = this.onChangePoles.bind(this);
    this.onChangeWins = this.onChangeWins.bind(this);
    this.onChangeTitles = this.onChangeTitles.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);

    this.state = {
       strName: "",
        intDOB: "",
        strTeam: "",
        strImage: "",
        strStart: "",
        strPoles: "",
        strWins: "",
        strTitles: "",
    };
  }

  componentDidMount(){
    console.log(this.props.match.params.id);

    axios.get('http://localhost:4000/api/drivers/'+this.props.match.params.id)
    .then(response =>{
        this.setState({
            _id:response.data._id,
            strName:response.data.fullname,
            intDOB:response.data.dob,
            strTeam:response.data.team,
            strStart:response.data.starts,
            strPoles:response.data.poles,
            strWins:response.data.wins,
            strTitles:response.data.titles,
            strImage:response.data.image
        })
    })
    .catch((error)=>{
        console.log(error);
    });
 }

 onChangeName(d) {
  this.setState({
    strName: d.target.value,
  });
}

  onChangeTeam(d) {
    this.setState({
      strTeam: d.target.value,
    });
  }

  onChangeDOB(d) {
    this.setState({
      intDOB: d.target.value,
    });
  }

  onChangeImage(d) {
    this.setState({
      strImage: d.target.value,
    });
  }

  onChangeStarts(d) {
    this.setState({
      strStart: d.target.value,
    });
  }

  onChangePoles(d) {
    this.setState({
      strPoles: d.target.value,
    });
  }

  onChangeWins(d) {
    this.setState({
      strWins: d.target.value,
    });
  }

  onChangeTitles(d) {
    this.setState({
      strTitles: d.target.value,
    });
  }

  onSubmit(d) {
    d.preventDefault();
    alert("Team: " + this.state.strName + " "
      + this.state.intDOB + " " +
      this.state.strStart + " " +
      this.state.strPoles + " " +
      this.state.strWins + " " +
      this.state.strTitles + " " +
      this.state.strImage);

      const newDriver = {
            fullname: this.state.strName,
            team: this.state.strTeam,
            dob: this.state.intDOB,
            image: this.state.strImage,
            starts: this.state.strStart,
            poles: this.state.strPoles,
            wins: this.state.strWins,
            titles: this.state.strTitles,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/drivers/'+this.state._id, newDriver)
        .then(res =>{
            console.log(res.data)
        })
        .catch();
  }

  render() {
    return (
      <center>
      <div class="updateStyle">
      <h1>Update Driver</h1>
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strName}
              onChange={this.onChangeName}
            ></input>
          </div>
          <div className="form-group">
            <label>Team: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strTeam}
              onChange={this.onChangeTeam}
            ></input>
          </div>
          <div className="form-group">
            <label>Date of Birth: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.intDOB}
              onChange={this.onChangeDOB}
            ></input>
          </div>
          <div className="form-group">
            <label>Starts: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strStart}
              onChange={this.onChangeStarts}
            ></input>
          </div>
          <div className="form-group">
            <label>Poles: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.strPoles}
              onChange={this.onChangePoles}
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
              value={this.state.strImage}
              onChange={this.onChangeImage}
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

/* Created the update driver class which I made on the 23/12/20
I added a border around it to make it look a lot mnore stylish 
things availabe to update are the image, name, team ,dob, race starts,
wins and titles
Date 30/12/20 */