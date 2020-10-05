import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import App from "./pages/App";
import Apollo from "./apollo";
import { AuthProvider } from "./context/authContext";

ReactDOM.render(
  <BrowserRouter>
    <Apollo>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Apollo>
  </BrowserRouter>,
  document.getElementById("root")
);
