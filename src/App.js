import React from "react";
import { Col, Container, Row } from "reactstrap";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import Header from "./components/Header";
import Home from "./components/Home";
import Menus from "./components/Menus";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditCourse from "./components/EditCourse";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/add-course">
                  <AddCourse />
                </Route>
                <Route path="/view-courses">
                  <AllCourses />
                </Route>
                <Route path="/update/:id">
                  <EditCourse />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
