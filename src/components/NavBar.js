import React from 'react';
import * as Scroll from 'react-scroll'

let scroller = Scroll.scroller

class NavBar extends React.Component {

  handleScroll = (e) => {
    switch (e.target.id) {
      case 'about-link':
        scroller.scrollTo('my-story', {duration: 1500, smooth: true, offset: -150, isDynamic: true});
        break;
      case 'project-link':
        scroller.scrollTo('projects', {duration: 2000, smooth: true, offset: -180});
        break;
      case 'contact-link':
        scroller.scrollTo('contact', {duration: 2000, smooth: true});
        break;
    }
  }

  render() {
    return (
      <div id="nav-bar" onClick={this.handleScroll}>
        <div id='about-link'>About Me</div>
        <div id='project-link'>Some Projects</div>
        <div></div>
        <a href="https://docs.google.com/document/d/1cQs01ul_uAYG2zCaAkSyJfFAWQCSQsavPFGwanRUfIE/preview" target='_blank' rel="noopener noreferrer">Resume</a>
        <div id='contact-link'>Contact</div>
      </div>
    )
  }
}

export default NavBar;