import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Welcome from "./components/Welcome";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5050";

function App() {
  let [word, setWord] = useState("");
  let [images, setImages] = useState([]);

  async function handleSearchSubmit(e) {
    e.preventDefault();
    let url_to_fetch = `${API_URL}/new-image?query=${word}`;
    try {
      const res = await axios.get(url_to_fetch);
      setImages([{ ...res.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
    }
    setWord("");
  }

  function handleDeleteImage(input_id) {
    setImages(images.filter((image) => image.id !== input_id));
  }

  return (
    <div>
      <Header title="Not My order"></Header>
      <Search
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
      ></Search>
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((map_image, map_index) => (
              <Col key={map_index} className="pb-3">
                <ImageCard image={map_image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}

export default App;
