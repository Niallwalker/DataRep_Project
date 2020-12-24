import React from "react";
import axios from 'axios';

export class AddDriver extends React.Component {
    constructor() {
      super();
  
      this.onSubmit = this.onSubmit.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeDob = this.onChangeDob.bind(this);
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
  
    onChangeDob(d) {
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
      alert("Driver: " + this.state.strName + " " +
        this.state.strTeam + " "+ 
        this.state.intDOB + " " +
        this.state.strImage + " " +
        this.state.strStart + " " +
        this.state.strPoles + " " +
        this.state.strWins + " " +
        this.state.strTitles);
  
        const newDriver = {
              fullname: this.state.strName,
              dob: this.state.intDOB,
              team: this.state.strTeam,
              image: this.state.strImage,
              starts: this.state.strStart,
              poles: this.state.strPoles,
              wins: this.state.strWins,
              titles: this.state.strTitles
          }
          axios.post('http://localhost:4000/api/drivers',newDriver)
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
          <h1>Add Driver</h1>
        <div className="App">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Driver Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.strName}
                onChange={this.onChangeName} placeholder="What is their name?"
              ></input>
            </div>
            <div className="form-group">
              <label>Team: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.strTeam}
                onChange={this.onChangeTeam} placeholder="Why do they race for?"
              ></input>
            </div>
            <div className="form-group">
              <label>Date Of Birth: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.intDOB}
                onChange={this.onChangeDob} placeholder="When were they born?"
              ></input>
            </div>
            <div className="form-group">
              <label>Race Starts: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.strStart}
                onChange={this.onChangeStarts} placeholder="How many starts have they got?"
              ></input>
            </div>
            <div className="form-group">
              <label>Pole Positions: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.strPoles}
                onChange={this.onChangePoles} placeholder="How many pole positions?"
              ></input>
            </div>
            <div className="form-group">
              <label>Race Wins: </label>
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
                onChange={this.onChangeTitles} placeholder="How many titles have they got?"
              ></input>
            </div>
            <div className="form-group">
              <label>Profile Pic: </label>
              <textarea
                type="text"
                className="form-control"
                value={this.state.strImage}
                onChange={this.onChangeImage} placeholder="Why don't you add a picture of their beautiful face"
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Driver"
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

  /* Created an addDriver form where users can add a driver real of fake to the database.
  Their info if entered correclt will appear on MongoDD and in the view Drivers Page
  as well as at localhost:4000/api/drivers
  Date 22/12/20 */