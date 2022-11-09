import React from "react";
import Course from "./Course";

import { courseFetchAll } from "../actions/courseActions";
import { connect } from "react-redux";

class AllCourses extends React.Component {
  componentDidMount() {
    this.props.dispatch(courseFetchAll());
    console.log("courses list component mount done");
  }

  render() {
    return (
      <div>
        <h1>All Courses</h1>
        <p>List of courses are as follows</p>

        {this.props.courses.length > 0
          ? this.props.courses.map((item, i) => <Course item={item} key={i} />)
          : "No Courses"}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { courses } = state;
  return {
    courses,
  };
}

export default connect(mapStateToProps)(AllCourses);
