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
    return (
      <>
        <ViewOrderDisplay bookdata={this.state.booking} />
      </>
    );
  }

  componentDidMount() {
    axios.get(`${url}`).then((res) => this.setState({ booking: res.data }));
  }
}

export default ViewOrderApi;
