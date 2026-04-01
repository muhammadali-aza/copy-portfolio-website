import React from 'react';
import './homeblogcard.css';
import { FaUser, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import img1 from '../../../../../assets/blog-img-1.webp';
import img2 from '../../../../../assets/blog-img-2.webp';
import img3 from '../../../../../assets/blog-img-3.webp';

// You can replace these placeholder image URLs with your actual image imports
const blogData = [
    {
        id: 1,
        author: "Mesbah",
        date: "April 10",
        title: "Inspiring the World, One Project at a Time for the man",
        imgSrc: img1,
        link: "/blog/blogdetails/homeblogdetails"
    },
    {
        id: 2,
        author: "Mesbah",
        date: "April 10",
        title: "Let's bring your ideas to life! Contact me, and let's",
        imgSrc: img2,
        link: "#"
    },
    {
        id: 3,
        author: "Mesbah",
        date: "April 10",
        title: "Each one showcases our approach and dedication man",
        imgSrc: img3,
        link: "#"
    }
];

export default function Homeblogcard() {
    return (
        <section className="blog-section-wrapper">
            <div className="blog-grid-container">
                {blogData.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        
                        {/* Image & Badge Wrapper */}
                        <div className="blog-image-wrapper">
                            <img src={blog.imgSrc} alt={blog.title} className="blog-image" />
                            
                            {/* Floating Author/Date Badge */}
                            <div className="blog-badge">
                                <span className="badge-item">
                                    <FaUser className="badge-icon" /> {blog.author}
                                </span>
                                <span className="badge-item">
                                    <FaCalendarAlt className="badge-icon" /> {blog.date}
                                </span>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="blog-content">
                            <h3 className="blog-title">{blog.title}</h3>
                            
                            <a href={blog.link} className="blog-read-more">
                                READ MORE <FaChevronRight className="read-more-icon" />
                            </a>
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}