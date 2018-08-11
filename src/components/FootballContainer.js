import React from 'react'
import NFLTeamsList from './NFLTeamsList'
import NFLLeagueStandings from './NFLLeagueStandings'

class FootballContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            teams: [],
            show: 'teams'
        }

        this.fetchTeams = this.fetchTeams.bind(this);
        this.setTeamsToState = this.setTeamsToState.bind(this);
        this.toggleState = this.toggleState.bind(this);
    }

    componentDidMount() {
        this.fetchTeams();
    }

    fetchTeams() {
        return fetch(`https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/overall_team_standings.json`, {
          headers: {
            'Authorization': `Basic ZHRmcmVlbW46ZG9ubmllMzE=`
          },
          dataType: 'json',
          async: false,
          data: 'fetched'
        }).then(resp => resp.json()).then(data => this.setTeamsToState(data.overallteamstandings.teamstandingsentry));
    }

    setTeamsToState(data) {
        this.setState({
            teams: data.map(entry => entry.team)
        });
    }

    toggleState() {
        this.setState({show: this.state.show === 'teams' ? 'league' : 'teams'});
    }

    render() {
        let component = this.state.show === 'teams' ? <NFLTeamsList teams={this.state.teams}/> : <NFLLeagueStandings teams={this.state.teams}/>
        return (
            <div>
                <button className='black-btn' onClick={this.toggleState}>Show</button>
                {component}
            </div>
        )
    }
}

export default FootballContainer
