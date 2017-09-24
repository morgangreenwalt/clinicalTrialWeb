// Including React & React DOM
import React from "react";
import {render} from "react-dom";
import Routes from "./config/routes";

// Renders the contents according to the route page.

import Auth from './config/Auth.js';

const auth = new Auth();
auth.login();

render(<Routes />, document.getElementById("app"));
