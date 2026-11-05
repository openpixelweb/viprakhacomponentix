import React from 'react';
import { Link } from 'react-router';

import projectImg1 from '../../assets/images/blog/industrialautomation.jpg';
import projectImg2 from '../../assets/images/blog/smartauto.jpg';
import projectImg3 from '../../assets/images/blog/energymoni.jpg';
import TextAnimation from '../../components/elements/TextAnimation';
import type { AnimationVariant } from '../../components/elements/FadeInAdvanced';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import SectionWrapper from '../../components/elements/SectionWrapper';

interface ProjectItem {
    id: number;
    image: string;
   
    title: string;
    path: string;
    animation: AnimationVariant;
    animationDelay: number;
}

const projectItems: ProjectItem[] = [
    {
        id: 1,
        image: projectImg1,
       
        title: 'Industrial Automation Control System',
        path: '/Industrial-Automation-Control-System',
        animation: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        image: projectImg2,
        
        title: 'Smart Home Automation Project',
        path: '/smart-Home-Automation-Project',
        animation: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 3,
        image: projectImg3,
        
       
        title: 'Energy Monitoring & Power Management System',
        path: '/energy-Monitoring-Power-Management-System',
        animation: 'fadeInRight',
        animationDelay: 500,
    },
];

const ProjectSec: React.FC = () => {
    return (
        <SectionWrapper id='blog' className="blog-three">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
               
                    <h3 className="section-title__title title-animation">
                        <TextAnimation> Engineering Projects That Power Innovation</TextAnimation>
                    </h3>
                    <p>Our projects reflect our commitment to quality, innovation, and technological excellence. From industrial automation systems to smart home technologies, we deliver reliable electronic solutions designed to meet evolving industry demands.</p>
             <p>We focus on creating scalable, efficient, and future-ready systems that support industries, businesses, and connected lifestyles.</p>
                </div>

                <div className="row">
                    {projectItems.map((blog) => (
                        <FadeInAdvanced
                            key={blog.id}
                            className={`col-xl-4 col-lg-4 `}
                            delay={blog.animationDelay}
                            variant={blog.animation}
                        >
                            <div className="blog-three__single">
                                <div className="blog-three__img-box">
                                    <div className="blog-three__img">
                                        <img src={blog.image} alt={blog.title} />
                                    </div>
                                    <div className="blog-three__content">
                                   
                                        <h3 className="blog-three__title">
                                            <Link to={blog.path}>{blog.title}</Link>
                                        </h3>
                                        <div className="blog-three__btn-box">
                                            <Link to={blog.path} className="thm-btn">
                                                Read More <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ProjectSec;