import React from 'react';
import './contact_header.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Contact_header() {
    const contactInfo = [
        {
            id: 1,
            icon: <FaMapMarkerAlt className='contact-icon' />,
            title: "Address",
            line1: "l-Razi Street, KAAC4185, Tabuk",
            line2: "Saudi Arabia"
        },
        {
            id: 2,
            icon: <FaEnvelope className='contact-icon' />,
            title: "E-Mail",
            line1: "hassandev691@gmail.com",
            line2: "hassandev691@gmail.com"
        },
        {
            id: 3,
            icon: <FaPhoneAlt className='contact-icon' />,
            title: "Call Me",
            line1: "+966 54 445 7046",
            line2: "+966 54 445 7046"
        }
    ];

    return (
        <section className="contact-header-section">
            <div className="contact-header-container">
                <div className="contact-cards-grid">
                    {contactInfo.map((info) => (
                        <div className="contact-info-card" key={info.id}>
                            <div className="contact-icon-wrapper">
                                {info.icon}
                            </div>
                            <h3 className="contact-info-title">{info.title}</h3>
                            <p className="contact-info-text">
                                {info.line1} <br />
                                {info.line2}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}