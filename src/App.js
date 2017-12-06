import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  makeWebRequest() {
    const url = 'http://localhost:3000/api/messages';
    axios.post(url, {
      text: 'hello world'
    }).then(response => {
      // This is where we'd normally handle the response, but it's not necessary for this simple demonstration.
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Axios</h1>
        </header>
        <div className="App-intro">
          <i>Wait for your instructor to provide instructions before clicking.</i>
          <p>
            <button onClick={this.makeWebRequest}>Click here to send a web request with Axios</button>
          </p>
          <p>Requests and responses (whether success or error) can be seen in the DevTools network tab</p>
        </div>
      </div>
    );
  }
}

export default App;
