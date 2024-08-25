// Projects.js
import { useState } from 'react';
import './Projects.css';
import Project from '../project/Project';
import movie from '../../assets/movie.png';
import studentapp from '../../assets/studentapp.png';
import shoppingApp from '../../assets/shoppingApp.png';
import weatherApp from '../../assets/weatherApp.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All Projects');

  const projectList = [
    {
      title: 'Student Grading App',
      description:
        "An app allows the Students and Teachers to see students' results. A web application built with React, MongoDB, and Express, handles CRUD operations.",
      imageUrl: studentapp,
      category: 'React Projects',
      link: 'https://github.com/sandaruwanisuru/student-grading',
    },
    {
      title: 'Movie App',
      description:
        'An interactive app allowing users to search for movies, display posters, and manage a favorites list, utilizing React, CSS, and REST APIs.',
      imageUrl: movie,
      category: 'React Projects',
      link: 'https://github.com/sandaruwanisuru/movies',
    },
    {
      title: 'Commercial Website',
      description:
        'An e-commerce platform for a spectacles store, featuring product display, price filtering, and a cart system using React and CSS',
      imageUrl: shoppingApp,
      category: 'React Projects',
      link: 'https://github.com/sandaruwanisuru/shopping-App',
    },
    {
      title: 'Weather app ',
      description:
        'A weather app using rest API, displaying city, temperature and weather mode.',
      imageUrl: weatherApp,
      category: 'Javascript',
      link: 'https://github.com/sandaruwanisuru/weather-app1',
    },
  ];

  const filteredProjects = projectList.filter(
    (project) => activeTab === 'All Projects' || project.category === activeTab
  );

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'All Projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('All Projects')}
        >
          All Projects
        </button>
        <button
          className={`tab ${activeTab === 'React Projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('React Projects')}
        >
          React Projects
        </button>
        <button
          className={`tab ${activeTab === 'Javascript' ? 'active' : ''}`}
          onClick={() => setActiveTab('Javascript')}
        >
          Javascript
        </button>
      </div>
      <div className="projectsContent">
        {filteredProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
