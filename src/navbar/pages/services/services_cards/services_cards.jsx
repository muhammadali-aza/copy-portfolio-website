import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './services_cards.css';

const servicesData = [
    { id: '01.', title: 'Success Architects', description: 'Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency' },
    { id: '04.', title: 'Ui/visual Design', description: "I'm proud of what I've accomplished and excited to share my journey with you. I'm proud of what I've accomplished and excited to." },
    { id: '02.', title: 'Success Architects', description: 'App consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency' },
    { id: '05.', title: 'Branding Design', description: "Interested in working together? Let's bring your ideas to life! Contact me, and let's start building something amazing." },
    { id: '03.', title: 'Success Architects', description: 'I specialize in creating solutions that are not only visually engaging but also align with business goals. From [list services, e.g., branding' },
    { id: '06.', title: 'Motion Design', description: 'Feel free to browse through my recent projects. Each one showcases my approach and dedication to detail, creativity, and.' },
];

export default function Services_cards() {
    const [borderState, setBorderState] = useState({});
    const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const horizontal = x < rect.width / 2 ? 'left' : 'right';
        const vertical = y < rect.height / 2 ? 'top' : 'bottom';
        setBorderState((prev) => ({ ...prev, [index]: `${horizontal}-${vertical}` }));
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
        }),
    };

    return (
        <div className="services_section">
            <div className="services_grid">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => setBorderState((prev) => ({ ...prev, [index]: '' }))}
                        className={`services_card_item ${borderState[index] || ''}`}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        <div className="services_card_header">
                            <span className="service_id">{service.id}</span>
                            <h3 className="service_title">{service.title}</h3>
                        </div>
                        <p className="service_desc">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}