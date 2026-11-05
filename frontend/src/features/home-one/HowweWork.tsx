import React from 'react';
import { FaDraftingCompass,  FaCogs,  FaIndustry, FaCheckCircle, FaShippingFast } from "react-icons/fa";
import processTwoShape1 from '../../assets/images/shapes/process-two-shape-1.png';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';

interface ProcessItem {
    id: number;
    icon: React.ReactNode;
    title: string;
    text: string;
    animation: string;
}

const processItems: ProcessItem[] = [
    {
        id: 1,
        icon: <FaDraftingCompass />,
        title: 'Research & Design',
        text: 'Innovative product design focused on performance and scalability.',
        animation: 'fadeInLeft',
    },
    {
        id: 2,
        icon: <FaCogs />,
        title: 'Engineering Development',
        text: 'Advanced engineering and prototype testing for reliable functionality.',
        animation: 'fadeInRight',
    },
    {
        id: 3,
        icon: <FaIndustry />,
        title: 'Precision Manufacturing',
        text: 'Modern manufacturing processes ensuring quality and consistency.',
        animation: 'fadeInLeft',
    },
      {
        id: 3,
        icon: <FaCheckCircle />,
        title: 'Quality Assurance',
        text: 'Comprehensive testing for durability, safety, and efficiency.',
        animation: 'fadeInLeft',
    },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: 'Delivery & Support',
        text: 'Reliable delivery services with dedicated technical assistance.',
        animation: 'fadeInLeft',
    },
];

const ProcessOne: React.FC = () => {
    return (
        <section className="process-two">
            <FadeInAdvanced
                className="process-two__shape-1"
                variant='slideInLeft'
                delay={100}
            >
                <img src={processTwoShape1} alt="Decorative shape" className="float-bob-x" />
            </FadeInAdvanced>

            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>How We Work
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation >Future-Ready Manufacturing Process</TextAnimation>
                    </h3>
                </div>

                <div className="process-two__inner">
                    <ul className="list-unstyled row">
                        {processItems.map((item) => (
                            <li
                                key={item.id}
                                className={`col-xl-4 col-lg-4 ${item.animation}`}
                            >
                                <div className="process-two__single">
                                    <div className="process-two__count"></div>
                                    <div className="process-two__icon">
                                        <span>{item.icon}</span>
                                    </div>
                                    <h3 className="process-two__title">{item.title}</h3>
                                    <p className="process-two__text">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProcessOne;