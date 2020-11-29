import React, { Component } from "react";
import DynamicTable from "./Table";

export default class RegTable extends React.Component {
  constructor(props) {
    super(props);
    this.updateTable = this.updateTable.bind(this);
    this.state = {
      keys: ["id", "name", "dept_id", "credits"],
    };
  }

  updateTable() {
    console.log("Calling updatTable form RegTable", this.props.isLoading);
    this.props.onUpdateTable("RegTable update called");
  }

  componentDidMount() {
    console.log("props", this.props);
    this.updateTable();
  }

  render() {
    return this.props.isLoading ||
      this.props.data == undefined ||
      this.props.data.length == 0 ? (
      <h3 className="mt-5">No Optional courses available</h3>
    ) : (
      <div className="component mt-5 col-md-offset-2">
        <DynamicTable data={this.props.data} keys={this.state.keys} />
      </div>
    );
  }
}
