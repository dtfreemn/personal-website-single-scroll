import React from 'react';

const Intro = (props) => {

  return (
    <div id="intro" className="container">
      <img id="headshot" src={require("../images/headshot.JPG")} alt="headshot"/>
      <ul id='intro-blurb'>
        <li id='name'>Tim Freeman</li>
        <li id='devloper'>Full Stack Developer</li>
        <li id='brooklyn'>Brooklyn, NY</li>
        <li className="hidden">.</li>
        <li>
          <a href='http://www.memphis.edu/' target='_blank' rel="noopener noreferrer">
            <img className='left' src={require("../images/uofm-logo.png")} alt="memphis"/>
          </a>
          <a href='https://flatironschool.com/' target='_blank' rel="noopener noreferrer">
            <img className='right' src={require("../images/flatiron-logo.png")} alt="flatiron"/>
          </a>
        </li>
      </ul>
      <div id='tools-links-container'>
        <a className='home-link-img' id='javascript' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src={require("../images/javascript.svg.png")} alt="javascript"/><span className='appear javascript-logo'>Java<br/>Script</span></a>
        <a className='home-link-img' id='rails'href="http://rubyonrails.org/" target="_blank" rel="noopener noreferrer"><img className='tools-img' src={require("../images/rails.png")} alt="rails"/><span className='appear'>Rails</span></a>
        <a className='home-link-img' id='ruby' href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer"><img className='tools-img' src={require("../images/ruby.png")} alt="ruby"/><span className='appear'>Ruby</span></a>
        <a className='home-link-img' id='react' href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img className='tools-img' src={require("../images/reactjs.png")} alt="react"/><span className='appear'>React</span></a>
        <a className='home-link-img' id='redux' href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><img className='tools-img' src={require("../images/redux.png")} alt="redux"/><span className='appear'>Redux</span></a>
        <a className='home-link-img' id='html' href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img className='tools-img' src={require("../images/html.png")} alt="html"/><span className='appear'>HTML</span></a>
        <a className='home-link-img' id='css' href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img className='tools-img' src={require("../images/css-logo.png")} alt="css"/><span className='appear'>CSS</span></a>
      </div>
      <img id='scroll-hand' src={require("../images/down-hand.png")} alt="scroll"/>
    </div>
  )
}

export default Intro;