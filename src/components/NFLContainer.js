import React, { Component } from 'react';
import { members, allTeams } from './NFLLeagueMembersRef';
import NFLLeagueMember from './NFLLeagueMember';

const NFLContainer = () => {
  let names = Object.keys(members);
  let membersComponents = names.map(name => <NFLLeagueMember info={members[name]} name={name}/>);

  return (
      <div className='teams-list-grid'>
          {membersComponents}
      </div>
  )
}

export default NFLContainer;

