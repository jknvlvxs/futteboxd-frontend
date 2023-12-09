import React from "react";
import ReactLoading from "react-loading";

export default function Loading({
  type = "balls",
  height = 667,
  width = 375,
  color = "#fff",
}) {
  return (
    <div className="loading">
      <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
  );
}
