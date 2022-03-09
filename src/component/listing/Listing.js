import React, { Component } from "react";
import "./Listing.css";
//import axios statement
import axios from "axios";
import ListingDisplay from "./ListingDisplay";
import CuisineFilter from "../filter/CuisineFilter";
import CostFilter from "../filter/CostFilter";

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

class Listing extends Component {
  constructor(props) {
    super();
    this.state = {
      restaurantList: "",
    };
  }

  setDataPerFilter = (data) => {
    this.setState({ restaurantList: data });
  };

  render() {
    return (
      <>
        <div className="listingClass">
          <div className="listingFilter">
            <CuisineFilter
              mealId={this.props.match.params.mealId}
              //assigning filtered data to restaurantList state
              restaurantPerCuisine={(data) => {
                this.setDataPerFilter(data);
              }}
            />
            <CostFilter
              mealId={this.props.match.params.mealId}
              restaurantPerCuisine={(data) => this.setDataPerFilter(data)}
            />
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
