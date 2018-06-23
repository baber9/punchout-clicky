import React from "react";

const NavBar = props => (

  <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark container-fluid">
    <ul className="navbar-nav">
      
      <li className="nav-item navbar-brand logo"><a href="/"><img className="img-fluid" src={require("../images/punchout.jpg")} alt="Punch-Out!" /></a></li>
      
      {/* Display gameStatus prop - fighter quote */}
      <li className="status">{props.gameStatus}</li>
      
      {/* Display scores */}
      <li className="score">Score: {props.score} | Top Score: {props.topScore}</li>
    
    </ul>
  </nav>

);

export default NavBar;