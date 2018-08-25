import React, { Component } from 'react';
import MainApp from './components/MainApp'
import SportsContainer from './components/SportsContainer'
import NFLContainer from './components/NFLContainer'
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
        return <NFLContainer/>
    }
  }

  toggleState() {
    this.setState({
      render: this.state.render === 'baseball' ? 'personal' : 'baseball'
    }, this.determineRenderedComponent)
  }

  render() {
    return (
      <div className='App'>
       {this.determineRenderedComponent()}
       <button onClick={this.toggleState}>Sports</button>
      </div>
      )
  }
}

export default App;
