import React, { Component } from 'react';

const NFLMember = (props) => {
  let {info} = props;
  let {teams} = info;
  let teamDivs = teams.map(team => {
    return (
      <div>
        {team.abbr}
        <div>
          W's - {team.record()}
        </div>
        <br/>
      </div>
    )
  });
  let currentScore = teams.map(team => team.record()).reduce((acc, val) => acc += val);

  // console.log(info.teams[0].record());
  return (
    <div className='team-box'>
      {props.name} - {currentScore}
      <div className='grid-2'>
      {teamDivs}
      </div>
    </div>
  )
}

export default NFLMember;
