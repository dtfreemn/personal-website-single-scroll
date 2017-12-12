import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import MyStory from './components/MyStory'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Intro />
        <h2 id='my-story-header' className='section-header'>My Story</h2>
        <MyStory />
      </div>
    );
  }
}

export default App;
