import React, { Component } from 'react';
import $ from "jquery";




class Toggle extends Component {
  componentDidMount(){
    // JQuery here...
    $(function () {
      $("#menu-toggle").on("click", function (e) {
        e.preventDefault();
        console.log('toggling');
        $("#wrapper").toggleClass("toggled");
      });

      $(window).resize(function (e) {
        if ($(window).width() <= 768) {
          $("#wrapper").toggleClass("toggled");
        } else {
          $("#wrapper").toggleClass("toggled");
        }
      });
    });
  }
  render() {
    return (
      <button onClick={this.toggles}  id="menu-toggle" className="navbar-brand">
        <span className="navbar-toggler-icon"></span>
      </button>
    );
  }
}

export default Toggle;