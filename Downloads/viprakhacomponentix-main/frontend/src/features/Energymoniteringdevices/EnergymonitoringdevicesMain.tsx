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
        text: 'Real-Time Monitoring Technology',
    },
    {
        id: 3,
        text: 'IoT-Enabled Connectivity Solutions',
    },
    {
        id: 4,
        text: 'Advanced Electronic Integration',
    },
     {
        id: 5,
        text: 'Quality Testing & Performance Validation',
    },
     {
        id: 6,
        text: 'Customized Energy Management Solutions',
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

                           

                            <h3 className="service-details__title-1">Smart Energy Monitoring Solutions for Efficient Power Management</h3>
                            <p className="service-details__text-2">
                          Viprakha Componentix Pvt Ltd specializes in the manufacturing of advanced Energy Monitoring Devices designed to help industries, commercial facilities, and residential users track, analyze, and optimize energy consumption. Our solutions provide real-time insights into power usage, enabling better decision-making and improved energy efficiency.
                            </p>
                            <p className="service-details__text-2">
                        Built with precision engineering and smart monitoring technologies, our energy monitoring devices support sustainable energy management while reducing operational costs and power wastage.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                           We manufacture intelligent energy monitoring solutions that combine accuracy, reliability, and advanced connectivity to meet the growing demand for efficient power management systems.</p>
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