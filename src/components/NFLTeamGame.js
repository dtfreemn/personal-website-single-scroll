import React from 'react'

const NFLTeamGame = props => {
    let {data} = props;
    let game = (game) => {
        let homeOrAway = game.awayTeam.Abbreviation === props.abbr ? 'A' : 'H';
        let opponent = homeOrAway === 'H' ? game['awayTeam'] : game['homeTeam'];
        let prefix = homeOrAway === 'H' ? 'vs' : '@';

        return `${game.week}: ${prefix} ${opponent.Abbreviation}`
    }

    let className = `small ${props.outcome}`;

    return (
        <div className={className}>{game(data)}</div>
    )
}

export default NFLTeamGame;
