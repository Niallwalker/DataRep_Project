import React from "react";
import axios from 'axios';

export class UpdateDriver extends React.Component {
    constructor() {
        super();
    
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
    
        this.state = {
          strName: "",
          intDOB: "",
          strTeam: "",
          strImage: "",
        };
      }
    
      componentDidMount(){
          console.log(this.props.match.params.id);
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
    
      onSubmit(d) {
        d.preventDefault();
        alert("Driver: " + this.state.strName + " " +
          this.state.strTeam + " "
          + this.state.intDOB + " " +
          this.state.strImage);
    
          const newDriver = {
                fullname: this.state.strName,
                dob: this.state.intDOB,
                team: this.state.strTeam,
                image: this.state.strImage,
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
          <div className="App">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Driver Name: </label>
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
                <label>Date Of Birth: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.intDOB}
                  onChange={this.onChangeDob}
                ></input>
              </div>
              <div className="form-group">
                <label>Profile Pic: </label>
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
                  value="Add Driver"
                  className="btn btn-danger"
                ></input>
              </div>
            </form>
          </div>
        );
      }
    }
  