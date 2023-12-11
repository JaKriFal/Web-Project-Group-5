import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ArtworkFormContextProvider } from "./context/ArtworkFormContext";
import { AuthContextProvider } from "./context/AuthContext";
import { JobContextProvider } from "./context/JobContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ArtworkFormContextProvider>
        <ArtworkGetAllContextProvider>
          <JobContextProvider>
            <App />
          </JobContextProvider>
        </ArtworkGetAllContextProvider>
      </ArtworkFormContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
