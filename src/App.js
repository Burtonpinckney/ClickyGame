import React, { Component } from 'react';
import './App.css';
import LuckyImage from './components/LuckyImage';

class App extends Component {
  state = {
    pictures: [
      {
        name: "ncstate",
        image: require("./images/ncstatemascot.jpg")
      },
      {
        name: "unc",
        image: require("./images/ncmascot.jpg")
      },
      {
        name: "clemson",
        image: require("./images/clemsonmascot.jpg")
      },
      {
        name: "georgia",
        image: require("./images/georgiamascot.jpg")
      },
      {
        name: "duke",
        image: require("./images/dukemascot.jpg")
      },
      {
        name: "tennessee",
        image: require("./images/tennesseemascot.jpg")
      },
      {
        name: "florida",
        image: require("./images/floridamascot.jpg")
      },
      {
        name: "virginia",
        image: require("./images/virginiamascot.jpg")
      },
      {
        name: "wakeforest",
        image: require("./images/wfmascot.jpg")
      },
      {
        name: "southcarolina",
        image: require("./images/scmascot.jpg")
      },
      {
        name: "lsu",
        image: require("./images/lsumascot.jpg")
      },
      {
        name: "ecu",
        image: require("./images/ecumascot.jpg")
      }
    ],
    alreadyClicked: [],
    topScore: 0,
    score: 0
  };
  handleClick = name => {
    const shuffledImages = this.state.pictures;
    this.setState({
      pictures: shuffledImages.sort((a, b) => 0.5 - Math.random())
    });
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score});
    }
    if (this.state.alreadyClicked.includes(name)) {
      this.setState({score: 0, alreadyClicked: []});
    } else {
      const newAlreadyClicked = this.state.alreadyClicked;
      newAlreadyClicked.push(name);
      this.setState({ alreadyClicked: newAlreadyClicked });
      this.setState({ score: this.state.score + 1})
      if (this.state.alreadyClicked.length === this.state.pictures.length){
      this.setState({ topScore: 12, score: 0});
    }}
   
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Clicky Game!</h1>
          <h2>Top Score: {this.state.topScore}</h2>
          <h2>Score: {this.state.score}</h2>
          <div>
            {this.state.pictures.map(pic => (
              <LuckyImage
               image={pic.image}
               name={pic.name}
               key={pic.name}
               onClick={() => this.handleClick(pic.name)} />
            ))}
          </div>
        </header>
      </div>
    );
  }
}


export default App;
