import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Login from '../components/Admin_dashoard/Login/Login';

function App() {
  return (
    <HashRouter>
      <div>
        {/* HEADER */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">AIO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
              </ul>
            </div>
          </nav>
        </header>
        {/* CONTENT */}
        <div className="content">
          <Route path="/login" component={Login}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
