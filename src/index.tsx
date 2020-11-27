import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBasket,
  faSearch,
  faBars,
  faStar,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { ModalProvider } from "./utils/modalContext";

library.add(faShoppingBasket, faSearch, faBars, faStar, faPlus, faTimes);

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <Home />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
