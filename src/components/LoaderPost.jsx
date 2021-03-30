import React from "react";
import "../styles/LoaderPost.scss";

class LoaderPost extends React.Component {
  render() {
    return (
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
    );
  }
}

export default LoaderPost;
