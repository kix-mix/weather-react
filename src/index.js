import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import WeatherSearch from "./WeatherSearch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <App />
      <WeatherSearch />
    </div>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
