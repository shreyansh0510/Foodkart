import React, { Component } from "react";
import axios from "axios";
import ViewOrderDisplay from "./ViewOrderDisplay";

const url = "http://localhost:3214/booking";

class ViewOrderApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booking: "",
    };
  }

  render() {
    // if user is NOT logged in
    if (!sessionStorage.getItem("userData")) {
      return (
        <>
          <div>Sorry, Login first to view your orders !</div>
        </>
      );
    } else {
      //if user is logged in
      return (
        <>
          <ViewOrderDisplay bookdata={this.state.booking} />
        </>
      );
    }
  }

  // api call only if user is logged in
  componentDidMount() {
    if (sessionStorage.getItem("userData")) {
      // axios call to get orders of user which is logged in
      axios
        .get(`${url}?email=${sessionStorage.getItem("userData").split(",")[1]}`)
        .then((res) => this.setState({ booking: res.data }));
    }
  }
}

export default ViewOrderApi;
