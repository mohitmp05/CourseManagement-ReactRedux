import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
import { courseDelete } from "../actions/courseActions";
import { Link } from "react-router-dom";

class Course extends React.Component {
  deleteItem(id) {
    console.log(id);
    this.props.dispatch(courseDelete(id));
  }

  render() {
    return (
      <div>
        <Card className="text-center">
          <CardBody>
            <CardTitle tag="h5">{this.props.item.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {this.props.item.price}
            </CardSubtitle>
            <CardText>{this.props.item.description}</CardText>
            <Container className="text-center">
              <Button
                color="danger"
                onClick={() => {
                  this.deleteItem(this.props.item.id);
                }}
              >
                Delete
              </Button>
              <Link to={`/update/${this.props.item.id}`}>
                <Button color="success">Update</Button>
              </Link>
            </Container>
          </CardBody>
        </Card>
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

export default connect(mapStateToProps)(Course);
