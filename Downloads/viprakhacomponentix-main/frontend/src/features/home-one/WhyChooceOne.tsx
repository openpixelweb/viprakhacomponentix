import React from 'react';

import whyChooseOneImg1 from '../../assets/images/resources/why-choose-one-img-1.jpg';
import whyChooseOneImg2 from '../../assets/images/resources/why-choose-one-img-2.jpg';
import TextAnimation from '../../components/elements/TextAnimation';
import FadeInAdvanced, { type AnimationVariant } from '../../components/elements/FadeInAdvanced';
import { FaIndustry, FaShieldAlt, FaLightbulb, FaNetworkWired } from "react-icons/fa";



interface ChooseItem {
    id: number;
    iconClass: React.ReactNode;
    title: string;
    text: string;
    animationType: AnimationVariant;
    animationDelay: number;
}

const leftColumnItems: ChooseItem[] = [
    {
        id: 1,
        iconClass: <FaIndustry />,
        title: 'Advanced Manufacturing',
        text: 'Modern production facilities with precision engineering and quality assurance.',
        animationType: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: <FaLightbulb />,
        title: 'Innovative Technology',
        text: 'Cutting-edge electronics designed for industrial and smart living applications.',
        animationType: 'fadeInLeft',
        animationDelay: 400,
    },
];

const rightColumnItems: ChooseItem[] = [
    {
        id: 3,
        iconClass: <FaShieldAlt />,
        title: 'Quality & Reliability',
        text: 'Products tested for durability, performance, and international quality standards.',
        animationType: 'fadeInRight',
        animationDelay: 200,
    },
    {
        id: 4,
        iconClass: <FaNetworkWired />,
        title: 'Smart Integration',
        text: 'Seamless compatibility with automation systems and IoT technologies.',
        animationType: 'fadeInRight',
        animationDelay: 300,
    },
];

const WhyChooseOne: React.FC = () => {
      
    return (
        <section className="why-choose-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <h6 className="section-title__tagline">
                                    <span className="section-title__tagline-border"></span>Why Choose Us
                                </h6>
                                <h3 className="section-title__title title-animation">
                                    <TextAnimation animationStyle='style2'>
                                      Why Choose Our Electronic Solutions?
                                    </TextAnimation>
                                </h3>
                            </div>
                            {/* <p className="why-choose-one__text">
                                At our company, we are committed to providing excellent customer service, transparent
                                pricing, and fast, reliable service. We understand the importance of keeping your home
                                or business cool and comfortable.
                            </p> */}
                            <div className="why-choose-one__list-box">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <ul className="why-choose-one__list list-unstyled">
                                            {leftColumnItems.map((item) => ( 
                                                    <FadeInAdvanced as="li" key={item.id} className='liItem'
                                                     variant={item.animationType} 
                                                     delay={item?.animationDelay}
                                                     >
                                                        <div className="icon">
                                                            <span>{item.iconClass}</span>
                                                        </div>
                                                        <div className="content">
                                                            <h3>{item.title}</h3>
                                                            <p>{item.text}</p>
                                                        </div>
                                                    </FadeInAdvanced> 
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <ul className="why-choose-one__list list-unstyled">
                                            {rightColumnItems.map((item) => ( 
                                                    <FadeInAdvanced key={item.id} className='liItem' variant={item.animationType} duration={item?.animationDelay}>
                                                        <div className="icon">
                                                            <span>{item.iconClass}</span>
                                                        </div>
                                                        <div className="content">
                                                            <h3>{item.title}</h3>
                                                            <p>{item.text}</p>
                                                        </div>
                                                    </FadeInAdvanced> 
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <FadeInAdvanced className="why-choose-one__right " variant="slideInRight" delay={100}>
                            <div className="why-choose-one__img-box">
                                <div className="why-choose-one__img">
                                    <img src={whyChooseOneImg1} alt="Quality & Reliability manufacturing of power supplies" />
                                </div>
                                <div className="why-choose-one__img-2">
                                    <img src={whyChooseOneImg2} alt="Advanced Manufacturing of transformers" />
                                </div>
                                <div className="why-choose-one__shape-1"></div>
                              
                            </div>
                        </FadeInAdvanced>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseOne;