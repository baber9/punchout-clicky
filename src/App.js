import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

import './App.css';

class App extends React.Component {

  state = {
    score: 0,
    topScore: 0,
    status: ''
  }

  updateScore () {
    this.setState( (prevState) => {
      return {
        score: prevState.score + 1,
        status: 'correct'
      }
    });
  }

  handleReset (won) {
    let status = 'incorrect';
      if (won) {
        status = '';
      }
    
    let newState = {
      score: 0,
      status: status
    };

    if (this.state.score > this.state.topScore) {
      newState.topScore = this.state.score;
    }

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <NavBar 
          score = {this.state.score} 
          topScore = {this.state.topScore} 
          status = {this.state.status} />
        <Header />
        <Container 
          handleScore = {this.handleScore} 
          handleReset = {this.handleReset}
          score = {this.state.score}
          status={this.state.status} 
         />
        <Footer />
      </div>
    )
  }
}

export default App;