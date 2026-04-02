import React, { useEffect, useRef, useState } from 'react';
import './about_experience_2.css';
import img from '../../../../assets/expert-img-two.webp'

export default function About_experience_2() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "experience",
      name: "Fatima Asrafy",
      designation: "UI/UX Designer",
      description: "Duis aute irure dolor in reprehenderit..."
    },
    {
      role: "experience",
      name: "Fatima Asrafy",
      designation: "UI/UX Designer",
      description: "Interested in working together? Let's bring your ideas to life!"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`experience_2-section ${visible ? 'show' : ''}`}
    >
      <div className="experience_2-container">
        
        <div className="experience_2image-wrapper">
          <div className="experience_2image-container">
            <img src={img} alt="" className="experience_2-image" />
          </div>
        </div>

        <div className="experience_2-content-wrapper">
          <h2 className="experience_2-section-title">Experiences</h2>

          <div className="experience_2-experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience_2-item">
                <span>{exp.role}</span>
                <h3>{exp.name}</h3>
                <p>{exp.designation}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}