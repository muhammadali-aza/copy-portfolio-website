import { motion } from 'framer-motion';
import './about_skill.css';

export default function AboutSkill() {
    const designSkills = [
        { name: 'DEVELOPMENT', percentage: 90 },
        { name: 'WEBFLOW', percentage: 75 },
        { name: 'DEPLOYMENTS/DEVOPS', percentage: 85 },
        { name: 'AI MODEL TRAINING', percentage: 90 },
    ];

    const developmentSkills = [
        { name: 'DEVELOPMENT', percentage: 90 },
        { name: 'WEBFLOW', percentage: 75 },
        { name: 'DEPLOYMENTS/DEVOPS', percentage: 85 },
        { name: 'AI MODEL TRAINING', percentage: 90 },
    ];

    const SkillBar = ({ name, percentage, delay }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay, ease: 'easeOut' }}
                className="about-skill-bar"
            >
                <div className="about-skill-bar-header">
                    <span className="about-skill-bar-title">
                        {name}
                    </span>
                    <span className="about-skill-bar-percentage">
                        {percentage}%
                    </span>
                </div>
                <div className="about-skill-bar-bg">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
                        className="about-skill-bar-fill"
                    />
                </div>
            </motion.div>
        );
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
        }),
    };

    return (
        <div className="about-skill-container">
            <section className="about-skill-section">
                <div className="about-skill-grid">
                    {/* Design Skills Column */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0}
                        variants={cardVariants}
                        className="about-skill-card-wrapper"
                    >
                        <div className="about-skill-card">
                            <h3 className="about-skill-title">
                                <span>Design</span> Skills
                            </h3>
                            <div className="about-skill-list">
                                {designSkills.map((skill, index) => (
                                    <SkillBar
                                        key={index}
                                        name={skill.name}
                                        percentage={skill.percentage}
                                        delay={index * 0.1}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Development Skills Column */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={1}
                        variants={cardVariants}
                        className="about-skill-card-wrapper"
                    >
                        <div className="about-skill-card">
                            <h3 className="about-skill-title">
                                <span>Development</span> Skills
                            </h3>
                            <div className="about-skill-list">
                                {developmentSkills.map((skill, index) => (
                                    <SkillBar
                                        key={index}
                                        name={skill.name}
                                        percentage={skill.percentage}
                                        delay={index * 0.1}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}