import React, { Component } from 'react';
import MainApp from './components/MainApp'
import SportsContainer from './components/SportsContainer'
import NFLContainer from './components/NFLContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      render: 'personal'
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

  toggleState(e) {
    this.setState({
      render: e.target.id
    }, this.determineRenderedComponent)
  }

  render() {
    return (
      <div className='App'>
       {this.determineRenderedComponent()}
       <button className='container-toggle' id='baseball' onClick={this.toggleState}>Baseball</button>
       <button className='container-toggle' id='football' onClick={this.toggleState}>Football</button>
       <button className='container-toggle' id='personal' onClick={this.toggleState}>Personal</button>
      </div>
      )
  }
}

export default App;
