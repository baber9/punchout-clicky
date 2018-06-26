import React from 'react';
import NavBar from './components/NavBar';
import ClickCard from './components/ClickCard';

// import fighters.json
import fighters from './fighters.json';

// Import stylesheet - contains all styles
import './App.css';

class App extends React.Component {

  // set initial state
  state = {
    fighters,
    score: 0,
    topScore: 0,
    gameStatus: '',
    clicked: []
  }

  // METHOD: handles shuffling (after each click)
  shuffleFighters = (fighters) => {
    for (let i = 0; i < fighters.length - 1; i++) {
      let j = Math.floor(Math.random() * (fighters.length));
      [fighters[i], fighters[j]] = [fighters[j], fighters[i]];
    }
    return fighters;
  }

  // METHOD: handles click event
  handleClick = (id, name, quote) => {

    // set constants for titles for use during win and reset
    const h1Title = document.getElementById('h1-title');
    const h2Title = document.getElementById('h2-title');

    // remove win img (if shown)
    if (h1Title.style.display === 'none') {
      h1Title.style.display = 'block';
      h2Title.style.marginTop = '40px';
      h2Title.innerHTML = "Click on an image to earn points, but don't click on any image more than once!";
    }
    
    // if id is not in clicked array
    if (this.state.clicked.indexOf(id) === -1) {
      
      this.handleIncrement();
      
      const stateObj = {};
      stateObj.clicked = this.state.clicked.concat(id);

      // NESTED IF: show fighter quote 11
      if (this.state.score < 11) {
        stateObj.gameStatus = name + " says " + quote;
        this.setState(stateObj);
      //  max score - winner!
      } else {

        // set winImg
        const winImg = '<img src="..\\images\\tko.png" id="tko" alt="WINNER" />'

        // hide h1Title, change h2Title Text, display tko img
        h1Title.style.display = 'none';
        h2Title.style.marginTop = '100px';
        h2Title.innerHTML = winImg + "Top Score! Congrats!";

        stateObj.gameStatus = "WINNER!";

        this.setState(stateObj);
        this.handleReset();

      }
      
    } else {

      // Shake Items
      const shakeItems = document.getElementsByClassName('card');
      let len = shakeItems.length;

      // set to shake and shake
      for (let i=0 ; i < len ; i++) {
        shakeItems[i].className = 'card click-item shake-horizontal';
      }

      // wait .7 sec and set back to default
      setTimeout(() => {
        for (let i=0 ; i < len ; i++) {
          shakeItems[i].className = 'card click-item';
        }
      }, 700);

      this.handleReset();
    }
  }

  // METHOD: handles incementing score
  handleIncrement = () => {
    const newScore = this.state.score + 1;

    // set stateObj score to newScore
    this.setState({
      score: newScore
    });
    // check if high score
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore
      });
    }

    // if (newScore === 12) {
    //   this.setState({
    //     topScore: newScore + 1
    //   });
    // }

    this.handleShuffle();
  }

  // METHOD: handles stat resets and game over message
  handleReset = () => {
    let stateObj = {};

    if (this.state.score < 11) {
      stateObj.gameStatus = "GAME OVER! Doc says 'Join the Nintendo Fan Club today Mac!'";
      stateObj.topScore = this.state.topScore;
    } else {
      stateObj.topScore = 12;
    }

    stateObj.score = 0;
    stateObj.clicked = [];

    this.setState(stateObj);

    this.handleShuffle();
  }

  // METHOD:  calls shuffleFighters method
  handleShuffle = () => {
    const newFighters = this.shuffleFighters(fighters);
    this.setState({ fighters: newFighters });
  }
  
  // React render
  render() {
    return (

      // render fragment
      <React.Fragment>
        
        {/* NavBar Component */}
        <NavBar 
          score={this.state.score} 
          topScore={this.state.topScore} 
          gameStatus={this.state.gameStatus} />
        
        <div id="background">
          
          <div className="container">

            <header>
              <h1 className="title" id="h1-title">Punch-Out Clicky</h1>
              <h4 className="title" id="h2-title">Click on an image to earn points, but don't click on any image more than once!</h4>
            </header>

            <div className="row">
              <div className="col">

                {/* Map fighters.json and render ClickCard component */}
                {this.state.fighters.map(fighter => (
                        <ClickCard 
                          key={fighter.id}
                          handleClick={this.handleClick}
                          handleIncrement={this.handleIncrement}
                          handleReset={this.handleReset}
                          handleShuffle={this.handleShuffle}
                          name={fighter.name}
                          quote={fighter.quote}
                          id={fighter.id}
                          image={fighter.src} />
                    )
                )};

              </div>
            </div>
          </div>
        </div>
        
        <footer>
          <div>
            Clicky Game built with <img alt='react' src='..\images\logo.svg' />by Bryan Aber
          </div>
        </footer>


      </React.Fragment>

    )
  }
}

export default App;
