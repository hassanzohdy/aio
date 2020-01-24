import React, { Component } from 'react';
import $ from "jquery";

// JQuery here
// Function for toggle...
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


// Toggle button
class Toggle extends Component {
  render() {
    return (
      <a onClick={this.toggles} href="/#menu-toggle" id="menu-toggle" className="navbar-brand">
        <span className="navbar-toggler-icon"></span>
      </a>
    );
  }
}

export default Toggle;