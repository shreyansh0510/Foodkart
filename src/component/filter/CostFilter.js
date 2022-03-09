import React, { Component } from "react";
import axios from "axios";
import "./CostFilter.css";

const url = "https://zomatoajulypi.herokuapp.com/filter";

class CostFilter extends Component {
  filterCost = (event) => {
    let mealId = this.props.mealId;
    let cost = event.target.value.split("-");
    let lcost = cost[0];
    let hcost = cost[1];

    let costUrl;
    if (cost === "") {
      costUrl = `${url}/${mealId}`;
    } else {
      costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`;
    }
    axios
      .get(costUrl)
      .then((response) => this.props.restaurantPerCuisine(response.data));
  };

  render() {
    console.log(this.props);
    return (
      <>
        <center className="costFilter">Cost Filter</center>

        <div onChange={this.filterCost}>
          <label className="radio">
            <input type="radio" name="cuisine" value="" />
            All
          </label>
          <br />
          <label className="radio">
            <input type="radio" name="cuisine" value="100-300" />
            100-300
          </label>
          <br />
          <label className="radio">
            <input type="radio" name="cuisine" value="301-500" />
            301-500
          </label>
          <br />
          <label className="radio">
            <input type="radio" name="cuisine" value="501-700" />
            501-700
          </label>
          <br />
          <label className="radio">
            <input type="radio" name="cuisine" value="701-1000" />
            701-1000
          </label>
          <br />
          <label className="radio">
            <input type="radio" name="cuisine" value="1001-2000" />
            1001-2000
          </label>
        </div>
      </>
    );
  }
}

export default CostFilter;
