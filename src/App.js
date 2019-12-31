import React from "react";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dash-Layout/Sidebar/dashborad";
import Posts from './Components/Dash-Layout/Sidebar/Posts';
import Categories from './Components/Dash-Layout/Sidebar/Categories';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Login Page with route /login that displays the login form. */}
        <Route path="/login"  component={Login} />
        <Route path="/dashboard" exact  component={Dashboard} />
        <Route path="/dashboard/posts"  component={Posts} />
       <Route path="/dashboard/categories"  component={Categories} />
      </div>
    </BrowserRouter>
  );
}

export default App;
