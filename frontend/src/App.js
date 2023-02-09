import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";

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

  return (
    <div>
      <Header title="Not My order"></Header>
      <Search
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
      ></Search>
      <h1> Validate your order </h1>
      {!!images.length && <ImageCard image={images[0]}></ImageCard>}
    </div>
  );
}

export default App;
