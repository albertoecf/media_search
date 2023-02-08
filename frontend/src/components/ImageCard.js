import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ImageCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1630448926286-0a77c8ba11e4?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MDgwMDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU4NDI2ODI&ixlib=rb-4.0.3&q=80"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;
