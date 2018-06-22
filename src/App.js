import React from 'react';
// import NavBar from './components/NavBar';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
import ClickCard from './components/ClickCard';
import fighters from './fighters.json';

import './App.css';

function shuffleFighters(fighters) {
  for (let i = 0; i < fighters.length - 1; i++) {
    let j = Math.floor(Math.random() * (fighters.length + 1));
    [fighters[i], fighters[j]] = [fighters[j], fighters[i]];
  }
}

class App extends React.Component {

  state = {
    fighters,
    score: 0,
    topScore: 0,
    gameStatus: '',
    clicked: []
  }

  handleClick = (id) => {
    if (this.state.clicked.indexOf(id) !== -1) {
      this.handleReset();
    } else {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id)});
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
    }

    this.handleShuffle();
  }

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      gameStatus: 'Game Over!',
      clicked: []
    });

    this.handleShuffle();
  }

  handleShuffle = () => {
    const newFighters = shuffleFighters(fighters);
    this.setState({ fighters: newFighters });
  }
  
  render() {
    return (



      // <div>
      //   <NavBar score={this.state.score} topScore={this.state.topScore} status={this.state.gameStatus} />
      //   <Header />
      //   {/* <Main 
      //     handleScore = {this.handleScore} 
      //     handleReset = {this.handleReset}
      //     score = {this.state.score}
      //     status={this.state.status} 
      //    /> */}
        <div>
          {this.state.fighters.map(fighter => (
                  <ClickCard 
                    src={fighter.src}
                    key={fighter.id} />
              )
          )};
        </div>
        
      //   <Footer />
      // </div>
    )
  }
}

export default App;
