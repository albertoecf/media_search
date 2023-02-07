import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    <Container className="mt-4">
      <Form>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Form.Control placeholder="Search for new image..." />
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
