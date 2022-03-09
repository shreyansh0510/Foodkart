import React from "react";
import Search from "./Search";
import QuickSearch from "./QuickSearch";

function Home(props) {
  console.log(">> inside home", props);
  return (
    <>
      <Search />
      <QuickSearch />
    </>
  );
}

export default Home;
