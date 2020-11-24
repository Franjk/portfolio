import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

import buttonColors from '../data/technologyButtonColors';

const ProjectCard = ({
  project: {
    image,
    name,
    description,
    technologies,
    livePreviewLink,
    githubLink
  }
}) => {
  // const image = props.project.image;
  // const name = props.project.name;
  return (
    <Card raised link style={{ marginBottom: '20px' }}>
      {/* as={Link}
      to={`/projects/${name}`} */}
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <h5>Technologies used:</h5>
        {technologies.map((tech) => (
          <Button
            key={tech}
            basic
            color={buttonColors[tech]}
            style={{ marginBottom: '4px' }}
          >
            {tech}
          </Button>
        ))}
      </Card.Content>
      <Card.Content extra>
        {livePreviewLink && (
          <Button as='a' href={livePreviewLink}>
            Live preview
          </Button>
        )}
        <Button as='a' href={githubLink}>
          Github
        </Button>
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
