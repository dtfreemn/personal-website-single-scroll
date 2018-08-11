import React from 'react'

class FootballContainer extends React.Component {


    constructor() {
        super()

        this.state = {
            teams: []
        }

        this.fetchTeams = this.fetchTeams.bind(this)
        this.setTeamsToState = this.setTeamsToState.bind(this)
    }

    componentDidMount() {
        this.fetchTeams()
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
        })
    }

    render() {
        return (
            <div>Inside football container</div>
        )
    }
}

export default FootballContainer
