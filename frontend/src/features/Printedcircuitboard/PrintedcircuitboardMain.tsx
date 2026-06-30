import React from 'react';
import ServiceDetailsSidebar from './printedcircuitboardsidebar';
import { MdOutlineHub , MdGpsFixed ,  MdOutlineSettingsSuggest , MdMonitor ,    MdVerified, MdPrecisionManufacturing } from "react-icons/md";

import serviceDetailsImg1 from '../../assets/images/services/pcbs.jpg';


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
        text: 'Printed circuit board design support',
    },
    {
        id: 2,
        text: 'PCB layout and circuit arrangement',
    },
    {
        id: 3,
        text: 'Single-sided and double-sided PCB solutions',
    },
    {
        id: 4,
        text: 'PCB assembly support',
    },
     {
        id: 5,
        text: 'Component mounting and soldering support',
    },
     {
        id: 6,
        text: 'Industrial electronics PCB manufacturing',
    },
    {
        id: 7,
        text: 'Custom PCB development',
    },
    {
        id: 8,
        text: 'Quality inspection and testing',
    },
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: < MdOutlineHub />,
        title: 'High-Quality PCB Design',
        text: 'Our printed circuit boards are designed with proper circuit layout, accurate track routing, and efficient component placement to ensure stable electrical performance.',
    },
    {
        id: 2,
      
        iconClass: <MdGpsFixed />,
        title: 'Reliable Electrical Connectivity',
        text: 'PCBs provide strong and consistent electrical connections between electronic components, reducing wiring complexity and improving overall product reliability.',
    },
      {
        id: 3,
     
        iconClass: < MdOutlineSettingsSuggest />,
        title: 'Compact and Efficient Structure',
        text: 'Our PCBs help reduce the size of electronic assemblies by arranging multiple components on a single board, making the final product compact and efficient.',
    },
      {
        id: 4,
     
        iconClass: <MdMonitor  />,
        title: 'Durable Board Material',
        text: 'We use quality PCB materials suitable for industrial applications, helping the board withstand heat, electrical load, and continuous operating conditions.',
    },
      {
        id: 5,
    
        iconClass: <  MdVerified />,
        title: 'Custom PCB Solutions',
        text: 'We offer PCB solutions based on customer requirements, including different sizes, layouts, circuit designs, component needs, and application specifications.',
    },
      {
        id: 6,
     
        iconClass: < MdPrecisionManufacturing  />,
        title: 'Accurate Component Mounting',
        text: 'Our PCB manufacturing process supports precise component placement, ensuring better performance, reduced faults, and easy assembly.',
    },
   
];

const PrintedcircuitboardMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Precision PCB Manufacturing Solutions
</h3>
                            <p className="service-details__text-2">
                              At Viprakha Componentix, we provide high-quality Printed Circuit Boards (PCBs) designed for reliable performance in industrial electronic applications. A Printed Circuit Board is the foundation of any electronic system, used to connect and support electronic components in a compact, efficient, and organized way.
                            </p>
                            <p className="service-details__text-2">
                            Our PCBs are suitable for industrial control systems, automation products, power electronics, embedded systems, and custom electronic devices. We focus on quality, precision, durability, and performance to meet the needs of modern electronic manufacturing.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                              At Viprakha Componentix, we understand the importance of accuracy and quality in PCB manufacturing. Our manufacturing process is focused on delivering PCBs that meet functional, electrical, and durability requirements.</p>
                            <p className="service-details__text-2">
                              Our team works carefully on design review, board layout, material selection, component compatibility, assembly support, inspection, and testing. We ensure that every PCB is manufactured with attention to detail and checked for proper performance before delivery.
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

export default PrintedcircuitboardMain;