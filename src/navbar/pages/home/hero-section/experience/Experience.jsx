import { useState } from 'react';
import '../experience/Experience.css';

export default function Experience() {
    const [borderState, setBorderState] = useState({});

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('left');
        else classes.push('right');

        if (y < rect.height / 2) classes.push('top');
        else classes.push('bottom');

        setBorderState(prev => ({ ...prev, [index]: classes.join(' ') }));
    };

    const handleMouseLeave = (index) => {
        setBorderState(prev => ({ ...prev, [index]: '' }));
    };

    const stats = [
        { number: "20k+", label: "Our Projects Completed" },
        { number: "10k+", label: "Our Natural Products" },
        { number: "200+", label: "Clients Reviews" },
        { number: "1,000+", label: "Our Satisfied Clients" }
    ];

    return (
        <div className="experience-container">

            {/* Left Big Card */}
            <div className="experience-main-card">
                <h1 className="experience-years">
                    <span className="experience-number">25</span>
                </h1>
                <p className="experience-label">Years of Experience</p>
                <p className="experience-description">
                    Business consulting consultants provide expert advice and guidance to the businesses.
                </p>
            </div>

            {/* Right Stats Cards */}
            <div className="experience-stats">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`stat-card service-card ${borderState[index] || ''}`}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <h2 className="stat-number">{item.number}</h2>
                        <p className="stat-label">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}