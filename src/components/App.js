import React, { Component } from "react";
import "../assets/css/App.css";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";

class App extends Component {
  state = {
    images: []
  };
  onSearchSubmit = term => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 3daa1c358646b6d4d27e8c541251c2c78047e4ffb3fe2bad5cdd08daf4a0753f"
        }
      })
      .then(response => {
        this.setState({ images: response.data.results });
      });
  };
  render() {
    return (
      <div className="App ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
