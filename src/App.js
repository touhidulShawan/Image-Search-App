import React, { useState, useEffect } from "react";
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
          params: { query: term, per_page: 30 },
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
          },
        })
        .then((response) => {
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
      <h1
        style={{ textAlign: "center", padding: "0.5rem", color: "cadetblue" }}
      >
        Image Seach App
      </h1>
      <SearchBar searchValue={searchKey} onHandleSearch={handleSearchKey} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
