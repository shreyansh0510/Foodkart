import React, { Component } from "react";
import axios from "axios";

const url = "https://zomatoajulypi.herokuapp.com/filter";

class CuisineFilter extends Component {
  // Filter by cuisine method
  filterCuisine = (event) => {
    let mealId = this.props.mealId;
    let cuisineId = event.target.value;
    let cuisineUrl;
    if (cuisineId === "") {
      //if no cuisine option selected
      cuisineUrl = `${url}/${mealId}`;
    } else {
      cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`;
    }
    axios.get(cuisineUrl).then((res) => {
      //passing data form child to parent
      this.props.restaurantPerCuisine(res.data);
    });
  };

  render() {
    console.log(this.props);
    return (
      <>
        <center className="cuisineFilter">Cuisine Filter</center>

        <div onChange={this.filterCuisine}>
          <label className="radio">
            <input type="radio" name="cuisine" value="1" />
            All
          </label>
          <br />
          <label className="radio">
            <input type="radio" name="cuisine" value="2" />
            North Indian
          </label>
          <br />
          <label className="radio">
            <input type="radio" name="cuisine" value="3" />
            South Indian
          </label>
          <br />
          <label className="radio">
            <input type="radio" name="cuisine" value="4" />
            Chinese
          </label>
          <br />
          <label className="radio">
            <input type="radio" name="cuisine" value="5" />
            Fast Food
          </label>
          <br />
          <label className="radio">
            <input type="radio" name="cuisine" value="6" />
            Street Food
          </label>
        </div>
      </>
    );
  }
}

export default CuisineFilter;
