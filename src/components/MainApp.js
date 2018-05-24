import React from 'react'
import NavBar from './NavBar'
import Intro from './Intro'
import MyStory from './MyStory'
import Projects from './Projects'
import Contact from './Contact'

const MainApp = props => {

  return (
      <div>
        <div>
          <NavBar />
        <Intro />
        <div id='my-story-header' name='my-story-header'>
          <h2 className='section-header'>
            <span><img className='divider' src={require('../images/culicueDivider.png')} alt="divider"/></span>
            Who I Am
            <span><img className='divider' src={require('../images/culicueDivider.png')} alt="divider"/></span>
          </h2>
        </div>
        <MyStory />
        <div id='projects-header'>
          <h2 className='section-header'>
            <span><img className='divider' src={require('../images/culicueDivider.png')} alt="divider"/></span>
            Some Projects
            <span><img className='divider' src={require('../images/culicueDivider.png')} alt="divider"/></span>
          </h2>
        </div>
        <Projects />
        <div id='contact-me-header'>
          <h2 className='section-header'>
            <span><img className='divider' src={require('../images/culicueDivider.png')} alt="divider"/></span>
            Contact Me
            <span><img className='divider' src={require('../images/culicueDivider.png')} alt="divider"/></span>
          </h2>
        <Contact />
        </div>
        <div id='sign-off'>Tim Freeman ©2017</div>
      </div>
      </div>
  )
}

export default MainApp