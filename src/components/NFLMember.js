import React from 'react';

const NFLMember = (props) => {
  let {info} = props;
  let {teams} = info;
  let style = {
    fontWeight: 'bold'
  };
  let teamDivs = teams.map(team => {
    return (
      <div key={team.abbr}>
        <img className='nfl-logo' src={team.image()} alt={team.abbr}/>
        <div style={style}>
          Ws - {team.record()}
        </div>
        <br/>
      </div>
    )
  });

  return (
    <div className='team-box' style={style}>
      {info.name} - {info.currentScore()}
      <div className='grid-2'>
      {teamDivs}
      </div>
    </div>
  )
}

export default NFLMember;
