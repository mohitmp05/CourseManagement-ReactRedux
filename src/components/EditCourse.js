import React from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { connect } from "react-redux";
import { courseUpdate, getcourse } from "../actions/courseActions";
import { withRouter } from "react-router-dom";

class EditCourse extends React.Component {
  id= 0; 
  name= "";
   price= "";
    description= "";

  componentDidMount() {
    this.id = this.props.match.params.id;
    this.props.dispatch(getcourse(this.id));
  }

  handleForm = (e) => {
    e.preventDefault();
    this.props.dispatch(
      courseUpdate({
        id: this.id,
        name: this.name,
        price: this.price,
        description: this.description,
      })
    );
  };

  render() {
    this.id = this.props.id;
    this.name = this.props.name;
    this.price = this.props.price;
    this.description = this.props.description;

    return (
      <div>
        <h1 className="text-center my-3">Edit Course Details</h1>
        <Form onSubmit={this.handleForm}>
          <FormGroup>
            <Label for="courseId">Course Id</Label>
            <Input
              id="courseId"
              name="courseId"
              placeholder="Enter Id here"
              type="text"
              defaultValue={this.props.id}
              onChange={(e) => {
                this.id = e.target.value;
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
              defaultValue={this.props.name}
              onChange={(e) => {
                this.name = e.target.value;
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
              defaultValue={this.props.price}
              onChange={(e) => {
                this.price = e.target.value;
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="courseDesc">Course Description</Label>
            <Input
              id="courseDesc"
              name="courseDesc"
              type="textarea"
              defaultValue={this.props.description}
              onChange={(e) => {
                this.description = e.target.value;
              }}
            />
          </FormGroup>

          <Container className="text-center">
            <Button type="submit" color="primary">
              Edit Course
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
  console.log(state);
  const { course } = state;
  return {
    ...course,
  };
}

export default connect(mapStateToProps)(withRouter(EditCourse));
