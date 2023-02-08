import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const UNPLASH_KEY = process.env.REACT_APP_UNPLASH_KEY;

function App() {
  let [word, setWord] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(word);
    let url_to_fetch = `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNPLASH_KEY}`;
    fetch(url_to_fetch)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    </div>
  );
}

export default App;
