import React, { Component } from "react";
import axios from "axios";
import GradeTable from "./gradeTable";

class GradeReport extends Component {
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
      url: "http://localhost:8000/opt_grades",
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

    console.log("Grades: ", this.state.data);
  }

  async componentDidMount() {
    console.log("grades mounted", this.state.data);
    this.updateTable("grades did mount");
  }

  render() {
    return (
      <div className="App">
        <div
          className="title mt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h5>
            <u>Grade Report</u>
          </h5>
        </div>
        <GradeTable
          data={this.state.data}
          onUpdateTable={() => this.updateTable()}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default GradeReport;
