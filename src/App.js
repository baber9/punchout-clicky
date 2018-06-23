import React from 'react';
import NavBar from './components/NavBar';
import ClickCard from './components/ClickCard';
import fighters from './fighters.json';

import './App.css';

class App extends React.Component {

  state = {
    fighters,
    score: 0,
    topScore: 0,
    gameStatus: '',
    clicked: []
  }

  shuffleFighters = (fighters) => {
    for (let i = 0; i < fighters.length - 1; i++) {
      let j = Math.floor(Math.random() * (fighters.length));
      [fighters[i], fighters[j]] = [fighters[j], fighters[i]];
    }
  
    return fighters;
  }

  handleClick = (id, name, quote) => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ 
        clicked: this.state.clicked.concat(id),
        gameStatus: name + ":  " + quote
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

  handleIncrement = () => {
    
    const newScore = this.state.score + 1;
    
    this.setState({
      score: newScore,
      gameStatus: ''
    });

    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ gameStatus: "MAX SCORE!!! YOU WIN!!!" });
    }

    this.handleShuffle();
  }

  handleReset = () => {
    
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      gameStatus: 'GAME OVER! Doc Says: "Join the Nintendo Fan Club today Mac!"',
      clicked: []
    });

    

    this.handleShuffle();
  }

  handleShuffle = () => {
    const newFighters = this.shuffleFighters(fighters);
    this.setState({ fighters: newFighters });

    
  }
  
  render() {
    return (

      <React.Fragment>

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
        
        {/* <footer>Clicky Game!
          <div>
            <img alt='react' src='*'/>
          </div>
        </footer> */}


      </React.Fragment>

    )
  }
}

export default App;
