import React from 'react'

class MemberSelect extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      selectedMember: ''
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }
  
  handleFilterChange(event) {
    this.setState({selectedMember: event.target.value})
    this.props.handleChange(event.target.value)
  }

  render() {
    return (
      <select name="membersToggle" id="membersToggle" onChange={this.handleFilterChange}>
        <option value="">?Who can I pick</option>
        {this.props.members.map(member => {
          let name = Object.keys(member)[0];
          return <option value={name} key={name}>{name}</option>
        })}
      </select>
    )
  }
}

export default MemberSelect