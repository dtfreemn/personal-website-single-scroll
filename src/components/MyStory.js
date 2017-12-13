import React from 'react';

const MyStory = (props) => {

  return (
    <div id='my-story' className='container'>
      <div id='growing-up'>
        <img src={require('../images/tennessee.gif')} alt=""/>
        <p>I grew up just outside of Nashville, TN and went to college at the University of Memphis.
        </p>
      </div>
      <div id='chicago-madrid'>
        <img id='chicago' src={require('../images/chicago.jpg')} alt=""/>
        <img id='madrid' src={require('../images/madrid.jpg')} alt=""/>
        <p>Then, I taught high school for two years in Chicago and elementary school for one year in Madrid.</p>
      </div>
      <div id='nyc-time'>
        <img id='nyc' src={require('../images/nyc.png')} alt=""/>
        <p>I have lived in NYC since 2011, teaching high school in Harlem until July 2017.</p>
      </div>
      <div id='flatiron-time'>
        <img id='code-pic' src={require('../images/code.jpg')} alt=""/>
        <p>Now, I am a full stack software engineer seeking opportunities to grow and learn as a developer.</p>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default MyStory;