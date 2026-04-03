import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './blog_header.css';
import { FaTag, FaRegComment, FaRegCalendarAlt, FaSearch } from 'react-icons/fa';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF, FaArrowRight } from 'react-icons/fa';
import { FaFolderOpen } from "react-icons/fa";
import { BsArrowRight } from 'react-icons/bs';

import blogImage1 from "../../../../assets/blog-classic-card-img-1.webp";
import blogImage2 from "../../../../assets/blog-classic-card-img-2.webp";
import blogImage3 from "../../../../assets/blog-classic-card-img-3.webp";
import recentPost1 from "../../../../assets/single-post-card-img-1.webp";
import recentPost2 from "../../../../assets/single-post-card-img-2.webp";
import recentPost3 from "../../../../assets/single-post-card-img-3.webp";
import reactImg5 from '../../../../assets/about-me-user-img.webp';

export default function Blog_header() {
    const [isHovered, setIsHovered] = useState(false);
    
    // --- ANIMATION VARIANTS ---
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };
    
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    // ---------------------------

    const categories = [
        { name: "Business Solution", count: "(6)" },
        { name: "Web Development Wizardry", count: "(3)" },
        { name: "Content Creation and Strategy", count: "(4)" },
        { name: "UI/UX Design Innovation", count: "(6)" }
    ];

    const recentPosts = [
        { category: "Category", title: "Sustainable Solutions: Designing for Tomorrow", img: recentPost1 },
        { category: "Category", title: "Technological Innovations: Shaping the Future", img: recentPost2 },
        { category: "Category", title: "Adventure Awaits Exploring the Great Outdoors", img: recentPost3 }
    ];

    const tags = ["All Project", "Resume", "Graphics", "Web Design", "CV", "Starts", "Creative Portfolio", "Portfolio", "CV Card", "Start shape"];
    
    const [aboutMeCardHoverClass, setAboutMeCardHoverClass] = useState('');
    const [tagsCardHoverClass, setTagsCardHoverClass] = useState('');

    const handleCardMouseMove = (e, setClassFn) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('hover-left');
        else classes.push('hover-right');

        if (y < rect.height / 2) classes.push('hover-top');
        else classes.push('hover-bottom');

        setClassFn(classes.join(' '));
    };

    const handleCardMouseLeave = (setClassFn) => {
        setClassFn('');
    };

    return (
        <div className="blog-layout-container">
            {/* Left Main Content Container (Staggered Children via Framer Motion) */}
            <motion.div 
                className="blog-posts-column"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Blog Card 1 */}
                <motion.div variants={fadeInUp} className="blog-post-card">
                    <div
                        className="hover-container"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img src={blogImage1} alt="Blog Post Main" className={`main-image ${isHovered ? 'hovered' : ''}`} />
                        <div className={`two-images-group ${isHovered ? 'hovered' : ''}`}>
                            <img src={blogImage1} alt="Slide Image 1" />
                        </div>
                    </div>
                    <div className="blog-post-content">
                        <div className="blog-post-meta">
                            <span className="meta-item"><FaTag className="meta-icon" /> Web design</span>
                            <span className="meta-item"><FaRegComment className="meta-icon" /> Comments (05)</span>
                            <span className="meta-item"><FaRegCalendarAlt className="meta-icon" /> Comments (05)</span>
                        </div>
                        <h2 className="blog-post-title">Stand Out From The Crowd With A Professional Portfolio</h2>
                        <p className="blog-post-excerpt">
                            Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra. Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
                        </p>
                        <button className="blog-read-more-btn">
                            Read More <BsArrowRight className="read-more-icon" />
                        </button>
                    </div>
                </motion.div>

                {/* Blog Card 2 */}
                <motion.div variants={fadeInUp} className="blog-post-card">
                    <div
                        className="hover-container"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img src={blogImage2} alt="Blog Post Main" className={`main-image ${isHovered ? 'hovered' : ''}`} />
                        <div className={`two-images-group ${isHovered ? 'hovered' : ''}`}>
                            <img src={blogImage2} alt="Slide Image 1" />
                        </div>
                    </div>
                    <div className="blog-post-content">
                        <div className="blog-post-meta">
                            <span className="meta-item"><FaTag className="meta-icon" /> Web design</span>
                            <span className="meta-item"><FaRegComment className="meta-icon" /> Comments (05)</span>
                            <span className="meta-item"><FaRegCalendarAlt className="meta-icon" /> Comments (05)</span>
                        </div>
                        <h2 className="blog-post-title">Stand Out From The Crowd With A Professional Portfolio</h2>
                        <p className="blog-post-excerpt">
                            Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra. Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
                        </p>
                        <button className="blog-read-more-btn">
                            Read More <BsArrowRight className="read-more-icon" />
                        </button>
                    </div>
                </motion.div>
                
                {/* Blog Card 3 */}
                <motion.div variants={fadeInUp} className="blog-post-card">
                    <div
                        className="hover-container"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img src={blogImage3} alt="Blog Post Main" className={`main-image ${isHovered ? 'hovered' : ''}`} />
                        <div className={`two-images-group ${isHovered ? 'hovered' : ''}`}>
                            <img src={blogImage3} alt="Slide Image 1" />
                        </div>
                    </div>
                    <div className="blog-post-content">
                        <div className="blog-post-meta">
                            <span className="meta-item"><FaTag className="meta-icon" /> Web design</span>
                            <span className="meta-item"><FaRegComment className="meta-icon" /> Comments (05)</span>
                            <span className="meta-item"><FaRegCalendarAlt className="meta-icon" /> Comments (05)</span>
                        </div>
                        <h2 className="blog-post-title">Stand Out From The Crowd With A Professional Portfolio</h2>
                        <p className="blog-post-excerpt">
                            Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra. Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
                        </p>
                        <button className="blog-read-more-btn">
                            Read More <BsArrowRight className="read-more-icon" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Sidebar */}
            <motion.div 
                className="blog-sidebar-column"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Search Widget */}
                <motion.div variants={fadeInUp} className="sidebar-widget search-widget-container">
                    <input type="text" placeholder="Type here" className="sidebar-search-input" />
                    <button className="sidebar-search-btn">
                        <FaSearch />
                    </button>
                </motion.div>

                {/* Category Widget */}
                <motion.div variants={fadeInUp} className="sidebar-widget">
                    <h3 className="widget-title">Category <span className="title-dot"></span></h3>
                    <ul className="blog-category-list">
                        {categories.map((category, index) => (
                            <li key={index} className="blog-category-item">
                                <span className="blog-category-name"><BsArrowRight className="category-arrow" /> {category.name}</span>
                                <span className="blog-category-count">{category.count}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Recent Post Widget */}
                <motion.div variants={fadeInUp} className="sidebar-widget">
                    <h3 className="widget-titles">Recent Post <span className="title-dot"></span></h3>
                    <div className="recent-posts-list">
                        {recentPosts.map((post, index) => (
                            <div className="recent-post-item" key={index}>
                                <img src={post.img} alt={post.title} className="recent-post-thumbnail" />
                                <div className="recent-post-info">
                                    <span className="recent-post-categorys"><FaFolderOpen className="meta-icon-small" /> {post.category}</span>
                                    <h4 className="recent-post-title">{post.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="sidebar-column">
                    {/* About Me Card */}
                    <motion.div 
                        variants={fadeInUp}
                        className={`sidebar-card directional-card ${aboutMeCardHoverClass}`}
                        onMouseMove={(e) => handleCardMouseMove(e, setAboutMeCardHoverClass)}
                        onMouseLeave={() => handleCardMouseLeave(setAboutMeCardHoverClass)}
                    >
                        <h2 className="card-header">About Me <span className="accent-dot"></span></h2>
                        <div className="profile-section">
                            <img src={reactImg5} alt="Profile" className="profile-pic" />
                            <div className="profile-info">
                                <h3>Fatima Afrafy</h3>
                                <p className="job-title">UI/UX Designer</p>
                                <div className="social-icons small-icons">
                                    <button className="icon-btn"><FaInstagram className='ico' /></button>
                                    <button className="icon-btn"><FaLinkedinIn className='ico' /></button>
                                    <button className="icon-btn"><FaTwitter className='ico' /></button>
                                    <button className="icon-btn"><FaFacebookF className='ico' /></button>
                                </div>
                            </div>
                        </div>
                        <p className="bio-text">
                            Aliquam eros justo, posuere loborti viverra ullamcorper posuere viverra .Aliquam eros justo, posuere justo, posuere.
                        </p>
                    </motion.div>

                    {/* Tags Card */}
                    <motion.div 
                        variants={fadeInUp}
                        className={`sidebar-card directional-card ${tagsCardHoverClass}`}
                        onMouseMove={(e) => handleCardMouseMove(e, setTagsCardHoverClass)}
                        onMouseLeave={() => handleCardMouseLeave(setTagsCardHoverClass)}
                    >
                        <h2 className="card-header">Tags <span className="accent-dot"></span></h2>
                        <div className="tags-container">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag-pill">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
