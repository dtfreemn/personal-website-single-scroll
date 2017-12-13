import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import MyStory from './components/MyStory'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Intro />
        <div id='my-story-header'>
          <h2 className='section-header'>
            <span><img className='divider' src={require('./images/culicueDivider.png')} alt="divider"/></span>
            Who I Am
            <span><img className='divider' src={require('./images/culicueDivider.png')} alt="divider"/></span>
          </h2>
        </div>
        <MyStory />
        <div id='projects-header'>
          <h2 className='section-header'>
            <span><img className='divider' src={require('./images/culicueDivider.png')} alt="divider"/></span>
            Some Projects
            <span><img className='divider' src={require('./images/culicueDivider.png')} alt="divider"/></span>
          </h2>
        </div>
        <Projects />
        <div id='contact-me-header'>
          <h2 className='section-header'>
            <span><img className='divider' src={require('./images/culicueDivider.png')} alt="divider"/></span>
            Contact Me
            <span><img className='divider' src={require('./images/culicueDivider.png')} alt="divider"/></span>
          </h2>
        <Contact />
        </div>
      </div>
    );
  }
}

export default App;
