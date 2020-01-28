import React from "react";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Pages/dashborad";
import Posts from './Components/Dashboard/Pages/Posts';
import Layout from './Components/Dashboard/Layout';
import Users from './Components/Dashboard/Pages/Users';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          {/* Login Page with route login that displays the login form. */}
          <Route path="/login" component={Login} />
          <Switch>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
            <Route path="/dashboard/posts">
              <Posts />
            </Route>
            <Route path="/dashboard/users">
              <Users />
            </Route>
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
