import React from 'react';

const ContactLinksContainer = (props) => {

  return (
    <div id='contact-links-container'>
      <a className='bottom-border' id='twitter' href="https://twitter.com/_timfreeman" target="_blank" rel="noopener noreferrer">
        <img className='small-img' src={require('../images/twitter.png')} alt='twitter'/>
      </a>
      <a className='bottom-border' id='email' href="mailto:d.timothy.freeman@gmail.com" target="_blank" rel="noopener noreferrer">
        <img className='small-img' src={require('../images/Gmail-1.png')} alt='email'/>
      </a>
      <a className='bottom-border' id='linkedin' href='https://linkedin.com/in/freemantim1/' target='_blank' rel="noopener noreferrer">
          <img src={require('../images/linkedin.png')} alt='linkedin'/>
      </a>
      <a id='facebook' href='https://www.facebook.com/tim.freeman.900' target='_blank' rel="noopener noreferrer">
          <img src={require('../images/facebook.png')} alt='facebook'/>
      </a>
      <a id='github' href='https://github.com/dtfreemn' target='_blank' rel="noopener noreferrer">
          <img style={{'borderRadius': '10px'}}src={require('../images/github.png')} alt='github'/>
      </a>
      <div id='phone'>646.<br/>438.<br/>2736</div>
    
    </div>
  )
}

export default ContactLinksContainer;