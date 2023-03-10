import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "./components/Spinner";
import Welcome from "./components/Welcome";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5050";

function App() {
  let [word, setWord] = useState("");
  let [images, setImages] = useState([]);
  let [loading, setLoading] = useState(true);

  async function getSavedImages() {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSavedImages();
  }, []);

  async function handleSearchSubmit(e) {
    e.preventDefault();
    let url_to_fetch = `${API_URL}/new-image?query=${word}`;
    try {
      const res = await axios.get(url_to_fetch);
      setImages([{ ...res.data, title: word }, ...images]);
      toast.info(`New image ${word} was found`);
    } catch (error) {
      console.log(error);
    }
    setWord("");
  }

  async function handleDeleteImage(input_id) {
    try {
      const res = await axios.delete(`${API_URL}/images/${input_id}`);
      if (res.data?.deleted_id) {
        setImages(images.filter((image) => image.id !== input_id));
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSaveImage(id) {
    const imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.saved = true;
    try {
      const res = await axios.post(`${API_URL}/images`, imageToBeSaved);
      if (res.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, saved: true } : image
          )
        );
        toast.info(`Image ${imageToBeSaved.title} was saved`);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header title="Not My order"></Header>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {" "}
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
                    <ImageCard
                      image={map_image}
                      deleteImage={handleDeleteImage}
                      saveImage={handleSaveImage}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <Welcome />
            )}
          </Container>
        </>
      )}
      <ToastContainer position="bottom-right"></ToastContainer>
    </div>
  );
}

export default App;
