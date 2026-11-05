import React from 'react';

import { MdOutlinePower, MdSecurity, MdOutlineAcUnit } from "react-icons/md";
import { GiElectric, GiProcessor  } from "react-icons/gi";
import { FaTachometerAlt } from "react-icons/fa";
import ServiceDetailsSidebar from '../Powersupplyunits/ProductDetailsSidebar';
import serviceDetailsImg1 from '../../assets/images/services/powersupply.jpg';


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
        text: 'Precision Electronic Assembly',
    },
    {
        id: 2,
        text: 'Advanced PCB Integration',
    },
    {
        id: 3,
        text: 'Voltage Regulation Systems',
    },
    {
        id: 4,
        text: 'Thermal & Safety Protection Design',
    },
     {
        id: 5,
        text: 'Energy-Efficient Power Solutions',
    },
     {
        id: 6,
        text: 'Quality Testing & Performance Validation',
    },
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
       
        iconClass: <MdOutlinePower />,
        title: 'Reliable Power Output',
        text: 'Provides stable and continuous power supply for industrial and smart electronic systems.',
    },
    {
        id: 2,
       
        iconClass: <FaTachometerAlt />,
        title: 'High Efficiency',
        text: 'Designed for energy-efficient performance with optimized power conversion and reduced energy loss.',
    },
      {
        id: 3,
      
        iconClass: <MdSecurity />,
        title: 'Voltage Protection',
        text: 'Protects connected devices and equipment from voltage fluctuations, overloads, and short circuits.',
    },
      {
        id: 4,
   
        iconClass: <GiElectric  />,
        title: 'Durable Design',
        text: 'Manufactured using high-quality components for long-lasting operational reliability.',
    },
      {
        id: 5,
      
        iconClass: <GiProcessor />,
        title: 'Compact & Efficient',
        text: 'Compact design allows easy integration into industrial systems and electronic applications.',
    },
      {
        id: 6,
      
        iconClass: <MdOutlineAcUnit />,
        title: 'Thermal Protection',
        text: 'Integrated thermal management systems ensure safe and stable performance during continuous operation.',
    },
];

const PowersupplyMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Advanced Power Supply Unit Manufacturing Solutions</h3>
                            <p className="service-details__text-2">
                               Viprakha Componentix Pvt Ltd specializes in the manufacturing of high-quality Power Supply Units designed to deliver stable, efficient, and reliable power solutions for industrial, commercial, and smart electronic applications. Our manufacturing process combines advanced engineering, precision production techniques, and strict quality standards to ensure superior performance and durability.
                            </p>
                            <p className="service-details__text-2">
                              We manufacture power supply solutions that support industrial automation systems, control panels, communication equipment, IoT devices, and smart electronic technologies. Our products are built to handle demanding operational environments while maintaining consistent power output and system reliability.
                            </p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                        With modern manufacturing infrastructure and experienced professionals, we focus on producing power supply units that meet industry requirements for safety, energy efficiency, and long-term operational stability.
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

export default PowersupplyMain;