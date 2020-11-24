import React from 'react';
import { Card, Header } from 'semantic-ui-react';

import ProjectCard from '../components/ProjectCard';
import projectData from '../data/projectData';

const Projects = () => {
  return (
    <>
      <Card.Group centered>
        {projectData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Card.Group>
    </>
  );
};

export default Projects;
