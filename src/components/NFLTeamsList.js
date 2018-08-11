import React from 'react'
import NFLTeam from './NFLTeam'

const NFLTeamsList = (props) => {
    let {teams} = props;

    teams = teams.map(team => <NFLTeam key={team.ID} data={team}/>)

    return (
        <div className='teams-list-grid nfl-list-grid'>{teams}</div>
    )
}

export default NFLTeamsList
