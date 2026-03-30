import './Portfoioproject.css';
import { FiArrowUpRight } from "react-icons/fi";
import img1 from '../../../../../assets/project_image/mr-sing,s.jpg';
import img2 from '../../../../../assets/project_image/Behance.net.png';

export default function Portfolio_project() {
    const projects = [
        {
            title: "Digital Transformation Advisors",
            category: "Mr Singh's",
            img: img1,
            link: "https://mrsinghspizza.co.uk/food"
        },
        {
            title: "My work is driven by the belief that thoughtful",
            category: "Behance",
            img: img2,
            link: "https://www.behance.net/"
        }
    ];

    return (
        <div className="portfolio-containers">
            {projects.map((project, index) => (
                <div key={index} className="project-wrapper">
                    <div className="project-card">
                        <div className="card-glow"></div>
                        <p className="card-label">Personal Portfolio</p>
                        <div className="image-container">
                            <img src={project.img} alt={project.title} className="project-image" />
                        </div>
                    </div>

                    <div className="project-info">
                        <div className="text-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-category">{project.category}</p>
                        </div>
                        <div className="action-button">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <FiArrowUpRight />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}