import React from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    return <List images={this.props.images} loggedin={this.props.loggedin} />;
  }
}

function mapStateToProps(state) {
  return { images: state.images, loggedin: Boolean(state.user) }; //do I have reasons to pass the whole token?
}

const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
