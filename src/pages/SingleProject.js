import React from 'react';
// import { image } from 'semantic-ui-react';

import projectData from '../data/projectData';

const SingleProject = ({ match }) => {
  const project = projectData.find((pj) => pj.name === match.params.projectId);

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default SingleProject;
