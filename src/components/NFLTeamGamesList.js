import React from 'react'
import NFLTeamGame from './NFLTeamGame'

const NFLTeamGamesList = props => {
    let {games} = props;
    let {scores} = props

    console.log(scores)

    games = games.map(game => {
        if (scores.length === 0) return

        let gameScore = scores.filter(score => score.game.id === game.id);
        let outcome = gameScore[0].stats.Wins['#text'] === '1' ? 'win' : 'loss';

        return <NFLTeamGame key={game.id} data={game} abbr={props.abbr} outcome={outcome}/>
    })

    return (
        <div className='teams-list-grid nfl-list-grid team-box'>{games}</div>
    )
}

export default NFLTeamGamesList;
