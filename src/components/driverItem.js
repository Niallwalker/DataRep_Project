import React from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export class DriverItem extends React.Component {
  constructor() {
    super();

    this.DeleteDriver = this.DeleteDriver.bind(this);
  }

  DeleteDriver(d) {
    d.preventDefault();
    console.log("Delete: " + this.props.driver._id);

    axios
      .delete("http://localhost:4000/api/drivers/" + this.props.driver._id)
      .then(() => {
        this.props.ReloadDrivers();
      })
      .catch();
  }

  render() {
    return (
      <Card border="danger" style={{ width: "60%" }}>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props.driver.image} class="img-fluid" alt=""></img>
              <rect width="80%" height="80%" fill="#868e96" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">
                  Name: {this.props.driver.fullname}
                </h4>
                <h5 className="card-text"> Team: {this.props.driver.team} </h5>
                <h5 className="card-text">
                  {" "}
                  Date of birth: {this.props.driver.dob}{" "}
                </h5>
                <h5 className="card-text">
                  {" "}
                  Race Starts: {this.props.driver.starts}{" "}
                </h5>
                <h5 className="card-text">
                  {" "}
                  Poles: {this.props.driver.poles}{" "}
                </h5>
                <h5 className="card-text">
                  {" "}
                  Race Wins: {this.props.driver.wins}{" "}
                </h5>
                <h5 className="card-text">
                  {" "}
                  Titles: {this.props.driver.titles}{" "}
                </h5>
              </div>
            </div>
          </div>
          <br></br>
          <Link
            to={"/updateDriver/" + this.props.driver._id}
            className="btn btn-warning"
          >
            Update
          </Link>
          <Button variant="danger" onClick={this.DeleteDriver}>
            Delete
          </Button>
        </div>
      </Card>
    );
  }
}

/* created DriverItem class. This class shows the info taken from the database in MongoDB and then
they appear in a stylish bootstrap card. 
Date 21/12/20

Added delete button to page
Date 22/12/20

Added a new style of card for a more compact feel. I also added a small border around the car element
Date 28/12/20*/

