import React from "react";
import ReactLoading from "react-loading";

export default function Loading({
  type = "bubbles",
  height = 667,
  width = 375,
  color = "#fff",
}) {
  return (
    <div className="loading relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words w-full mb-6 rounded-xl mt-16">
      <div className="flex justify-center items-center">
        <ReactLoading type={type} color={color} height={height} width={width} />
      </div>
    </div>
  );
}
