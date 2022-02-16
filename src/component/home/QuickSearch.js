import React, { Component } from "react";
import "./QuickSearch.css";
import QuickDisplay from "./QuickDisplay";

// local api variable
const url = "https://zomatoajulypi.herokuapp.com/quicksearch";

class QuickSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickData: "",
    };
  }

  render() {
    return (
      <>
        <div className="quickSearch">
          <h2>Quick Searhes</h2>
          <br />
          {/* passing prop (quickData) to QuickDisplay */}
          <QuickDisplay quickData={this.state.quickData} />
        </div>
      </>
    );
  }

  //api call on component load or mount
  componentDidMount() {
    // fetch api call
    fetch(url, { method: "GET" })
      //return promise
      .then((res) => res.json())
      //returns data and updates that into quickData using setState
      .then((data) => this.setState({ quickData: data }));
  }
}

export default QuickSearch;
