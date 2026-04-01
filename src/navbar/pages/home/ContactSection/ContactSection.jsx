import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './ContactSection.css';

export default function ContactSection() {
    const [contactHoverClass, setContactHoverClass] = useState('');

    const handleContactMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('hover-left');
        else classes.push('hover-right');

        if (y < rect.height / 2) classes.push('hover-top');
        else classes.push('hover-bottom');

        setContactHoverClass(classes.join(' '));
    };

    const handleContactMouseLeave = () => {
        setContactHoverClass('');
    };

    return (
        <section className="contact-wrapper">
            <div className="contact-inner-container">
                <div
                    className={`contact-main-card directional-effect ${contactHoverClass}`}
                    onMouseMove={handleContactMouseMove}
                    onMouseLeave={handleContactMouseLeave}
                >
                    {/* Left Text Content */}
                    <div className="contact-text-content">
                        <span className="contact-subheading">GET IN TOUCH</span>
                        <h2 className="contact-heading">Elevate your brand<br />with Me</h2>
                        <p className="contact-description">
                            ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted
                        </p>
                    </div>

                    {/* Right Form Content */}
                    <form className="contact-form-section" onSubmit={(e) => e.preventDefault()}>
                        {/* Input Grid */}
                        <div className="contact-grid-layout">
                            <input type="text" placeholder="Your Name" className="contact-input-field" required />
                            <input type="tel" placeholder="Phone Number" className="contact-input-field" required />
                            <input type="email" placeholder="Your Email" className="contact-input-field" required />
                            <input type="text" placeholder="Subject" className="contact-input-field" />
                        </div>

                        {/* Textarea */}
                        <textarea
                            placeholder="Your Message"
                            className="contact-input-field contact-textarea"
                            rows="6"
                        ></textarea>

                        {/* Submit Button */}
                        <button className="contact-submit-btn">
                            <span className="btn-text">Appointment Now</span>
                            <span><FaArrowRight className="submit-icon-arrow"/></span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}