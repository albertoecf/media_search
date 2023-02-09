import React from "react";
import Button from "react-bootstrap/Button";

function Welcome() {
  return (
    <div class="jumbotron">
      <h1>Imagine, Search, Enjoy!</h1>
      <p>Look picture about anything!</p>
      <p>
        <Button bsStyle="primary" href="https://unplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </div>
  );
}
export default Welcome;
