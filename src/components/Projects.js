import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import projectsData from '../projects.json'

function Projects(props) {
  return (
    <Row xs={1} md={2} className="g-4">
    {projectsData.map((project) => (
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title> {project.name} </Card.Title>
            <Card.Text>
              <a href={project.link} >click on link!</a>
              <img src={project.image}></img>
              
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  )
}

 
export default Projects;