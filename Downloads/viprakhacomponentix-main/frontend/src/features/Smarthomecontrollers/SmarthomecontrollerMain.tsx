import React from 'react';
import ServiceDetailsSidebar from './smarthomecontrollerssidebar';
import { MdOutlineHomeWork , MdOutlineSettingsSuggest ,  MdOutlineMonitor , MdOutlineEnergySavingsLeaf,  MdOutlineHub, MdOutlineDashboardCustomize} from "react-icons/md";

import serviceDetailsImg1 from '../../assets/images/services/smarthomecontroller.jpg';


interface PointsListItem {
    id: number;
    text: string;
}

interface ImgBoxItem {
    id: number;
  
    iconClass: React.ReactNode;
    title: string;
    text: string;
}

const pointsListData: PointsListItem[] = [
    {
        id: 1,
        text: 'Smart Automation System Design',
    },
    {
        id: 2,
        text: 'IoT Integration & Connectivity',
    },
    {
        id: 3,
        text: 'Advanced Electronic Assembly',
    },
    {
        id: 4,
        text: 'Intelligent Device Control Solutions',
    },
     {
        id: 5,
        text: 'Quality Testing & Validation',
    },
     {
        id: 6,
        text: 'Customized Smart Home Solutions',
    },
 
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: < MdOutlineHomeWork />,
        title: 'Centralized Home Control',
        text: 'Manage lighting, appliances, security systems, and connected devices from a single platform.',
    },
    {
        id: 2,
      
        iconClass: <MdOutlineSettingsSuggest />,
        title: 'Smart Automation',
        text: 'Create automated routines and schedules for enhanced convenience and efficiency.',
    },
      {
        id: 3,
     
        iconClass: <MdOutlineMonitor />,
        title: 'Remote Access & Monitoring',
        text: 'Monitor and control home devices remotely through connected smart technologies.',
    },
      {
        id: 4,
     
        iconClass: <MdOutlineEnergySavingsLeaf   />,
        title: 'Energy-Efficient Management',
        text: 'Optimize energy usage by intelligently managing household electrical systems.',
    },
      {
        id: 5,
    
        iconClass: < MdOutlineHub  />,
        title: 'Seamless Connectivity',
        text: 'Supports integration with multiple smart devices and home automation systems.',
    },
      {
        id: 6,
     
        iconClass: <MdOutlineDashboardCustomize />,
        title: 'User-Friendly Interface',
        text: 'Designed for simple operation and effortless control of everyday household functions.',
    },
   
];

const SmarthomesMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Intelligent Control Solutions for Modern Living</h3>
                            <p className="service-details__text-2">
                             Viprakha Componentix Pvt Ltd specializes in the manufacturing of advanced Smart Home Controllers designed to simplify daily life through intelligent automation and seamless device management. Our smart controllers serve as the central hub for connected home systems, enabling users to monitor, manage, and automate various household functions with ease.
                            </p>
                            <p className="service-details__text-2">
                          Built with cutting-edge technology and reliable electronic components, our Smart Home Controllers enhance convenience, security, energy efficiency, and overall home comfort.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                             We design and manufacture smart control systems that combine innovation, connectivity, and user-friendly functionality. Our solutions are developed to support modern smart homes and connected living environments.</p>
                            <p className="service-details__text-2">
                              Our manufacturing capabilities include:
                            </p>

                            <ul className="service-details__points-list list-unstyled">
                                {pointsListData.map((point) => (
                                    <li key={point.id}>
                                        <div className="icon">
                                            <span className="icon-arrow-right"></span>
                                        </div>
                                        <p>{point.text}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="service-details__img-box">
                                <div className="row">
                                    <h3 className="service-details__title-1">Key Features</h3>
                                   
                                    {imgBoxData.map((item) => (
                                        <div key={item.id} className="col-xl-4">
                                            <div className="service-details__img-box-single">
                                                
                                                
                                                {/* <div className="service-details__img-box-img">
                                                    <img src={item.image} alt={item.imageAlt} />
                                                </div> */}
                                                <div className="service-details__img-box-content">
                                                    <div className="service-details__img-box-content-icon-and-title">
                                                        <div className="service-details__img-box-content-icon">
                                                            {item.iconClass}
                                                        </div>
                                                        <h3 className="service-details__img-box-content-title">
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                    <p className="service-details__img-box-content-text">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmarthomesMain;