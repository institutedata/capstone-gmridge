import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App";

ReactDOM.render(
  <GoogleOAuthProvider clientId="774398605658-82rbldmhtjof3t9hlqdk6u6rha0nksuq.apps.googleusercontent.com">
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);