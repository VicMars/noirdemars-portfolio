import React from 'react'


function ProjectCard(props) {

  return (

    <div className="project-card-container">
      <div className="project-card">
        <div className="project-card-photo">
          <img src={props.imgUrl} alt="{props.imgAlt}"/>
        </div>

        <div className="project-card-content">
          <h3> {props.name} </h3>
          <p> {props.title} </p>
          <p> {props.description} </p>
          <p> {props.tool1}<br/>{props.tool2}<br/>{props.tool3}<br/>{props.tool4} </p>
          <p> <a href={props.projectLink} target="_blank" rel="noreferrer" className="project-card-link">{props.projectLinkTitle}</a> </p>
        </div>
      </div>
    </div>

  )
}

export default ProjectCard
