import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./component/home/Home";
import Listing from "./component/listing/Listing";
import RestaurantsDetails from "./component/details/RestaurantsDetails";
import PlaceOrder from "./component/booking/PlaceOrder";
import ViewOrder from "./component/booking/ViewOrderApi";
import Login from "./component/login/Login";
import Register from "./component/login/Register";

import { Route, BrowserRouter } from "react-router-dom";

function Routing() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/list/:mealId" component={Listing} />
      <Route path="/details/:restaurantId" component={RestaurantsDetails} />
      <Route path="/placeOrder/:restaurantName" component={PlaceOrder} />
      <Route path="/viewOrder" component={ViewOrder} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Footer />
    </BrowserRouter>
  );
}

export default Routing;
