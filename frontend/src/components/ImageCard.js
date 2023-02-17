import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ImageCard({ image, deleteImage, saveImage }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="warning" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>
        {!image.saved && (
          <Button variant="primary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ImageCard;
