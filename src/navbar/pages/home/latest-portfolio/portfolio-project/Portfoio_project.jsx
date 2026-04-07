import './Portfoioproject.css';
import { FiArrowUpRight } from "react-icons/fi";
import img1 from '../../../../../assets/project_image/proect_1.webp';
import img2 from '../../../../../assets/project_image/proect_2.webp';
import img3 from '../../../../../assets/project_image/proect_3.webp';
import img4 from '../../../../../assets/project_image/proect_4.webp';
import { Link } from 'react-router-dom';
 
export default function Portfolio_project() {
  const projects = [
    {
        title: "Noir - Creative Portfolio HTML Template",
        category: "Web App",
        img: img1,
        link: '/project/projectdetails/projectdetails1'
    },
    {
        title: "Personal Portfolio HTML5 Template",
        category: "Web App",
        img: img2,
        link: '/project/projectdetails/projectdetails2'
    },
    {
        title: "Education Template For Vue Nuxt Template",
        category: "Online Learning and Education",
        img: img3,
        link: '/project/projectdetails/projectdetails3'
    },
    {
        title: "Harri – Electronics eCommerce Vue Nuxt 3 Template",
        category: "eCommerce",
        img: img4,
        link: '/project/projectdetails/projectdetails4'
    }
];
    return (
        <div className="portfolio-containers">
            {projects.map((project, index) => (
                <Link key={index} to={project.link} className="project-link">
                    <div className="project-wrapper">
                        <div className="project-card">
                            <div className="card-glow"></div>
                            <p className="card-label">Personal Portfolio</p>
                            <div className="image-container">
                                {project.img ? (
                                    <img src={project.img} alt={project.title} className="project-image" />
                                ) : null}
                            </div>
                        </div>

                        <div className="project-info">
                            <div className="text-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                            </div>
                            <div className="action-button">
                                <FiArrowUpRight />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}