import { useState, useEffect, useRef } from 'react';
import './about_experience.css';

export default function About_experience() {
    const [borderState, setBorderState] = useState({});
    const [animatedNumbers, setAnimatedNumbers] = useState({});
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

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

    // Intersection Observer to trigger animation when in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Counting animation function
    const animateNumber = (targetNumber, key, duration = 2000) => {
        const start = performance.now();
        const startValue = 0;
        let cleanValue = targetNumber.toLowerCase().replace(/,/g, '').replace('+', '');

        let multiplier = 1;
        if (cleanValue.includes('k')) {
            multiplier = 1000;
            cleanValue = cleanValue.replace('k', '');
        }

        const endValue = Number(cleanValue) * multiplier;
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
            
            let displayValue;
            if (targetNumber.toLowerCase().includes('k')) {
                displayValue = Math.floor(currentValue / 1000) + 'k';
            } else {
                displayValue = currentValue.toLocaleString();
            }

            if (targetNumber.includes('+')) {
                displayValue += '+';
            }

            setAnimatedNumbers(prev => ({
                ...prev,
                [key]: displayValue
            }));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    // Trigger counting animations when component becomes visible
    useEffect(() => {
        if (isVisible) {
            const statsData = [
                { number: "20k+", label: "Our Projects Completed" },
                { number: "10k+", label: "Our Natural Products" },
                { number: "200+", label: "Clients Reviews" },
                { number: "1,000+", label: "Our Satisfied Clients" }
            ];

            statsData.forEach((item, index) => {
                setTimeout(() => {
                    animateNumber(item.number, `stat-${index}`);
                }, index * 200);
            });

            // Animate the main experience number
            setTimeout(() => {
                animateNumber("25", "main-experience");
            }, 800);
        }
    }, [isVisible]);

    const stats = [
        { number: "20k+", label: "Our Projects Completed" },
        { number: "10k+", label: "Our Natural Products" },
        { number: "200+", label: "Clients Reviews" },
        { number: "1,000+", label: "Our Satisfied Clients" }
    ];

    return (
        <div ref={containerRef} className="experience-containers">
            {/* Left Big Card */}
            <div className="experience-main-card">
                <h1 className="experience-years">
                    <span className={`experience-number ${isVisible ? 'animate-slide-up' : ''}`}>
                        {animatedNumbers['main-experience'] || '0'}
                    </span>
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
                        className={`stat-card service-card ${borderState[index] || ''} ${isVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <h2 className="stat-number">{animatedNumbers[`stat-${index}`] || '0'}</h2>
                        <p className="stat-label">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}