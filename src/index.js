import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SizeRating from "./SizeRating";
// import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <SizeRating
      maxRating={5}
      messages={["small", "medium", "large", "extra large", "2 extra large"]}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
