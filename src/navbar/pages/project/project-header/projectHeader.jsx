import './projectHeader.css';
import project1 from '../../../../assets/mr-sing,s.jpg';
import project2 from '../../../../assets/Behance.net.png';
import project3 from '../../../../assets/zyappy-mobile-app.jpg';
import project4 from '../../../../assets/sixn.png';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ProjectDetails from './project-details/projectDetails';

export default function ProjectHeader() {
  const projects = [
    {
      id: 1,
      title: "Mr. Singh's",
      category: "Development",
      imageUrl: project1,
      links: "https://mrsinghspizza.co.uk/food"
    },
    {
      id: 2,
      title: "ZYAPPY Web",
      category: "Development",
      imageUrl: project2,
      links: "https://www.behance.net/"
    },
      {
      id: 3,
      title: "ZYAPPY Mobile App",
      category: "Development",
      imageUrl: project3,
      links: "https://posstagging.zyappy.com/login"
    },
      {
      id: 4,
      title: "SixN",
      category: "Development",
      imageUrl: project4,
      links: "https://www.exactflow.pl/en"
    }
  ];

  return (
    <div className="project-header-container">
      <div className="project-header-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-header-card">
            
            {/* Hover Slide Image Container */}
            <div className="project-header-image-wrapper hover-container">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-header-image main-image"
              />
              <div className="two-images-group">
                <img src={project.imageUrl} alt={`${project.title} slide`} />
              </div>
              
              <Link to={project.links} target="_blank"><MdArrowOutward className="project-header-arrow-icon" /></Link>
            </div>

            <div className="project-header-content">
              <h3 className="project-header-title">{project.title}</h3>
              <p className="project-header-category">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
      <ProjectDetails />
    </div>
  );
}