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
        text: 'Embedded Control System Design',
    },
    {
        id: 2,
        text: 'Advanced Electronic Assembly',
    },
    {
        id: 3,
        text: 'Intelligent Device Integration',
    },
    {
        id: 4,
        text: 'Intelligent Device Control Solutions',
    },
     {
        id: 5,
        text: 'System Monitoring & Control Solutions',
    },
     {
        id: 6,
        text: 'Quality Testing & Performance Validation',
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

                           

                            <h3 className="service-details__title-1">Centralized Control Systems for Smart Infrastructure</h3>
                            <p className="service-details__text-2">
                            Viprakha Componentix Pvt Ltd manufactures advanced Smart Home Controllers designed to serve as the central control unit for connected electrical and electronic systems. Engineered with intelligent processing capabilities and reliable communication interfaces, our controllers enable seamless coordination, monitoring, and management of multiple connected devices through a unified platform.
                            </p>
                            <p className="service-details__text-2">
                         Built using advanced embedded electronics and control technologies, these controllers deliver reliable performance, scalable integration, and efficient system management for modern smart infrastructure applications.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                         We specialize in the design and manufacturing of high-performance control systems that combine intelligent automation, connectivity, and operational reliability.</p>
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