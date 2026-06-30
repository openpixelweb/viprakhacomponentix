import React from 'react';
import { Link } from 'react-router';
import { FaPlug, FaBroadcastTower, FaSlidersH, FaMicrochip, FaRobot } from "react-icons/fa";
import { GiBatteryPack, GiElectric } from "react-icons/gi";
import { IoToggleOutline, IoGitNetworkOutline} from "react-icons/io5";
import { RiPulseLine, RiHomeGearLine } from "react-icons/ri";

import productImg1 from '../../assets/images/services/powersupplyunits.jpg';
import productImg2 from '../../assets/images/services/industrialsensors.jpg';
import productImg3 from '../../assets/images/services/controlpanels.jpg';
import productImg4 from '../../assets/images/services/pcb.jpg';
import productImg5 from '../../assets/images/services/automationmodules.jpg';
import productImg6 from '../../assets/images/services/smarthomecon.jpg';
import productImg7 from '../../assets/images/services/energymonitoringpro.jpg';
import productImg8 from '../../assets/images/services/iotproduct.jpg';
import productImg9 from '../../assets/images/services/smartswitch.jpg';
import productImg10 from '../../assets/images/services/voltage.jpg';
import productImg11 from '../../assets/images/services/batteryproduct.jpg';
import TextAnimation from '../../components/elements/TextAnimation';
import SectionWrapper from '../../components/elements/SectionWrapper';

interface productsItem {
    id: number;
    image: string;
    iconClass: React.ReactNode;
    title: string;
    to: string;
    hoverText: string;
}

const productsItems: productsItem[] = [
    {
        id: 1,
        image: productImg1,
        iconClass: <FaPlug />,
        title: 'Power Supply Units',
        to: '/power-supply-units',
        hoverText: 'Efficient and reliable power solutions for industrial and residential electronic systems.',
    },
    {
        id: 2,
        image: productImg2,
        iconClass: <FaBroadcastTower />,
        title: 'Industrial Sensors',
        to: '/industrial-sensors',
        hoverText: 'Precision sensors designed for automation, monitoring, and smart technology applications.',
    },
    {
        id: 3,
        image: productImg3,
        iconClass: <FaSlidersH />,
        title: '/control-panels',
        to: '#',
        hoverText: 'Advanced control systems for industrial operations and intelligent electrical management.',
    },
    {
        id: 4,
        image: productImg4,
        iconClass: <FaMicrochip />,
        title: 'Printed Circuit Boards (PCBs)',
        to: '/printed-circuit-boards',
        hoverText: 'High-performance PCB manufacturing for industrial electronics and smart devices.',
    },
    {
        id: 5,
        image: productImg5,
        iconClass: <FaRobot />,
        title: 'Automation Modules',
        to: '/Automation-Modules',
        hoverText: 'Smart automation technologies that improve operational efficiency and system integration.',
    },
     {
        id: 6,
        image: productImg6,
        iconClass: <RiHomeGearLine />,
        title: 'Smart Home Controllers',
        to: '/smart-home-controllers',
        hoverText: 'Smart Home Controllers provide centralized management of connected devices, enabling seamless automation and intelligent control of lighting, appliances, security systems, and other smart home functions.',
    },
     {
        id: 7,
        image: productImg7,
        iconClass: <RiPulseLine />,
        title: 'Energy Monitoring Devices',
        to: '/energy-monitoring-devices',
        hoverText: 'Energy Monitoring Devices provide real-time insights into electricity consumption, helping users track, analyze, and optimize energy usage efficiently.',
    },
     {
        id: 8,
        image: productImg8,
        iconClass: <IoGitNetworkOutline />,
        title: 'IoT-Based Devices',
        to: '/ioT-based-devices',
        hoverText: 'IoT-Based Devices enable seamless connectivity, real-time monitoring, and intelligent communication between systems and devices.',
    },
     {
        id: 9,
        image: productImg9,
        iconClass: <IoToggleOutline />,
        title: 'Smart Switches',
        to: '/smart-switches',
        hoverText: 'Smart Switches provide intelligent control of lighting, appliances, and electrical systems, enabling convenient operation and enhanced energy efficiency.',
    },
     {
        id: 10,
        image: productImg10,
        iconClass: <GiElectric />,
        title: 'Voltage Stabilizers',
        to: '/voltage-stabilizers',
        hoverText: 'Our Voltage Stabilizers provide accurate voltage regulation and dependable power protection, ensuring the safe and efficient operation of industrial, commercial, and residential electrical systems.',
    },
     {
        id: 11,
        image: productImg11,
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
    {productsItems.map((product) => (
        <div
            className="col-xl-4 col-lg-4 col-md-6"
            key={product.id}
        >
            <div className="services-two__single products-page">
                <div className="services-two__img-box">

                    <div className="services-two__img">
                        <img src={product.image} alt="" />
                    </div>

                    <div className="services-two__hover-content">
                        <p className="services-two__hover-text">
                            {product.hoverText}
                        </p>

                        <div className="two__btn-box">
                            <Link to={product.to} className="thm-btn">
                                read more
                            </Link>
                        </div>
                    </div>

                    <div className="services-two__icon">
                        <span>{product.iconClass}</span>
                    </div>
                </div>

                <div className="services-two__content">
                    <h3 className="services-two__title">
                        <Link to={product.to}>
                            {product.title}
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