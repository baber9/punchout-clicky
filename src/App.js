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
    
    // if id is not in clicked array
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ 
        clicked: this.state.clicked.concat(id),
        gameStatus: name + " says " + quote
      });
      console.log(this.state.clicked);

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
    
    // setState to new score and clear status
    this.setState({
      score: newScore,
      gameStatus: ''
    });

    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });

    // if score is top score, change status to message
    } else if (newScore === 12) {
      this.setState({ gameStatus: "MAX SCORE!!! YOU WIN!!!" });
    }

    this.handleShuffle();
  }

  // METHOD: handles stat resets and game over message
  handleReset = () => {
    
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      gameStatus: "GAME OVER! Doc says 'Join the Nintendo Fan Club today Mac!'",
      clicked: []
    });

    

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
              <h1 className="title">Punch-Out Clicky</h1>
              <h4 className="title">Click on an image to earn points, but don't click on any image more than once!</h4>
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
