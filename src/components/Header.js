import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
  return (
    <div>
      <Card className="my-1 bg-warning">
        <CardBody>
          <h1 className="text-center my-1">Welcome to Tech-Geek</h1>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
