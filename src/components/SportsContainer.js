import React, { Component } from 'react';
import TeamsContainer from './TeamsContainer'
import MembersContainer from './MembersContainer'
import MemberSelect from './MemberSelect'
import RemainingTeams from './RemainingTeams'
import '../App.css';
import '../Survivor.css'
import { members, allTeams } from  './members'

class SportsContainer extends Component {

  constructor() {
    super()

    this.state = {
      render: 'games',
      selectedMember: '',
      selectedMemberTeams: []
    }

    this.determineRenderedContainer = this.determineRenderedContainer.bind(this)
    this.toggleState = this.toggleState.bind(this)
    this.renderSelectedMembersPicks = this.renderSelectedMembersPicks.bind(this)
    this.handleSelectedMemberChange = this.handleSelectedMemberChange.bind(this)
  }

  determineRenderedContainer() {
    if (this.state.render === 'games') {
      return <TeamsContainer/>
    } else if (this.state.render === 'members') {
      return <MembersContainer/>
    }
  }

  toggleState() {
    this.setState({
      render: this.state.render === 'members' ? 'games' : 'members'
    }, this.determineRenderedContainer)
  }

  renderSelectedMembersPicks(allTeams, members, selectedMember) {
    if (selectedMember && selectedMember !== '') {
      let memberObject = {};

      members.map(member => {
        let name = Object.keys(member)[0];
        return memberObject[name] = member[name];
      });

      let picks = memberObject[selectedMember];
      let teams = {};
      Object.keys(allTeams).forEach(team => teams[team] = true);
      Object.keys(picks).forEach(week => teams[picks[week].winner] = false);

      let finalTeams = Object.keys(teams)
        .filter(team => teams[team])
        .map(team => <div className='small'>{team}</div>);

      this.setState({selectedMember: selectedMember, selectedMemberTeams: finalTeams});
    }
  }

  handleSelectedMemberChange(member) {
    if (member !== '') {
      this.renderSelectedMembersPicks(allTeams, members, member);
    } else {
      this.setState({selectedMember: '', selectedMemberTeams: []});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header three-col-grid sticky">
        <div>
          <MemberSelect members={members} handleChange={this.handleSelectedMemberChange}/>
          <span className>
            {this.state.selectedMember !== ''
              ? ', you can pick any of the following teams:'
              : ''
            }
          </span>
          <div>
            <RemainingTeams teams={this.state.selectedMemberTeams}/>
          </div>
        </div>
        <span>
          <h1 className="App-title">Soltman's Survivor League</h1>
          <button onClick={this.toggleState}>Show me {this.state.render === 'members' ? 'Games' : 'Survivor League Standings'}</button>
        </span>
        </header>
        {this.determineRenderedContainer()}
      </div>
    );
  }
}

export default SportsContainer;
