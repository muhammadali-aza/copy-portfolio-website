import React, { useState } from 'react';
import './ServiceList.css';
import { FaBuildingColumns } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { FaPenNib } from "react-icons/fa";
import { LiaAngleRightSolid } from "react-icons/lia";

const services = [
  {
    id: 1,
    title: "Ui/Visual Design",
    count: "21 Done",
    description: "My work is driven by the belief that thoughtful design and strategic planning can empower brands strategic planning can empower brands",
    icon: <FaBuildingColumns />// Aap yahan FontAwesome ya Lucide icons use kar sakte hain
  },
  {
    id: 2,
    title: "Ui/Visual Design",
    count: "21 Done",
    description: "In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design",
    icon: <CiCalendar />
  },
  { 
    id: 3,
    title: "Motion Design",
    count: "20 Done",
    description: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs",
    icon: <FaPenNib />
  }
];

export default function ServiceList() {
  const [activeIndex, setActiveIndex] = useState(0); // Pehla item by default active

  return (
    <div className="service-container">
      {services.map((service, index) => (
        <div 
          key={service.id} 
          className={`service-row ${activeIndex === index ? 'active' : ''}`}
          onMouseEnter={() => setActiveIndex(index)}
        >
          <div className="service-icon-wrapper">
            <div className="icon-circles">
               <span className='serivces-icon'>{service.icon}</span>
            </div>
          </div>

          <div className="service-title-section">
            <h3>{service.title}</h3>
            <p className="service-count">{service.count}</p>
          </div>

          <div className="service-desc-section">
            <p>{service.description}</p>
          </div>

          <div className="service-link-section">
            <a href="#" className="read-more">
              READ MORE <span ><LiaAngleRightSolid className="arrow"/></span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}