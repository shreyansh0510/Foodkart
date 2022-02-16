import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./component/home/Home";
import Listing from "./component/listing/Listing";
import RestaurantsDetails from "./component/details/RestaurantsDetails";
import { Route, BrowserRouter } from "react-router-dom";

function Routing() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/list/:mealId" component={Listing} />
      <Route path="/details/:restaurantId" component={RestaurantsDetails} />
      <Footer />
    </BrowserRouter>
  );
}

export default Routing;
