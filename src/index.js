import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Sequencer from "./Sequencer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Sequencer />, document.getElementById("root"));

serviceWorker.unregister();
