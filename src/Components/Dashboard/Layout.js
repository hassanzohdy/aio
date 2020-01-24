import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSignOutAlt } from "react-icons/fa";
import Toogle from './Header/Header';
import {Dashboard, Users} from './Sidebar/sidebar';
import "./Layout.scss";
class Layout extends Component {
  componentDidMount() {
    // Jquery here...
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar  navbar-expand navbar-dark bg-dark">
          <img
            className="logo"
            src="http://placehold.it/150x50?text=Logo"
            alt=""
          ></img>
          <Toogle />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  Admin name <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Logout
                  <FaSignOutAlt className="logout" />
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-md-0"> </form>
          </div>
        </nav>
        <div id="wrapper" className="toggled">
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
              <button className="dropdown-btn admin-dash">
                  <Dashboard />
                <i className="fa fa-caret-down"></i>
              </button>
              <button className="dropdown-btn">
                Uesrs
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-container">
                <button className="dropdown-btn">
                  Categories
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-container">
                  <Link to="/dashboard/Posts">Posts</Link>
                  <Users />
                </div>
              </div>
            </ul>
          </div>
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
