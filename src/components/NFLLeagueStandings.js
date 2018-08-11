import React from 'react'
import {members} from './NFLLeagueStandings'

const NFLLeagueStandings = props => {

    const fetchGames = (abbr) => {
        return fetch(`https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/team_gamelogs.json?team=${abbr.toLowerCase()}&teamstats=W`, {
          headers: {
            'Authorization': `Basic ZHRmcmVlbW46ZG9ubmllMzE=`
          },
          dataType: 'json',
          async: false,
          data: 'fetched'
        }).then(resp => resp.json()).then(data => console.log(data));
    }

    // fetchGames('DET')
    console.log(props)

    return (
        <div>League</div>
    )
}

export default NFLLeagueStandings
