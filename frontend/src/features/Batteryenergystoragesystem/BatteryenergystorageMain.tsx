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
        text: 'Industrial Battery Pack Integration',
    },
    {
        id: 2,
        text: 'Advanced Battery Management Systems (BMS)',
    },
    {
        id: 3,
        text: 'Energy Monitoring & Control Systems',
    },
    {
        id: 4,
        text: 'Power Conversion & Distribution Integration',
    },
     {
        id: 5,
        text: 'Thermal Management Solutions',
    },
     {
        id: 6,
        text: 'Quality Testing & System Validation',
    },
 
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <MdBatteryChargingFull />,
        title: 'High-Capacity Energy Storage',
        text: 'Efficiently stores electrical energy for peak demand management and backup power applications.',
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
        title: 'Grid Stability & Power Quality',
        text: 'Supports stable power delivery and improves overall electrical system reliability.',
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
        title: 'Enhanced Safety Systems',
        text: 'Integrated protection against overcharging, overheating, short circuits, and electrical faults.',
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

                           

                            <h3 className="service-details__title-1">Industrial Energy Storage Solutions for Reliable Power Management</h3>
                            <p className="service-details__text-2">
                      Viprakha Componentix Pvt Ltd manufactures advanced Battery Energy Storage Systems (BESS) designed to support industrial operations with efficient energy storage, power stabilization, and uninterrupted energy supply. Our systems are engineered to meet the demanding requirements of manufacturing facilities, industrial plants, commercial infrastructure, and utility-scale applications.
                            </p>
                            <p className="service-details__text-2">
                  By integrating advanced battery technologies, intelligent Battery Management Systems (BMS), and energy control solutions, our BESS helps industries optimize energy consumption, manage peak loads, improve power quality, and ensure operational continuity.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                    We design and manufacture industrial-grade Battery Energy Storage Systems with a focus on performance, safety, scalability, and long-term reliability.</p>
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