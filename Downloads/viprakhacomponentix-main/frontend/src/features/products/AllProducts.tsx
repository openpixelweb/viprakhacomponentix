import React from 'react';
import { Link } from 'react-router';
import { FaPlug, FaBroadcastTower, FaSlidersH, FaMicrochip, FaRobot } from "react-icons/fa";

import servicesImg1 from '../../assets/images/services/powersupplyunits.jpg';
import servicesImg2 from '../../assets/images/services/industrialsensors.jpg';
import servicesImg3 from '../../assets/images/services/controlpanels.jpg';
import servicesImg4 from '../../assets/images/services/pcb.jpg';
import servicesImg5 from '../../assets/images/services/automationmodules.jpg';
import TextAnimation from '../../components/elements/TextAnimation';
import SectionWrapper from '../../components/elements/SectionWrapper';

interface ServiceItem {
    id: number;
    image: string;
    iconClass: React.ReactNode;
    title: string;
    to: string;
    hoverText: string;
}

const serviceItems: ServiceItem[] = [
    {
        id: 1,
        image: servicesImg1,
        iconClass: <FaPlug />,
        title: 'Power Supply Units',
        to: '/power-supply-units',
        hoverText: 'Efficient and reliable power solutions for industrial and residential electronic systems.',
    },
    {
        id: 2,
        image: servicesImg2,
        iconClass: <FaBroadcastTower />,
        title: 'Industrial Sensors',
        to: '#',
        hoverText: 'Precision sensors designed for automation, monitoring, and smart technology applications.',
    },
    {
        id: 3,
        image: servicesImg3,
        iconClass: <FaSlidersH />,
        title: 'Control Panels',
        to: '#',
        hoverText: 'Advanced control systems for industrial operations and intelligent electrical management.',
    },
    {
        id: 4,
        image: servicesImg4,
        iconClass: <FaMicrochip />,
        title: 'Printed Circuit Boards (PCBs)',
        to: '#',
        hoverText: 'High-performance PCB manufacturing for industrial electronics and smart devices.',
    },
    {
        id: 5,
        image: servicesImg5,
        iconClass: <FaRobot />,
        title: 'Automation Modules',
        to: '#',
        hoverText: 'Smart automation technologies that improve operational efficiency and system integration.',
    },
];

const Allproducts: React.FC = () => {
    return (
        <SectionWrapper id='services' className="services-two">
        
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Our Products
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Industrial & Smart Technology Products</TextAnimation>
                    </h3>
                </div>
               <div className="row g-4">
    {serviceItems.map((service) => (
        <div
            className="col-xl-4 col-lg-4 col-md-6"
            key={service.id}
        >
            <div className="services-two__single products-page">
                <div className="services-two__img-box">

                    <div className="services-two__img">
                        <img src={service.image} alt="" />
                    </div>

                    <div className="services-two__hover-content">
                        <p className="services-two__hover-text">
                            {service.hoverText}
                        </p>

                        <div className="services-two__btn-box">
                            <Link to={service.to} className="thm-btn">
                                read more
                            </Link>
                        </div>
                    </div>

                    <div className="services-two__icon">
                        <span>{service.iconClass}</span>
                    </div>
                </div>

                <div className="services-two__content">
                    <h3 className="services-two__title">
                        <Link to={service.to}>
                            {service.title}
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    ))}
</div>
            </div>
        </SectionWrapper>
    );
};

export default Allproducts;