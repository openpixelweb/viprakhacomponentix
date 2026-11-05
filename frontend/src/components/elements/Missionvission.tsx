import React from 'react';

import { FaBullseye, FaEye } from "react-icons/fa";
import featureTwoShape1 from '../../assets/images/shapes/feature-two-shape-1.png';
import featureTwoSingleShape1 from '../../assets/images/shapes/feature-two-single-shape-1.png';
import FadeInAdvanced, { type AnimationVariant } from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';

interface FeatureItem {
    id: number;
    icon: React.ReactNode;
    title: string;
  
    text: string;
    animationClass: AnimationVariant;
    animationDelay: number;
}

const featureItems: FeatureItem[] = [
    {
        id: 1,
        icon: <FaBullseye />,
        title: 'Our Mission',
       
        text: 'To deliver reliable, innovative, and high-quality electronic solutions that enhance industrial performance and support smarter, more connected living environments.',
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        icon: <FaEye />,
        title: 'Our Vision',
        
        text: 'To become a leading provider of advanced industrial electronics and smart technology solutions through continuous innovation, engineering excellence, and customer satisfaction.',
        animationClass: 'fadeInUp',
        animationDelay: 300,
    },
 
   
];

const Mission: React.FC = () => {
    return (
        <section className="feature-two">
            <div className="feature-two__shape-1 rotate-me">
                <img src={featureTwoShape1} alt="" className="float-bob-y" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                   
                    <h3 className="section-title__title title-animation"><TextAnimation animationStyle='style2'>Driving Purpose & Future Vision</TextAnimation></h3>
                </div>
                <div className="row gx-4">
                    {featureItems.map((item) => (
                        <FadeInAdvanced 
                            key={item.id}
                            className={`col-xl-5 col-lg-6 col-md-6`}
                            variant={item?.animationClass}
                            delay={item.animationDelay}
                        >
                            <div className="feature-two__single">
                                <div className="feature-two__icon">
                                    <span>  {item.icon}</span>
                                </div>
                                <div className="feature-two__content">
                                    <div
                                        className="feature-two__single-shape-1 float-bob-x"
                                        style={{ backgroundImage: `url(${featureTwoSingleShape1})` }}
                                    ></div>
                                    <h3 className="feature-two__title">
                                       {item.title}
                                    </h3>
                                    <p className="feature-two__text">{item.text}</p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;