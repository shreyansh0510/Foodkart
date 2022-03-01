import React, { Component } from "react";
import "./Search.css";
import RoomTwoToneIcon from "@mui/icons-material/RoomTwoTone";
import FastfoodTwoToneIcon from "@mui/icons-material/FastfoodTwoTone";

// local api varaibles
const cityUrl = "https://zomatoajulypi.herokuapp.com/location";
const restaurantUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      // state variable
      location: "",
      restaurants: "",
    };
  }

  // function to render city under search city dropdown
  renderCity = (data) => {
    // if the data is present
    if (data) {
      //map function to iterate over city api data
      return data.map((items) => {
        //return api city data
        return (
          <option value={items.state_id} key={items.state_id}>
            {items.state}
          </option>
        );
      });
    }
  };

  // function calls restaurants api selected by the user and
  // update restaurants api data to restaurants state using setState
  handleCity = (event) => {
    //fetch api call to fetch restaurants data
    fetch(`${restaurantUrl}${event.target.value}`)
      .then((response) => response.json())
      .then((data) => this.setState({ restaurants: data }));
  };

  // function to render restaurants under search restaurants dropdown
  renderRestaurants = (data) => {
    if (data) {
      return data.map((items) => {
        return (
          <option value={items.restaurant_id} key={items.restaurant_id}>
            {items.restaurant_name} | {items.address}
          </option>
        );
      });
    }
  };

  render() {
    return (
      <>
        <div className="search">
          <div className="searchImage">
            <img src="/images/home1.jpg" alt="home" height />
          </div>

          <div className="searchSection">
            <div className="searchMain">
              <div className="title">FOODIEBAY</div>
              <div className="description">
                Discover the best food & drinks near you
              </div>
            </div>

            <div className="dropdowns">
              <div className="dropdownCity">
                <RoomTwoToneIcon />
                <select name="cities" id="city" onChange={this.handleCity}>
                  <option value="">----select city----</option>
                  {this.renderCity(this.state.location)}
                </select>
              </div>
              <div className="dropdownRestraunt">
                <FastfoodTwoToneIcon />
                <select name="restaurants" id="restaurant">
                  <option value="">----select restaurants----</option>
                  {this.renderRestaurants(this.state.restaurants)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  //api call on component load or mount
  componentDidMount() {
    fetch(cityUrl, { method: "GET" })
      //returns promise
      .then((res) => res.json())
      //returns data
      .then((data) => {
        // updates location state using setState
        this.setState({ location: data });
      });
  }
}

export default Search;
