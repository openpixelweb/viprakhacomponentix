import React from 'react';

import {   FaDraftingCompass, FaCheckCircle, FaTachometerAlt, FaShieldAlt, FaGem, FaSmile    } from "react-icons/fa";
import FadeInAdvanced, { type AnimationVariant } from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';

interface ProcessItem {
    id: number;
    iconClass: React.ReactNode;
    title: string;
    text: string;
    isReversed: boolean;
    animationClass: AnimationVariant;
    animationDelay: number;
}

const processItems: ProcessItem[] = [
    {
        id: 1,
        iconClass: <FaDraftingCompass />,
        title: 'Precision Engineering',
        text: 'We use advanced manufacturing techniques and modern engineering standards to deliver accurate and high-performance electronic products.',
        isReversed: false,
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: <FaCheckCircle   />,
        title: 'Strict Quality Control',
        text: 'Every component undergoes detailed inspection and testing throughout the manufacturing process to ensure consistency and durability.',
        isReversed: true,
        animationClass: 'fadeInLeft',
        animationDelay: 200,
    },
    {
        id: 3,
        iconClass: <FaTachometerAlt />,
        title: 'Reliable Performance',
        text: 'Our products are built to perform efficiently in demanding industrial and smart electronic environments.',
        isReversed: false,
        animationClass: 'fadeInRight',
        animationDelay: 100,
    },
    {
        id: 4,
        iconClass: <FaShieldAlt  />,
        title: 'Advanced Testing Standards',
        text: 'Comprehensive testing procedures ensure every product delivers maximum performance, safety, durability, and reliability.',
        isReversed: true,
        animationClass: 'fadeInRight',
        animationDelay: 200,
    },
    {
        id: 5,
        iconClass: <FaGem />,
        title: 'High-Quality Materials',
        text: 'We use premium-grade electronic components and materials to ensure long-lasting product reliability.',
        isReversed: true,
        animationClass: 'fadeInRight',
        animationDelay: 200,
    },
    {
        id: 6,
        iconClass: <FaSmile />,
        title: 'Customer Satisfaction',
        text: 'Our commitment to quality helps us build long-term relationships based on trust, reliability, and professional support.',
        isReversed: false,
        animationClass: 'fadeInRight',
        animationDelay: 200,
    },
];

const Quality: React.FC = () => {
    return (

        <section className="process-one">
           
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                  
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Delivering Excellence Through Quality & Innovation</TextAnimation>
                    </h3>
                    <p>At Viprakha Componentix Pvt Ltd, we continuously strive to maintain the highest standards of quality, innovation, and reliability to deliver electronic solutions that industries and customers can depend on with confidence.Quality is the foundation of everything we manufacture. Every product is designed, developed, and tested with precision to ensure superior performance, safety, and long-term reliability.</p>
                <h3 className="text-center quality-text">Our Quality Standards Include:</h3>
                </div>
               <div className="row justify-content-center g-4">
    {processItems.map((item) => (
        <FadeInAdvanced
            key={item.id}
            className="col-xl-3 col-lg-6 col-md-6"
            variant={item?.animationClass}
            delay={item.animationDelay}
        >
            <div className={`process-one__single${item.isReversed ? ' process-one__single--two' : ''}`}>
                
                {!item.isReversed && (
                    <div className="process-one__icon-box">
                        <div className="process-one__count"></div>

                        <div className="process-one__icon">
                            <span>{item.iconClass}</span>
                        </div>
                    </div>
                )}

                <div className="process-one__content">
                    <h4 className="process-one__title">{item.title}</h4>

                    <p className="process-one__text">
                        {item.text}
                    </p>
                </div>

                {item.isReversed && (
                    <div className="process-one__icon-box">
                        <div className="process-one__count"></div>

                        <div className="process-one__icon">
                            <span>{item.iconClass}</span>
                        </div>
                    </div>
                )}
            </div>
        </FadeInAdvanced>
    ))}
</div>
            </div>
        </section>
    );
};

export default Quality;