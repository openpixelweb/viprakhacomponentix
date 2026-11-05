import React from 'react';
import { FaIndustry, FaMicrochip,  FaTools } from "react-icons/fa";
import featureOneShape1 from '../../assets/images/shapes/feature-one-shape-1.png';
import FadeInAdvanced, { type AnimationVariant } from '../../components/elements/FadeInAdvanced';

interface FeatureItem {
    id: number;
    iconClass: React.ReactNode;
    title: string;
    
    text: string;
    animationType: AnimationVariant;
    animationDelay: number;
}

const featureItems: FeatureItem[] = [
    {
        id: 1,
        iconClass: <FaIndustry />,
        title: 'Trusted Manufacturing Standards',
        text: 'We follow strict quality control processes to ensure every product meets industry standards.',
        animationType: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
        iconClass: <FaMicrochip />,
        title: 'Smart Technology Integration',
        text: 'Our products support automation, IoT connectivity, and intelligent energy management systems.',
        animationType: 'fadeInUp',
        animationDelay: 200,
    },
    {
        id: 3,
        iconClass: <FaTools />,
        title: 'High-Quality Engineering',
        text: 'We design and manufacture electronic components with precision, reliability, and long-term performance.',
        animationType: 'fadeInRight',
        animationDelay: 300,
    },
];

const FeatureOne: React.FC = () => {
    return (
        <section className="feature-one">
            <div className="container">
                <div className="row">
                    {featureItems.map((item) => (
                        <FadeInAdvanced
                            key={item?.id}
                            delay={item?.animationDelay}
                            variant={item?.animationType}
                            className={`col-xl-4 col-lg-4 `}
                        > 
                                <div className="feature-one__single">
                                    <div className="feature-one__single-inner">
                                        <div className="feature-one__shape-1">
                                            <img src={featureOneShape1} alt="" />
                                        </div>
                                        <div className="feature-one__icon-and-title">
                                            <div className="feature-one__icon">
                                                <span>{item.iconClass}</span>
                                            </div>
                                            <h3 className="feature-one__title">
                                             
                                                    {item.title.split('\n').map((line, i) => (
                                                        <React.Fragment key={i}>
                                                            {line}
                                                            {i < item.title.split('\n').length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}
                                               
                                            </h3>
                                        </div>
                                        <p className="feature-one__text">{item.text}</p>
                                  
                                    </div>
                                </div> 
                        </FadeInAdvanced>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureOne;