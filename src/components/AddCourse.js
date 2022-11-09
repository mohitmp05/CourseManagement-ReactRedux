import React from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { connect } from "react-redux";
import { courseAdd } from "../actions/courseActions";

class AddCourse extends React.Component {
  course = { id: 0, name: "", price: "", description: "" };

  handleForm = (e) => {
    e.preventDefault();
    this.props.dispatch(courseAdd(Object.assign({}, this.course)));
    e.target.reset();
  };

  render() {
    return (
      <div>
        <h1 className="text-center my-3">Fill Course Details</h1>
        <Form onSubmit={this.handleForm}>
          <FormGroup>
            <Label for="courseId">Course Id</Label>
            <Input
              id="courseId"
              name="courseId"
              placeholder="Enter Id here"
              type="text"
              onChange={(e) => {
                this.course.id = e.target.value;
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="courseName">Course Name</Label>
            <Input
              id="courseName"
              name="courseName"
              placeholder="Enter Course Name"
              type="text"
              onChange={(e) => {
                this.course.name = e.target.value;
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="coursePrice">Course Price</Label>
            <Input
              id="coursePrice"
              name="coursePrice"
              placeholder="Enter Course Price"
              type="text"
              onChange={(e) => {
                this.course.price = e.target.value;
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="courseDesc">Course Description</Label>
            <Input
              id="courseDesc"
              name="courseDesc"
              type="textarea"
              onChange={(e) => {
                this.course.description = e.target.value;
              }}
            />
          </FormGroup>

          <Container className="text-center">
            <Button type="submit" color="primary">
              Add Course
            </Button>
            <Button type="reset" color="secondary">
              Clear
            </Button>
          </Container>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(AddCourse);
