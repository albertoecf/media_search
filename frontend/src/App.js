import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UNPLASH_KEY = process.env.REACT_APP_UNPLASH_KEY;

function App() {
  let [word, setWord] = useState("");
  let [images, setImages] = useState([]);
  console.log(images);

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(word);
    let url_to_fetch = `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNPLASH_KEY}`;
    fetch(url_to_fetch)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <Container>
        <Row xs={1} md={2} lg={3}>
          {images.map((map_image, map_index) => (
            <Col key={map_index} className="pb-3">
              <ImageCard image={map_image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
