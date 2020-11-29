import React, { Component } from "react";
import DynamicTable from "./Table";

export default class GradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.updateTable = this.updateTable.bind(this);
    this.state = {
      keys: ["course_id", "name", "credits", "grade"],
    };
  }

  updateTable() {
    console.log("Calling updatTable form GradeTable", this.props.isLoading);
    this.props.onUpdateTable("GradeTable update called");
  }

  componentDidMount() {
    console.log("props", this.props);
    this.updateTable();
  }

  render() {
    return this.props.isLoading ||
      this.props.data == undefined ||
      this.props.data.length == 0 ? (
      <h3 className="mt-5">Grades not updated yet</h3>
    ) : (
      <div className="component mt-5 col-md-offset-2">
        <DynamicTable data={this.props.data} keys={this.state.keys} />
      </div>
    );
  }
}
