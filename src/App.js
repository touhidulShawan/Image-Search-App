import React, { useState, useEffect } from "react";
import "./assets/css/App.css";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const [searchKey, setSearchKey] = useState("mountains");

  useEffect(() => {
    const onSearchSubmit = (term) => {
      axios
        .get("https://api.unsplash.com/search/photos", {
          params: { query: term },
          headers: {
            Authorization:
              "Client-ID 3daa1c358646b6d4d27e8c541251c2c78047e4ffb3fe2bad5cdd08daf4a0753f",
          },
        })
        .then((response) => {
          console.log(response.data.results);
          setImages(response.data.results);
        });
    };
    onSearchSubmit(searchKey);
  }, [searchKey]);

  const handleSearchKey = (searchValue) => {
    setSearchKey(searchValue);
  };

  return (
    <div className="App ui container">
      <SearchBar searchValue={searchKey} onHandleSearch={handleSearchKey} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
