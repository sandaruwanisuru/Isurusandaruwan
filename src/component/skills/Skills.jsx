import './Skills.css';
import { FaJs, FaReact } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skillGrid">
        <div className="skillList">
          <FaJs className="icon" />
          <h3>JavaScript</h3>
          <ul>
            <li>DOM Manipulation</li>
            <li>Event handeling </li>
            <li>Closure</li>
            <li>Hoisting</li>
          </ul>
        </div>
        <div className="skillList">
          <FaReact className="icon" />
          <h3>React</h3>
          <ul>
            <li> Props</li>
            <li>useStates</li>
            <li>React Router</li>
            <li>Evet handeling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
