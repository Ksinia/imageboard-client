import React, { Component } from "react";
import CreateFormContainer from "./CreateFormContainer";

class List extends Component {
  render() {
    return (
      <div>
        <CreateFormContainer />
        {this.props.images.map(image => {
          return (
            <div key={image.url}>
              <h3>{image.title}</h3>
              <img src={image.url} alt={image.title} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
