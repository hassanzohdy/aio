import React, { Component } from 'react';
import $ from "jquery";

// JQuery here...
$(function() {
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $(window).resize(function(e) {
    if ($(window).width() <= 768) {
      $("#wrapper").removeClass("toggled");
    } else {
      $("#wrapper").addClass("toggled");
    }
  });
});


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