// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
import { Link } from 'react-router';
import videoOneBg from '../../assets/images/backgrounds/video-one-bg.jpg';
// import videoOneContactImg1 from '../../assets/images/resources/video-one-contact-img-1.png';
import JarallaxSection from '../../components/elements/JarallaxSection';
// import CustomSelect from '../../components/elements/CustomSelect';
// import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';

import SectionWrapper from '../../components/elements/SectionWrapper';





const VideoOne: React.FC = () => {
   
  

    return (
        <SectionWrapper className="video-one" id='contact'>
            <JarallaxSection className="video-one__bg-color" imgSrc={videoOneBg} overlayOpacity={0.8} >

                <div >
                </div>
            </JarallaxSection>

            <div className="container">
                <div className="video-one__inner">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <h6 className="section-title__tagline">
                            <span className="section-title__tagline-border"></span>Get in Touch
                        </h6>
                        <h3 className="section-title__title title-animation">
                            <TextAnimation animationStyle='style1'>
                              Looking for reliable industrial electronic manufacturing solutions?
                            </TextAnimation>
                        </h3>
                    </div>
                    <p className="video-one__text">
                       Our engineering team is ready to help you design, develop, and manufacture high-quality electronic components tailored to your business needs.
                    </p>
                    <p className="video-one__text">Have questions about our products or services? Our team is ready to assist you with reliable industrial electronic solutions and smart technology products tailored to your requirements.</p>
 <div className="about-two__btn-box">
                                <Link to="/contact" className="thm-btn">
                                    Contact Us<span className="icon-arrow-right"></span>
                                </Link>
                            </div>              
                </div>
            </div>

        </SectionWrapper>
    );
};

export default VideoOne;