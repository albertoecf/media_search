import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search({ word, setWord, handleSubmit }) {
  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Form.Control
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Search for new image..."
            />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Search;
