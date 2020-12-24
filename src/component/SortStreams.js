import React from "react";

function SortStreams({ location, match }) {
  console.log(match.params.id);
  console.log(location);
  return <h1> {match.params.id} </h1>;
}

export default SortStreams;
