import React, { Component } from "react";
import "./Listing.css";
//import axios statement
import axios from "axios";
import ListingDisplay from "./ListingDisplay";

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

class Listing extends Component {
  constructor(props) {
    super();
    this.state = {
      restaurantList: "",
    };
  }

  render() {
    return (
      <>
        <div className="listingClass">
          <div className="listingFilter">
            <div className="filterText">Filter</div>
          </div>
          {/* passing props as restaurantData to ListingDisplay component */}
          <ListingDisplay restaurantData={this.state.restaurantList} />
        </div>
      </>
    );
  }

  //api call during component mount
  componentDidMount() {
    //get mealId param
    const mealId = this.props.match.params.mealId;
    // using axios
    axios
      .get(`${url}${mealId}`)
      .then((response) => this.setState({ restaurantList: response.data }));
  }
}

export default Listing;
