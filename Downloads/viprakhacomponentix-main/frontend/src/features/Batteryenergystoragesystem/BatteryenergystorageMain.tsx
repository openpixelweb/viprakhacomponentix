import React from 'react';
import ServiceDetailsSidebar from './bateryenergysidebar';
import { MdBatteryChargingFull, MdOutlineAnalytics, MdOutlineEnergySavingsLeaf, MdOutlineHub} from "react-icons/md";
import { GiBatteryPack } from "react-icons/gi";
import { TbGauge } from "react-icons/tb";
import serviceDetailsImg1 from '../../assets/images/services/batteryenergy.jpg';


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
        text: 'Battery Pack Assembly & Integration',
    },
    {
        id: 2,
        text: 'Battery Management Systems (BMS)',
    },
    {
        id: 3,
        text: 'Energy Monitoring & Control Solutions',
    },
    {
        id: 4,
        text: 'Smart Power Distribution Systems',
    },
     {
        id: 5,
        text: 'Renewable Energy Integration',
    },
     {
        id: 6,
        text: 'Quality Testing & Performance Validation',
    },
 
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <MdBatteryChargingFull />,
        title: 'Efficient Energy Storage',
        text: 'Store excess energy and deliver power when required, ensuring uninterrupted operations.',
    },
    {
        id: 2,
      
        iconClass: <MdOutlineAnalytics />,
        title: 'Intelligent Battery Management',
        text: 'Advanced Battery Management Systems monitor battery health, performance, and safety.',
    },
      {
        id: 3,
     
        iconClass: <GiBatteryPack />,
        title: 'Reliable Backup Power',
        text: 'Provides dependable backup power during outages and grid interruptions.',
    },
      {
        id: 4,
     
        iconClass: <MdOutlineEnergySavingsLeaf />,
        title: 'Renewable Energy Compatibility',
        text: 'Seamlessly integrates with solar and renewable energy systems for enhanced sustainability.',
    },
      {
        id: 5,
    
        iconClass: <TbGauge  />,
        title: 'Peak Load Management',
        text: 'Helps reduce energy costs by managing peak power demand efficiently.',
    },
      {
        id: 6,
     
        iconClass: <MdOutlineHub />,
        title: 'Safe & Scalable Design',
        text: 'Built with advanced safety features and scalable configurations to meet diverse energy requirements.',
    },
   
];

const BatteryenergyMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Advanced Energy Storage Solutions for a Sustainable Future</h3>
                            <p className="service-details__text-2">
                      Viprakha Componentix Pvt Ltd specializes in the manufacturing of Battery Energy Storage Systems (BESS) designed to store, manage, and deliver electrical energy efficiently. Our energy storage solutions help industries, commercial facilities, and residential users optimize power usage, improve energy reliability, and support renewable energy integration.
                            </p>
                            <p className="service-details__text-2">
                     Engineered with advanced battery management technologies and intelligent control systems, our Battery Energy Storage Systems provide dependable backup power, peak load management, and enhanced energy efficiency for modern power infrastructure.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                     We develop high-performance energy storage systems using advanced engineering, intelligent battery management, and rigorous quality standards to ensure safety, efficiency, and long-term reliability.</p>
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

export default BatteryenergyMain;