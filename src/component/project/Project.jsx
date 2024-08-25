import { GitHub } from '@mui/icons-material';
import './Project.css';

const Project = ({ project }) => {
  return (
    <div className="project">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="projectImage"
      />
      <div className="layer">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <a href={project.link} className="project-category">
          <GitHub className="projecticon" />
        </a>
      </div>
    </div>
  );
};

export default Project;
