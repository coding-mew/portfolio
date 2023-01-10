import React from 'react'

function Projects() {
  return (
    <>
    <section className="projects" id="projects_nav">
    <div className="item1">
      <h3>what i do</h3>
      <h2>_some projects</h2>
      <p>Here are some projects I made, for further impressions view
        <br /> <a href="https://github.com/coding-mew" id="reference"> 
        <br /> <span className="text_green">&gt;_</span> github</a></p>
        <br />
        <br />
      </div>
  <div className="item2 projects_text">A short animation for highlighting letters with textflow
    <br />
    <br /><span className="text_green">&gt;_</span>
    <a href="https://github.com/coding-mew/lighting_animation.git" target="_blank">view on git </a>
  
  </div>
  <div className="item3 projects_pic"></div>
  <div className="item4 projects_pic"></div>
  <div className="item5 projects_text">Neumorphic elements flying in and presenting a minimalistic modern 3D effect on hovering
    <br />
    <br /><span className="text_green">&gt;_</span>
    <a href="https://github.com/coding-mew/neumorphic_buttons.git" target="_blank">view on git </a>
  </div>
  <div className="item6 projects_text">An example of a Bootstrap Webpage
    <br />
    <br /><span className="text_green">&gt;_</span>
    <a href="https://github.com/coding-mew/example_bootstrap.git
    " target="_blank">view on git </a>
  </div>
  <div className="item7 projects_pic"></div>
  </section>
   </>
  )
}

export default Projects