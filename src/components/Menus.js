import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

function Menus() {
  return (
    <div>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/home"
          action
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-course"
          action
        >
          Add Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-courses"
          action
        >
          View Courses
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/about"
          action
        >
          About US
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/contact"
          action
        >
          Contact
        </Link>
      </ListGroup>
    </div>
  );
}

export default Menus;
