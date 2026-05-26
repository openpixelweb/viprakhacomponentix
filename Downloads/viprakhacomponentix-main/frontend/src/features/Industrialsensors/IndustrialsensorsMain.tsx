import React from 'react';
import ServiceDetailsSidebar from '../Powersupplyunits/ProductDetailsSidebar';
import { MdGpsFixed, MdMonitor, MdVerified, MdOutlineSettingsSuggest, MdOutlineEnergySavingsLeaf, MdOutlineHub } from "react-icons/md";

import serviceDetailsImg1 from '../../assets/images/services/idustrial-sensors.jpg';


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
        text: 'Precision Sensor Technology',
    },
    {
        id: 2,
        text: 'Smart Monitoring Integration',
    },
    {
        id: 3,
        text: 'Industrial Automation Compatibility',
    },
    {
        id: 4,
        text: 'High-Accuracy Detection Systems',
    },
     {
        id: 5,
        text: 'Durable Industrial Design',
    },
     {
        id: 6,
        text: 'Quality Testing & Calibration',
    },
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <MdGpsFixed />,
        title: 'High Accuracy & Precision',
        text: 'Designed to deliver reliable and accurate monitoring for industrial operations and automation systems.',
    },
    {
        id: 2,
      
        iconClass: <MdMonitor />,
        title: 'Real-Time Monitoring',
        text: 'Supports continuous monitoring and instant response for improved operational efficiency.',
    },
      {
        id: 3,
     
        iconClass: <MdVerified />,
        title: 'Durable & Reliable Performance',
        text: 'Manufactured using high-quality materials for stable performance in industrial environments.',
    },
      {
        id: 4,
     
        iconClass: <MdOutlineSettingsSuggest  />,
        title: 'Smart Automation Integration',
        text: 'Compatible with automation systems, control panels, and IoT-based technologies.',
    },
      {
        id: 5,
    
        iconClass: <MdOutlineEnergySavingsLeaf />,
        title: 'Energy-Efficient Operation',
        text: 'Optimized designs for efficient performance and reduced energy consumption.',
    },
      {
        id: 6,
     
        iconClass: <MdOutlineHub />,
        title: 'Wide Industrial Compatibility',
        text: 'Suitable for various industrial applications including manufacturing, energy systems, and automation processes.',
    },
];

const IndustrialsensorsMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Advanced Industrial Sensor Solutions</h3>
                            <p className="service-details__text-2">
                              Viprakha Componentix Pvt Ltd specializes in the manufacturing of high-performance Industrial Sensors designed for accurate monitoring, intelligent automation, and reliable industrial operations. Our sensors are engineered using advanced technologies to deliver precision, durability, and consistent performance across demanding industrial environments.
                            </p>
                            <p className="service-details__text-2">
                             We manufacture industrial sensor solutions that support automation systems, process monitoring, smart control applications, and real-time data collection for modern industries and smart technologies.
                            </p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                      With advanced manufacturing processes and precision engineering, we develop industrial sensors that meet industry standards for reliability, efficiency, and operational accuracy.
                            </p>
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

export default IndustrialsensorsMain;