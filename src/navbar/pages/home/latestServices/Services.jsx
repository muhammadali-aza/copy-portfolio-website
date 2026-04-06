import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import latestServicesImage from '../../../../assets/latestservices/latest-services-user-image-two.webp';
import './Services.css';

const servicesData = [
    {
        number: '01',
        title: 'A Portfolio of Creativity',
        description: 'Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency'
    },
    {
        number: '02',
        title: 'Business Strategy',
        description: 'My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses'
    },
    {
        number: '03',
        title: 'Digital Excellence',
        description: 'Leverage cutting-edge technology to deliver exceptional digital solutions tailored to your needs.'
    }
];

export default function Services() {
    const [borderState, setBorderState] = useState({});
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const horizontal = x < rect.width / 2 ? 'left' : 'right';
        const vertical = y < rect.height / 2 ? 'top' : 'bottom';

        setBorderState((prevState) => ({ ...prevState, [index]: `${horizontal}-${vertical}` }));
    };

    const handleMouseLeave = (index) => {
        setBorderState((prevState) => ({ ...prevState, [index]: '' }));
    };

    // Variants for large screens - slide from left to right
    const lgCardVariants = {
        hidden: { opacity: 0, x: -123 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
        }),
    };

    // Variants for small screens - slide from top
    const smCardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
        }),
    };

    const cardVariants = isLargeScreen ? lgCardVariants : smCardVariants;

    return (
        <div className="services-container">
            <div className="services-wrapper">
                {/* Left Column - Service Cards */}
                <div className="services-left-column">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className={`service-card ${borderState[index] || ''}`}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            variants={cardVariants}
                        >
                            <h3 className="service-card-title">
                                <span>{service.number}.</span> {service.title}
                            </h3>
                            <p className="service-card-description">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column - Image Container */}
                <div className="services-right-column">
                    <div className="services-image-wrapper">
                        <img 
                            src={latestServicesImage}
                            alt="Latest Services" 
                            className="services-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}