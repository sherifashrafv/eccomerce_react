import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "../src/i18n";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
import store from "./redux/index";
const lang = localStorage.getItem("lang");
if (lang == "ar") {
  require("../src/globalStyles/styles/ar.scss");
} else {
  // document.body.dir = "ltr";
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
