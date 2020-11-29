import React, { Component } from "react";
import axios from "axios";
import RegTable from "./regTable";

class RegCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };

    this.updateTable = this.updateTable.bind(this);
  }

  updateTable() {
    axios({
      method: "get",
      url: "http://localhost:8000/opt_courses",
    }).then(
      (response) => {
        console.log("Success: ", response);
        this.setState({
          data: response.data,
          isLoading: false,
        });
        console.log(this.state.data);
      },
      (error) => {
        console.log("Error: ", error);
      }
    );

    console.log("Courses: ", this.state.data);
  }

  async componentDidMount() {
    console.log("course reg mounted", this.state.data);
    this.updateTable("course reg did mount");
  }

  render() {
    return (
      <div className="App">
        {/* <Main /> */}
        <div
          className="title mt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h5>
            <u>Alloted Courses</u>
          </h5>
        </div>
        <RegTable
          data={this.state.data}
          onUpdateTable={() => this.updateTable()}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default RegCourses;
