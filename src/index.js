import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import FullApplication from "./containers/FullApplication";

import "./styles.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FullApplication />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
