import { useState } from 'react';
// import './project4Hero.css'
import img1 from '../../../../../../assets/project_image/proect_4.webp';
import img2 from '../../../../../../assets/project_image/project-detials-swiper-img-1.webp';
import { CiCircleCheck } from "react-icons/ci";
import { TiArrowLeft } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import { FaArrowRight } from 'react-icons/fa'; // npm install react-icons

const coreFeatures = [
    { item: "Typescript" },
    { item: "Bootstrap 5.x Framework:" },
    { item: "Vue 3" }
];

export default function Project4Hero() {
    // State to track hover direction for the card
    const [cardHoverClass, setCardHoverClass] = useState('');
    const [formHoverClass, setFormHoverClass] = useState('');

    const handleCardMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('left');
        else classes.push('right');

        if (y < rect.height / 2) classes.push('top');
        else classes.push('bottom');

        setCardHoverClass(classes.join(' '));
    };

    const handleCardMouseLeave = () => {
        setCardHoverClass('');
    };

    const handleFormMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('left');
        else classes.push('right');

        if (y < rect.height / 2) classes.push('top');
        else classes.push('bottom');

        setFormHoverClass(classes.join(' '));
    };

    const handleFormMouseLeave = () => {
        setFormHoverClass('');
    };

    return (
        <div>
            <div className='projectHero'>
                <img src={img1} alt="Hero" />
            </div>
            <div className="projectdetail-container">
                <div className='projectdetail-layout'>

                    {/* Left Side: Main Content */}
                    <div className='project-main-content'>
                        <h1 className='projectdetails-title'>Harri – Electronics eCommerce Vue Nuxt 3 Template</h1>
                        <p className='project-description'>
                            Harri – Clean, Minimal eCommerce vue nuxt Template for multipurpose (Mobile, Laptop, Monitor, Hub, Kittle, watch Multipurpose template, watch store). This is an e-commerce template built with nuxt 3 and Rest API integration. This template backend is ready and is built with node, express, mongoose schema validation and uses MongoDB for the database. Actually, it’s a complete project but you can use it according to your need or any kind of e-commerce site. Furthermore, the vue nuxt file is designed on grid and can be easily conversion into responsive Wordpress, Magento, Woocommerce, Opencart, Shopify, Drupal, Joomla and other systems..
                        </p>
                        <br />
                        <p className='project-description'>
                           There is no doubt that Harri shop will make your work look more impressive and attractive to viewers. Vue 3, Nuxt 3,Express js,Mongodb,Mongoose,stripe,nodemailer, Typescript,Pinia,Veevalidate, Bootstrap 5(latest Version), and Sass
                        </p>
                        <ul className='feature-list'>
                            {coreFeatures.map((feature, index) => (
                                <li key={index}>
                                    <CiCircleCheck className="check-icon" />
                                    {feature.item}
                                </li>
                            ))}
                        </ul>

                        <h2 className='section-subtitle'>Elevate Your Business with IT Solutions</h2>
                        <p className='project-description'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galltype and scrambled it to make a type specimen book. It has survived not only five centuries tinto electronic typesetting remaining essentially unchanged
                        </p>
                        <img src={img2} alt="" className='img2' />
                        <div className="btns">
                            <button className="nav-btn previous">
                                <span className="icon-circle">
                                    <TiArrowLeft />
                                </span>
                                <span className="btn-text">Previous</span>
                            </button>

                            <button className="nav-btn next">
                                <span className="btn-text">Next</span>
                                <span className="icon-circle">
                                    <GoArrowRight />
                                </span>
                            </button>
                        </div>
                        <div className="form-container">
                            <form
                                className={`appointment-card directional-card ${formHoverClass}`}
                                onMouseMove={handleFormMouseMove}
                                onMouseLeave={handleFormMouseLeave}
                            >
                                <div className="input-grid">
                                    <input type="text" placeholder="Your Name" className="form-input" />
                                    <input type="number" placeholder="Phone Number" className="form-input" />
                                    <input type="email" placeholder="Your Email" className="form-input" />
                                    <input type="text" placeholder="Subject" className="form-input" />
                                </div>

                                <textarea
                                    placeholder="Your Message"
                                    className="form-textarea"
                                ></textarea>

                                <button type="submit" className="submit-btn">
                                    Appointment Now <FaArrowRight className="btn-icon" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Project Details Card with Hover Effect */}
                    <aside className='project-sidebar'>
                        <div
                            className={`details-card directional-card ${cardHoverClass}`}
                            onMouseMove={handleCardMouseMove}
                            onMouseLeave={handleCardMouseLeave}
                        >
                            <div className='card-header'>
                                <h3>Project Details</h3>
                                <span className="dot"></span>
                            </div>
                            <div className='detail-item'>
                                <span className='label'>Name:</span>
                                <span className='value'>Hosting vps</span>
                            </div>
                            <div className='detail-item'>
                                <span className='label'>Author:</span>
                                <span className='value'>Nadimul Islam</span>
                            </div>
                            <div className='detail-item'>
                                <span className='label'>Date:</span>
                                <span className='value'>23 January, 2024</span>
                            </div>
                            <div className='detail-item'>
                                <span className='label'>Tags:</span>
                                <span className='value'>Host Web Design</span>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    )
}