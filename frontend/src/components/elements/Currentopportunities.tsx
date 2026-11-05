import React from 'react';
import { Link } from 'react-router';

import pricingTwoShape2 from '../../assets/images/shapes/pricing-two-shape-2.png';

import type { AnimationVariant } from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';

interface PricingFeature {
    id: number;
    label: string;
}

interface PricingPlan {
    id: number;
   location: string;
    title: string;
     experience: string;
    features: PricingFeature[];
   
    animationClass: AnimationVariant;
    animationDelay: number;
    hasPremiumExtras?: boolean;
}

const defaultFeatures: PricingFeature[] = [
    { id: 1, label: 'Circuit design and testing' },
    { id: 2, label: 'Product development support' },
    { id: 3, label: 'System troubleshooting' },
    { id: 4, label: 'Technical documentation' },

];
const pcbDesignEngineerFeatures: PricingFeature[] = [
    { id: 1, label: 'PCB schematic and layout design' },
    { id: 2, label: 'Prototype testing' },
    { id: 3, label: 'Component selection' },
    { id: 4, label: 'Design optimization' },
];
const EmbeddedSystemsEngineerFeatures: PricingFeature[] = [
    { id: 1, label: 'Microcontroller programming' },
    { id: 2, label: 'Embedded system integration' },
    { id: 3, label: 'Firmware development' },
    { id: 4, label: 'Hardware testing' },
];

const pricingPlans: PricingPlan[] = [
    {
        id: 1,
      location: 'Hyderabad',
        title: 'Electronics Engineer',
        experience: '1year',
        features: defaultFeatures,
       
        animationClass: 'fadeInLeft',
        animationDelay: 100,
    },
    {
        id: 2,
       location: 'Hyderabad',
        title: 'PCB Design Engineer',
    experience: 'Fresher',
        features: pcbDesignEngineerFeatures,
       
        animationClass: 'fadeInUp',
        animationDelay: 300,
    },
    {
        id: 3,
      location: 'Hyderabad',
        title: 'Embedded Systems Engineer',
    experience: 'Per Month',
        features: EmbeddedSystemsEngineerFeatures,

        animationClass: 'fadeInUp',
        animationDelay: 300,
    },
];

const Currentopp: React.FC = () => {



    return (
        <section className="pricing-two">
            <div className="pricing-two__shape-2">
                <img src={pricingTwoShape2} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
 
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Current Opportunities</TextAnimation>
                    </h3>
                    <p>At Viprakha Componentix Pvt Ltd, we are always looking for passionate, talented, and innovative individuals to join our growing team. Explore exciting career opportunities in industrial electronics, automation, IoT technologies, and smart systems development.</p>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="pricing-two__left">
                            <div className="row">
                                {pricingPlans.map((plan) => (
                                    <FadeInAdvanced
                                        key={plan.id}
                                        className={`col-xl-4 col-lg-4 col-md-6 `}
                                        variant={plan?.animationClass}
                                        delay={plan.animationDelay}
                                    >
                                        <div className="pricing-two__single">
                                           <div className="pricing-two__plan-box">
                                                <span>{plan.location}</span>
                                            </div>
                                            <div className="pricing-two__price-box">
                                                <h3 className="pricing-two__price">{plan.title}</h3>
                                                <p className="pricing-two__price-sub-title">Experience: {plan.experience}</p>
                                            </div>
                                            <ul className="pricing-two__price-points list-unstyled">
                                                <h5>Key Responsibilities:</h5>
                                                {plan.features.map((feature) => (
                                                    <li key={feature.id}>
                                                        <div className="icon">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <p>{feature.label}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="pricing-two__btn-box">
                                                {/* <Link to={plan.to} className="thm-btn">
                                                   Apply Now
                                                    <span className="icon-arrow-right"></span>
                                                </Link> */}

                                                    <Link
        to={`/applynow?jobTitle=${encodeURIComponent(plan.title)}`}
        className="thm-btn"
    >
        Apply Now
        <span className="icon-arrow-right"></span>
    </Link>
                                            </div>
                                            {plan.hasPremiumExtras && (
                                                <>
                                                
                                                </>
                                            )}
                                        </div>
                                    </FadeInAdvanced>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Currentopp;