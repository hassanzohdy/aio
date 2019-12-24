import React from "react";
import "./App.scss";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Layout from './Components/Layout/Layout';
import Dashboard from "./Components/Layout/Dashboard/dashborad";
import Posts from './Components/Layout/Dashboard/Users/Posts';
import Categories from './Components/Layout/Dashboard/Users/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <div className="App">
        {/* Login Page with route /login that displays the login form. */}
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" exact  component={Dashboard} />
        <Route path="/dashboard/posts"  component={Posts} />
       <Route path="/dashboard/categories"  component={Categories} />
      </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
