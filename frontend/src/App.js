import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  let [word, setWord] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(word);
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
