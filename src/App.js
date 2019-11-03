import React from "react";
import "./App.scss";
import Login from "./Components/Login";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Login Page with route /login that displays the login form. */}
        <Route path="/login" exact component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
