import React from 'react';


import aboutThreeImg1 from '../../assets/images/resources/about-three-img-1.jpg';

import aboutThreeShape1 from '../../assets/images/shapes/about-three-shape-1.png';

import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';
import CounterUp from '../../components/elements/CounterUp';
import SectionWrapper from '../../components/elements/SectionWrapper';



const AboutPage: React.FC = () => {
    
    return (
        <SectionWrapper id='about' className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <FadeInAdvanced
                            className="about-three__left"
                            delay={100}
                            variant='slideInLeft' 
                        >
                            <div className="about-three__img-box">
                                <div className="about-three__img">
                                    <img src={aboutThreeImg1} alt="About us main" />
                                 
                                </div>
                                {/* <div className="about-three__img-2">
                                    <img src={aboutThreeImg2} alt="About us secondary" />
                                </div> */}
                                <div className="about-three__shape-1">
                                    <img src={aboutThreeShape1} alt="" />
                                </div>
                                <div className="about-three__shape-2"></div>
                                <div className="about-three__experience-box">
                                    <div className="about-three__count-box">
                                        <h3 className="odometer" ><CounterUp ending={25}/></h3>
                                        <span>+</span>
                                    </div>
                                    <p className="about-three__experience-text">
                                        Years of Experiences 
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    <div className="col-xl-6">
                        <div className="about-three__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                               
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation>Innovating Industrial Electronics for a Smarter Future</TextAnimation>
                                </h3>
                            </div>

                            <p className="about-three__text">
                               Viprakha Componentix Pvt Ltd is dedicated to delivering advanced industrial electronic solutions that power industries, smart technologies, and modern living. We combine innovation, engineering excellence, and quality manufacturing to create reliable electronic products for industrial and household applications.
                            </p >
<p className="about-three__text">With a strong commitment to precision engineering and technological advancement, we provide solutions that seamlessly connect industrial systems with intelligent household applications. Our products are designed to meet the growing demands of modern industries while ensuring performance, safety, and efficiency.</p>
                           <p className="about-three__text">With a commitment to innovation and customer satisfaction, we provide reliable solutions designed to meet the evolving needs of modern industries and connected homes.</p>
                       

                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutPage;