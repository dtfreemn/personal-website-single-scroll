import React, { Component } from 'react';
import { members } from './NFLLeagueMembersRef';
import NFLLeagueMember from './NFLMember';

class NFLContainer extends Component {
  constructor() {
    super();

    this.state = {
      leagueMembers: []
    }
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    this.renderStandings();
  }

  fetchRecords() {
    return fetch(`https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/overall_team_standings.json`, {
      headers: {
        'Authorization': `Basic ZHRmcmVlbW46ZG9ubmllMzE=`
      },
      dataType: 'json',
      async: false,
      data: 'fetched'
    });
  }

  renderStandings() {
    return this.fetchRecords()
      .then(resp => resp.json())
      .then(data => this.makeRecordsMap(data.overallteamstandings.teamstandingsentry))
      .then(records => this.makeMemberComponents(records))
      .then(leagueMembers => this.setState({leagueMembers}))
  }

  makeMemberComponents(records) {
    let membersList = members.sort((a, b) => b.currentScore() - a.currentScore());
    return membersList.map((member, i) => {
      member.teams.forEach(team => team.record = records[team.abbr]);
      member.currentScore = member.teams.reduce((acc, team) => acc += team.record, 0);
      return <NFLLeagueMember key={member.name} member={member}/>
    });
  }

  makeRecordsMap(teams) {
    return teams.reduce((obj,team) => {
      obj[team.team.Abbreviation] = parseInt(team.stats.Wins['#text'], 10);
      return obj
    }, {});
  };

  render() {
    if (this.state.leagueMembers.length > 0) {
      return (
        <div id='nfl-container'>
          <div className='teams-list-grid-4'>
            {this.state.leagueMembers}
          </div>
        </div>
      )
    } else {
      return (
        <div><img className='loader' src={require('../football-loader.gif')} alt='loader'/></div>
      )
    }
  }
}

export default NFLContainer;

