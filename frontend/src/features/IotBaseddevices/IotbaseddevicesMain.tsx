import React from 'react';
import ServiceDetailsSidebar from './iotbaseddevicessidebar';
import { MdOutlineDataUsage, MdOutlineMonitor, MdOutlineSettingsSuggest, MdOutlineHub} from "react-icons/md";
import { IoGitNetworkOutline } from "react-icons/io5";
import { FaTools } from "react-icons/fa";

import serviceDetailsImg1 from '../../assets/images/services/iotbased.jpg';


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
        text: 'Embedded Electronics Design & Development',
    },
    {
        id: 2,
        text: 'Industrial Communication Integration',
    },
    {
        id: 3,
        text: 'Sensor & Data Acquisition Systems',
    },
    {
        id: 4,
        text: 'Edge Computing Solutions',
    },
     {
        id: 5,
        text: 'Industrial Connectivity Platforms',
    },
     {
        id: 6,
        text: 'Quality Testing & Performance Validation',
    },
 
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <MdOutlineDataUsage />,
        title: 'Real-Time Data Acquisition',
        text: 'Collects and transmits operational data from equipment, sensors, and industrial processes for enhanced visibility.',
    },
    {
        id: 2,
      
        iconClass: <MdOutlineMonitor />,
        title: 'Remote Monitoring & Diagnostics',
        text: 'Enables centralized monitoring of assets, equipment performance, and operational conditions.',
    },
      {
        id: 3,
     
        iconClass: <MdOutlineSettingsSuggest />,
        title: 'Intelligent Process Optimization',
        text: 'Supports data-driven decision-making through continuous monitoring and analytics.',
    },
      {
        id: 4,
     
        iconClass: <IoGitNetworkOutline   />,
        title: 'Secure Industrial Connectivity',
        text: 'Provides reliable communication between machines, control systems, and monitoring platforms.',
    },
      {
        id: 5,
    
        iconClass: <FaTools  />,
        title: 'Predictive Maintenance Support',
        text: 'Helps identify potential equipment issues before failures occur, reducing downtime and maintenance costs.',
    },
      {
        id: 6,
     
        iconClass: <MdOutlineHub />,
        title: 'Scalable System Integration',
        text: 'Seamlessly integrates with industrial automation systems, SCADA platforms, and enterprise monitoring solutions.',
    },
   
];

const IotbaseddevicesMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Intelligent Connectivity Solutions for Industrial Operations</h3>
                            <p className="service-details__text-2">
                   Viprakha Componentix Pvt Ltd manufactures advanced Industrial IoT-Based Devices designed to enable real-time monitoring, data acquisition, asset connectivity, and intelligent process control across industrial environments. Our solutions help organizations improve operational visibility, optimize resource utilization, and enhance decision-making through connected industrial ecosystems.
                            </p>
                            <p className="service-details__text-2">
                       Engineered with robust electronics, embedded technologies, and secure communication protocols, our IoT devices support digital transformation initiatives across manufacturing, utilities, infrastructure, and industrial automation sectors.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                       We specialize in the development and manufacturing of industrial-grade IoT devices that deliver reliable performance in demanding operational environments.</p>
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

export default IotbaseddevicesMain;