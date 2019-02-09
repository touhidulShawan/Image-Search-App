import React, { Component } from "react";

class ImageCard extends Component {
  state = {
    spans: 0
  };

  imageRef = React.createRef();

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans: spans });
  };

  render() {
    return (
      <div
        className="image-card"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img
          src={this.props.image.urls.regular}
          alt={this.props.image.description}
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default ImageCard;
