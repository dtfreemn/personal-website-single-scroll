import React, { Component } from 'react'
import {members} from './members'
import Member from './Member'

class MembersContainer extends Component {
  constructor() {
    super();

    this.state = {
      members: members,
      leagueData: [],
    }

    this.renderMembers = this.renderMembers.bind(this);
    this.calculateCurrentScore = this.calculateCurrentScore.bind(this);
  }

  componentDidMount() {
    let counter = 1;

    const fetchSheetData = counter => {
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/1xTqb4sFOJEZYw4bmJG4t1xUSKUZ9BdBoeKFRgXRl3ww/values/Form%20Responses%20${counter}?key=AIzaSyBSnIEAR_d_V1fnYGFMdatK-I8Sdm1krqM`)
        .then(res => res.json())
        .then(data => {
          if (data.error) return;

          this.setState({leagueData: [...this.state.leagueData, data.values]}, () => {
            counter += 1;
            fetchSheetData(counter);
          });
        });
    };

    // fetchSheetData(counter)
  }

  renderMembers() {
    return members.map(member => {
      return <Member key={Object.keys(member)[0]} picks={member} score={this.calculateCurrentScore(member)}/>
    }).sort((a,b) => b.props.score - a.props.score)
  }

  calculateCurrentScore(member) {
    let name = Object.keys(member)[0]
    let weeks = Object.keys(member[name])
    let weekData = weeks.map(week => member[name][week])

    return weekData.reduce((final, week) => final + week.points, 0)
  }

  render() {
    return (
      <div className='teams-list-grid' >
        {this.renderMembers()}
      </div>
    )
  }
}

export default MembersContainer;
