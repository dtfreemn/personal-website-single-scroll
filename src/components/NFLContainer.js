import React, { Component } from 'react';
import { members, allTeams } from './NFLLeagueMembersRef';
import NFLLeagueMember from './NFLMember';

const NFLContainer = () => {
  let names = Object.keys(members);
  let membersList = names.map(name => members[name]);
  membersList = membersList.sort((a, b) => b.currentScore() - a.currentScore())
  let membersComponents = membersList.map((member, i) => <NFLLeagueMember key={member.name} info={member}/>);

  return (
      <div className='teams-list-grid'>
          {membersComponents}
      </div>
  )
}

export default NFLContainer;

