import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //destructuring in classes is done in the render method
    const { name, heroName } = this.props;
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;

// CLASS COMPONENTS
