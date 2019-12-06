import React, { Component } from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

class List extends Component {
  render() {
    return (
      <div>
        {!this.props.loggedin && <LoginFormContainer />}
        {this.props.loggedin && <CreateFormContainer />}
        {this.props.images.map(image => {
          return (
            <div key={image.id}>
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
