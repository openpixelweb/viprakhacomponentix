import React from 'react';


import aboutThreeImg1 from '../../assets/images/resources/about-three-img-1.jpg';
import aboutThreeImg2 from '../../assets/images/resources/about-three-img-2.jpg';
import aboutThreeShape1 from '../../assets/images/shapes/about-three-shape-1.png';

import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';
import CounterUp from '../../components/elements/CounterUp';
import SectionWrapper from '../../components/elements/SectionWrapper';

interface ChecklistItem {
    id: number;
    text: string;
}





const checklistItems: ChecklistItem[] = [
    { id: 1, text: 'Invest in a quality case to protect your device.' },
    { id: 2, text: 'Until recently the prevailin view assumed' },
];





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
                                <div className="about-three__img-2">
                                    <img src={aboutThreeImg2} alt="About us secondary" />
                                </div>
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
                                        Years Of Experiences
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    <div className="col-xl-6">
                        <div className="about-three__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h6 className="section-title__tagline">
                                    <span className="section-title__tagline-border"></span>About Us
                                </h6>
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation>General Auto Repair & Car This Maintenance Place</TextAnimation>
                                </h3>
                            </div>

                            <p className="about-three__text">
                                The wise man therefore always holds in these matters to this principle of
                                selection. He rejects pleasures to secure other greater pleasures.
                            </p>

                            <ul className="about-three__points-list list-unstyled">
                                {checklistItems.map((item) => (
                                    <li key={item.id}>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>{item.text}</p>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutPage;