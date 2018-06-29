import React, { Component } from 'react';

const RemainingTeams = (props) => {
  return (
    <span className='five-col-grid scroll'>
    {props.teams}
    </span>
  )
}

export default RemainingTeams;