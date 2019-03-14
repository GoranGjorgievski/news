import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import NewsFeed from './NewsFeed';
import Article from './Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Hacker News</h1>
        </header>
         <Router>
           <>
            <Route exact path="/" component={NewsFeed} />
            <Route path="/article/:id" component={Article} />
           </>
        </Router>
      </div>
    );
  }
}

export default App;
