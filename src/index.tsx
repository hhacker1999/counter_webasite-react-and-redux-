import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./counter";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
