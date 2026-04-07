import React, { useState } from 'react';
import './ServiceList.css';
import { FaCode } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import { LiaAngleRightSolid } from "react-icons/lia";

const services = [
  {
    id: 1,
    title: "Frontend",
    count: "45+ Projects Done",
    description: "Crafting interactive, responsive, and high-performance user interfaces with advanced animations and clean CSS.",
    icon: <FaCode />// Aap yahan FontAwesome ya Lucide icons use kar sakte hain
  },
  {
    id: 2,
    title: "Backend",
    count: "30+ Systems Built",
    description: "Designing scalable APIs, database schemas, and secure server-side logic for enterprise-grade applications.",
    icon: <FaConnectdevelop />
  },
  { 
    id: 3,
    title: "Full Stack",
    count: "5+ Years Exp",
    description: "Leading development teams to deliver end-to-end products from initial concept to final cloud deployment.",
    icon: <SiWebmoney />
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