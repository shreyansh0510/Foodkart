import React from "react";
import "./QuickDisplay.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { Link } from "react-router-dom";

const QuickDisplay = (props) => {
  // function to render list of meals
  // props destructuring: {quickData}
  const listMeals = ({ quickData }) => {
    // if data is present
    if (quickData) {
      // map function to iterate over mealtype data
      return quickData.map((items) => {
        // returns meal image, meal name and meal content
        return (
          // Link from react-router dom which navigates to Listing Component which displays
          // respective meal restaurants using {items.mealtype_id}
          <Link
            to={`/list/${items.mealtype_id}`}
            key={items.mealtype_id}
            style={{ textDecoration: "none" }}
          >
            <div className="mealCards">
              <Card
                sx={{
                  width: 180,
                  marginBottom: 5,
                  mx: 0,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={items.meal_image}
                    alt="food"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {items.mealtype}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      {items.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Link>
        );
      });
    }
  };

  return (
    <>
      {/* passing props as an arguments to listMeals function */}
      <div className="quickDisplay">{listMeals(props)}</div>
    </>
  );
};

export default QuickDisplay;
