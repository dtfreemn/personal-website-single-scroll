import React from 'react'
import NFLTeamGamesList from './NFLTeamGamesList'

class NFLTeam extends React.Component {
  constructor() {
    super();

    this.state = {
        clicked: false,
        games: [],
        scores: [],
        data: {},
        error: false
    }

    this.fetchGames = this.fetchGames.bind(this);
    this.fetchScores = this.fetchScores.bind(this);
  }

  componentDidMount() {
    if (this.props && this.props.data) {
        this.setState({data: this.props.data})
    }
  }

  fetchGames() {
    if (this.state.games.length > 0) {
        this.setState({clicked: !this.state.clicked});
    } else {

      let abbr = this.state.data.Abbreviation;

      return fetch(`https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/full_game_schedule.json?team=${abbr.toLowerCase()}`, {
        headers: {
          'Authorization': `Basic ZHRmcmVlbW46ZG9ubmllMzE=`
        },
        dataType: 'json',
        async: false,
        data: 'fetched'
      })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
              games: data.fullgameschedule.gameentry,
              clicked: !this.state.clicked
            }, () => this.fetchScores())
        });
    }
  }

  fetchScores() {
    return fetch(`https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/team_gamelogs.json?team=${this.state.data.ID}&teamstats=W`, {
      headers: {
        'Authorization': `Basic ZHRmcmVlbW46ZG9ubmllMzE=`
      },
      dataType: 'json',
      async: false,
      data: 'fetched'
    })
      .then(resp => resp.json()).then(data => this.setState({scores: data.teamgamelogs.gamelogs, error: false}))
      .catch(error => {
        this.setState({error: true}, () => setTimeout(this.fetchScores, 4000))
      });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <div>
            Waiting for the data. When it's free, it's slow. Sorry.
            <div><img className='tombrady' src={require('../tombrady.gif')}/></div>
          </div>
        </div>
      )
    } else if (Object.keys(this.state.data).length > 0 && !this.state.clicked) {
      return (
          <div className='team-box' key={this.state.data.Name}>
              <span>
                  <img src={`http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.state.data.Abbreviation.toLowerCase()}.png&h=150&w=150`}/>
                  <button className='black-btn' onClick={this.fetchGames}>
                    {!this.state.clicked ? 'See Schedule' : 'Close Schedule'}
                  </button>
              </span>
          </div>
      )
    } else if (this.state.clicked && this.state.data) {
      return (
        <div>
          <NFLTeamGamesList abbr={this.state.data.Abbreviation} games={this.state.games} scores={this.state.scores}/>
          <button className='black-btn small' onClick={this.fetchGames}>
            {!this.state.clicked ? 'See Schedule' : 'Close Schedule'}
          </button>
        </div>
      )
    } else {
      return <div>Fetching games and scores...</div>
    }
  }
}

export default NFLTeam;
