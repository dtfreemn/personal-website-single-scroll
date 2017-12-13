import React from 'react';

const ProjectItem = (props) => {
  return (
    <div id='single-project' className={props.project.className}>
      <img id='project-image' src={props.project.image} alt="project"/>
      <p id='proj-title'>{props.project.title}</p>
      <p id='proj-desc'>{props.project.description}</p>
      <p id='proj-url'><a href={props.project.url}>See on Github</a></p>
    </div>
  )
}

export default ProjectItem;