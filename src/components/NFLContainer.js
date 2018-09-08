import React, { Component } from 'react';
import { members, allTeams } from './NFLLeagueMembersRef';
import NFLLeagueMember from './NFLMember';

const NFLContainer = () => {
  let membersList = members.sort((a, b) => b.currentScore() - a.currentScore())
  let membersComponents = membersList.map((member, i) => <NFLLeagueMember key={member.name} member={member}/>);
  let style = {
    fontSize: '2em'
  }
  return (
    <div id='nfl-container'>
      <div className='teams-list-grid'>
        {membersComponents}
      </div>
    </div>
  )
}

export default NFLContainer;

