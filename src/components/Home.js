import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";

function Home() {
  useEffect(() => {
    document.title = "Home || Tech-Geek";
  }, []);

  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <div className="container-fluid py-5">
          <h1>Learncode with Tech-Geek</h1>
          <p className="display-7 text-center">
            This is developed by Learncode with Tech-Geek for learning purpose.
            It's backend is on spring boot and frontend on react-js.
          </p>
          <Container>
            <Button color="primary" outline>
              Start Using
            </Button>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Home;
