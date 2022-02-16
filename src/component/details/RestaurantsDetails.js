import axios from "axios";
import React, { Component } from "react";

const url = "https://zomatoajulypi.herokuapp.com/details";

class RestaurantsDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      details: "",
    };
  }

  render() {
    return (
      <div className="restaurantsDetailsClass">
        <h1>{this.state.details.restaurant_name}</h1>
      </div>
    );
  }

  async componentDidMount() {
    const restaurantId = this.props.match.params.restaurantId;
    let response = await axios.get(`${url}/${restaurantId}`);
    this.setState({ details: response.data[0] });
  }

  //   componentDidMount() {
  //     const restaurantId = this.props.match.params.restaurantId;
  //     fetch(`${url}/${restaurantId}`, { method: "GET" })
  //       .then((res) => res.json())
  //       .then((data) => this.setState({ details: data[0] }));
  //   }
}

export default RestaurantsDetails;
