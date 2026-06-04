import React from 'react';
import { Link } from 'react-router';
import { FaPlug, FaBroadcastTower, FaSlidersH, FaMicrochip, FaRobot } from "react-icons/fa";
import { GiBatteryPack, GiElectric } from "react-icons/gi";
import { IoToggleOutline, IoGitNetworkOutline} from "react-icons/io5";
import { RiPulseLine, RiHomeGearLine } from "react-icons/ri";

import servicesImg1 from '../../assets/images/services/powersupplyunits.jpg';
import servicesImg2 from '../../assets/images/services/industrialsensors.jpg';
import servicesImg3 from '../../assets/images/services/controlpanels.jpg';
import servicesImg4 from '../../assets/images/services/pcb.jpg';
import servicesImg5 from '../../assets/images/services/automationmodules.jpg';
import servicesImg6 from '../../assets/images/services/smarthomecon.jpg';
import servicesImg7 from '../../assets/images/services/energymonitoringpro.jpg';
import servicesImg8 from '../../assets/images/services/iotproduct.jpg';
import servicesImg9 from '../../assets/images/services/smartswitch.jpg';
import servicesImg10 from '../../assets/images/services/voltage.jpg';
import servicesImg11 from '../../assets/images/services/batteryproduct.jpg';
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
        to: '/industrial-sensors',
        hoverText: 'Precision sensors designed for automation, monitoring, and smart technology applications.',
    },
    {
        id: 3,
        image: servicesImg3,
        iconClass: <FaSlidersH />,
        title: '/control-panels',
        to: '#',
        hoverText: 'Advanced control systems for industrial operations and intelligent electrical management.',
    },
    {
        id: 4,
        image: servicesImg4,
        iconClass: <FaMicrochip />,
        title: 'Printed Circuit Boards (PCBs)',
        to: '/printed-circuit-boards',
        hoverText: 'High-performance PCB manufacturing for industrial electronics and smart devices.',
    },
    {
        id: 5,
        image: servicesImg5,
        iconClass: <FaRobot />,
        title: 'Automation Modules',
        to: '/Automation-Modules',
        hoverText: 'Smart automation technologies that improve operational efficiency and system integration.',
    },
     {
        id: 6,
        image: servicesImg6,
        iconClass: <RiHomeGearLine />,
        title: 'Smart Home Controllers',
        to: '/smart-home-controllers',
        hoverText: 'Smart Home Controllers provide centralized management of connected devices, enabling seamless automation and intelligent control of lighting, appliances, security systems, and other smart home functions.',
    },
     {
        id: 7,
        image: servicesImg7,
        iconClass: <RiPulseLine />,
        title: 'Energy Monitoring Devices',
        to: '/energy-monitoring-devices',
        hoverText: 'Energy Monitoring Devices provide real-time insights into electricity consumption, helping users track, analyze, and optimize energy usage efficiently.',
    },
     {
        id: 8,
        image: servicesImg8,
        iconClass: <IoGitNetworkOutline />,
        title: 'IoT-Based Devices',
        to: '/ioT-based-devices',
        hoverText: 'IoT-Based Devices enable seamless connectivity, real-time monitoring, and intelligent communication between systems and devices.',
    },
     {
        id: 9,
        image: servicesImg9,
        iconClass: <IoToggleOutline />,
        title: 'Smart Switches',
        to: '/smart-switches',
        hoverText: 'Smart Switches provide intelligent control of lighting, appliances, and electrical systems, enabling convenient operation and enhanced energy efficiency.',
    },
     {
        id: 10,
        image: servicesImg10,
        iconClass: <GiElectric />,
        title: 'Voltage Stabilizers',
        to: '/voltage-stabilizers',
        hoverText: 'Our Voltage Stabilizers provide accurate voltage regulation and dependable power protection, ensuring the safe and efficient operation of industrial, commercial, and residential electrical systems.',
    },
     {
        id: 11,
        image: servicesImg11,
        iconClass: <GiBatteryPack />,
        title: 'Battery Energy Storage System',
        to: '/battery-energy-storage-system',
        hoverText: 'Battery Energy Storage Systems (BESS) store electrical energy efficiently and deliver power when needed, ensuring reliable backup power and optimized energy management.',
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