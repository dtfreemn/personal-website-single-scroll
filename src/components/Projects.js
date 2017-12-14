import React from 'react';
import ProjectItem from './ProjectItem'

let projects = [{
    title: "eVALUEate",
    description: "A simple to use employee evaluation management system through which companies can create, execute, and track the data of their internal employee reviews",
    image: require("../images/evaluate.png"),
    url: 'https://github.com/dtfreemn/evaluator-react-redux',
    className: ''
  },
  {
    title: "Moodboards",
    description: "A project management tool for creatives. Create projects, add idea boards, add images, and collaborate with teammates via comments.",
    image: require('../images/moodboards.png'),
    url: 'https://moodboards-inc.herokuapp.com/',
    className: 'white'
  },
  {
    title: "TripTracker",
    description: 'A trip planning tool that utilizes the free version of the Yelp API. Select a Yelp city, set a budget, and start adding things to do to your trip!',
    image: require('../images/trip-tracker.png'),
    url: 'https://github.com/dtfreemn/module-4-project-react',
    className: ''
  }]



class Projects extends React.Component {
  
  state = {
    projects: projects,
    currentProject: 0
  }

  handleNextClick = (e) => {
    if (e.target.id === 'next-button') {
      if (this.state.currentProject === this.state.projects.length - 1) {
        this.setState({currentProject: 0})
      } else {
        this.setState({currentProject: this.state.currentProject + 1})
      }
    } else if (e.target.id === 'back-button') {
      if (this.state.currentProject === 0) {
        this.setState({currentProject: this.state.projects.length - 1})
      } else {
        this.setState({currentProject: this.state.currentProject - 1})
      }
    }
  }

  render() {
    return (
      <div id='projects' className='container' onClick={this.handleNextClick}>
        <ProjectItem project={this.state.projects[this.state.currentProject]} />
        <img className='next-button' id='next-button' src={require('../images/back-arrow.png')} alt='back-button'/>
        <img className='next-button' id='back-button' src={require('../images/next-arrow.png')} alt='next-button'/>
      </div>
    )
  }
}

export default Projects;