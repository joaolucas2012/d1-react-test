import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { JourneysData } from "./context/JourneysContext";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <JourneysData initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </JourneysData>,
  document.getElementById("root")
);
