import React from "react";
import "./ListingDisplay.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

function ListingDisplay(props) {
  // function renderList to render meal type restaurants list
  const renderList = ({ restaurantData }) => {
    // if restaurantData data exist
    if (restaurantData) {
      if (restaurantData.length > 0) {
        // map function to iterate over restaurantData values
        return restaurantData.map((items) => {
          // return restaurants using cards
          return (
            <div className="restaurantCards" key={items.restaurant_id}>
              <Card sx={{ display: "flex", padding: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: "45%", height: 250 }}
                  image={items.restaurant_thumb}
                  alt={items.restaurant_name}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "55%",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h4">
                      <Link
                        to={`/details/${items.restaurant_id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {items.restaurant_name}
                      </Link>
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {items.average_rating}⭐ | {items.rating_text}
                      <br />
                      {items.address}
                      <br />
                      Cost for two: ₹{items.cost}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </div>
          );
        });
      } else {
        return (
          <>
            <div className="dataNotFound">No data found for filter</div>
          </>
        );
      }
    } else {
      return (
        // loading icon while fetching restaurants data
        <div className="loaderIcon">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      );
    }
  };

  return (
    <>
      <div className="listingDisplayClass">
        {/* calling renderList and passing props */}
        {renderList(props)}
      </div>
    </>
  );
}

export default ListingDisplay;
