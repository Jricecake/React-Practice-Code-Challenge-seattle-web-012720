import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  componentDidMount(){
    fetch(API)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      const allSushi = data
    })
  }

  render() {
    return (
      <div className="app">
        {console.log(allSushi)}
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

export default App;