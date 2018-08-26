import React from 'react';

const NFLMember = (props) => {
  let {member} = props;
  let {teams} = member;
  let style = {
    fontWeight: 'bold',
    fontSize: '1.3em'
  };
  let teamDivs = teams.map(team => {
    return (
      <div key={team.abbr}>
        <img className='nfl-logo' src={team.image()} alt={team.abbr}/>
        <div style={style}>
          {team.record()}
        </div>
        <br/>
      </div>
    )
  });

  return (
    <div className='team-box round' style={style}>
      <span style={style}>{member.name} - {member.currentScore()}</span>
      <div className='grid-2'>
        {teamDivs}
      </div>
    </div>
  )
}

export default NFLMember;
