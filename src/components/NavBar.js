import React from "react";
// import GameStats from './GameStats';

const NavBar = props => (

  <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark container-fluid">
    <ul className="navbar-nav">
      
      <li className="nav-item"><a href="/punchout-clicky">Punchout Clicky!</a></li>
      
      <li>{props.gameStatus}</li>
      
      <li>Score: {props.score} | Top Score: {props.topScore}</li>
    
    </ul>
  </nav>

);

export default NavBar;