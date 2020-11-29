import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import options from "./options";

//Register Courses
class CourseRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isLoading: true,
      data: [],
      status: "false",
      selectedOption1: null,
      selectedOption2: null,
    };
  }

  registerCourses = () => {
    //console.log("opt1 :" + this.state.selectedOption1);
    axios
      .put("http://localhost:8000/status_change", {
        id: "19JE0001",
        status: "true",
      })
      .then(() => {
        console.log("Success in post");
      });

    axios
      .post("http://localhost:8000/opt_register", {
        id: Date.now().toString(),
        student_id: "19JE0001",
        course_id: this.state.selectedOption1.value,
      })
      .then(() => {
        console.log("Success in post");
      });

    axios
      .post("http://localhost:8000/opt_register", {
        id: Date.now().toString(),
        student_id: "19JE0001",
        course_id: this.state.selectedOption2.value,
      })
      .then(() => {
        console.log("Success in post");
      });

    this.setState({ status: "true" });
  };

  handleChange1 = (selectedOption1) => {
    this.setState({ selectedOption1 });
    console.log(`Option selected:`, selectedOption1);
  };

  handleChange2 = (selectedOption2) => {
    this.setState({ selectedOption2 });
    console.log(`Option selected:`, selectedOption2);
  };

  componentDidMount() {
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
  }

  render() {
    const { selectedOption1, selectedOption2 } = this.state;
    if (this.state.status == "false")
      return (
        <div>
          <div className="title mt-5">
            <h5>
              <u>Optional Course Registration</u>
            </h5>
          </div>
          <br />
          <br />
          <Select
            value={selectedOption1}
            onChange={this.handleChange1}
            options={options}
          />
          <br />
          <Select
            value={selectedOption2}
            onChange={this.handleChange2}
            options={options}
          />
          <br /> <br />
          <input
            type="submit"
            onClick={this.registerCourses}
            className="btn btn-primary"
            value="Submit"
          />
        </div>
      );
    else {
      return (
        <div>
          <div className="title mt-5">
            <h5>
              <u>Registration Success</u>
            </h5>
          </div>
          <br />
        </div>
      );
    }
  }
}

export default CourseRegistration;
