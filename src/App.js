import React, { Component } from 'react';
import MainApp from './components/MainApp'
import SportsContainer from './components/SportsContainer'
import FootballContainer from './components/FootballContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      render: 'football'
    }

    this.determineRenderedComponent = this.determineRenderedComponent.bind(this)
    this.toggleState = this.toggleState.bind(this);
  }

  determineRenderedComponent() {
    if (this.state.render === 'personal') {
      return <MainApp/>
    } else if (this.state.render === 'baseball') {
      return <SportsContainer/>
    } else if (this.state.render === 'football') {
        return <FootballContainer/>
    }
  }

  toggleState(e) {
    let component = e.target.className.split(' ')[0];

    this.setState({
      render: this.state.render !== 'personal' ? 'personal' : component
    }, this.determineRenderedComponent)
  }

  render() {
    return (
      <div className='App'>
       {this.determineRenderedComponent()}
       <button className='baseball black-btn' onClick={this.toggleState}>Baseball</button>
       <button className='football black-btn' onClick={this.toggleState}>Football</button>
      </div>
      )
  }
}

export default App;
