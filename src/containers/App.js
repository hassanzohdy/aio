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
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
              </ul>       
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
