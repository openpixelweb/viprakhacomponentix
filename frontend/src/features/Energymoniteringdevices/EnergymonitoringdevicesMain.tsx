import React from 'react';
import ServiceDetailsSidebar from './energymonitorngsidebar';
import { MdGpsFixed ,  MdOutlineAnalytics , MdOutlineMonitor,  MdOutlineEnergySavingsLeaf, MdConstruction} from "react-icons/md";
import { RiPulseLine } from "react-icons/ri";
import serviceDetailsImg1 from '../../assets/images/services/energymonitoring.jpg';


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
        text: 'Precision Energy Measurement Systems',
    },
    {
        id: 2,
        text: 'Industrial Monitoring Electronics',
    },
    {
        id: 3,
        text: 'Advanced Data Acquisition Technology',
    },
    {
        id: 4,
        text: 'Power Quality Analysis Solutions',
    },
     {
        id: 5,
        text: 'Intelligent Energy Management Integration',
    },
     {
        id: 6,
        text: 'Comprehensive Testing & Validation',
    },
 
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <RiPulseLine />,
        title: 'Real-Time Energy Tracking',
        text: 'Monitor electricity consumption continuously for improved visibility and control.',
    },
    {
        id: 2,
      
        iconClass: <MdGpsFixed />,
        title: 'Accurate Power Measurement',
        text: 'Provides precise data on voltage, current, power usage, and energy consumption.',
    },
      {
        id: 3,
     
        iconClass: <MdOutlineAnalytics />,
        title: 'Smart Data Analysis',
        text: 'Generates valuable insights to help optimize energy usage and reduce wastage.',
    },
      {
        id: 4,
     
        iconClass: <MdOutlineMonitor   />,
        title: 'Remote Monitoring Capability',
        text: 'Supports remote access and monitoring through connected smart technologies.',
    },
      {
        id: 5,
    
        iconClass: < MdOutlineEnergySavingsLeaf  />,
        title: 'Energy Efficiency Optimization',
        text: 'Helps identify opportunities to improve operational efficiency and lower electricity costs.',
    },
      {
        id: 6,
     
        iconClass: <MdConstruction />,
        title: 'Reliable & Durable Design',
        text: 'Manufactured for long-term performance in industrial, commercial, and residential environments.',
    },
   
];

const EnergymonitoringMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Advanced Energy Monitoring Solutions for Industrial Efficiency</h3>
                            <p className="service-details__text-2">
                        Viprakha Componentix Pvt Ltd manufactures high-performance Energy Monitoring Devices designed to provide accurate measurement, analysis, and management of electrical energy consumption across industrial facilities. Our solutions enable organizations to monitor power usage, improve energy efficiency, reduce operational costs, and enhance overall system performance.
                            </p>
                            <p className="service-details__text-2">
                       Engineered with advanced sensing technologies and intelligent monitoring capabilities, our devices deliver real-time energy data that supports informed decision-making and optimized resource utilization.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                          We specialize in the development and manufacturing of industrial-grade energy monitoring solutions that meet the demands of modern industrial operations and power management systems.</p>
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

export default EnergymonitoringMain;