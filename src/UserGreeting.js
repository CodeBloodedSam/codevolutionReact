import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    /////////// Short Circuit ////////////
    ////////////////////////////////
    return this.state.isLoggedIn && <div>Welcome BigSam</div>;

    /////// Tenary Operator ////////
    ////////////////////////////////
    // return this.state.isLoggedIn ? (
    //   <div>Welcome BigSam</div>
    // ) : (
    //   <div>Welcome Guest </div>
    // );

    /////// Element Variable ///////
    ////////////////////////////////
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome BigSam</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    /////////// if else ////////////
    ////////////////////////////////
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome BigSam</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
