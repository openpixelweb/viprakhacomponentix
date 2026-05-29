import React from 'react';
import ServiceDetailsSidebar from './automtionmodulessidebar';
import { MdOutlineSettingsSuggest , MdMonitor ,  MdVerified , MdOutlineHub  ,   MdPrecisionManufacturing , MdGpsFixed} from "react-icons/md";

import serviceDetailsImg1 from '../../assets/images/services/automation.jpg';


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
        text: 'Automation module manufacturing',
    },
    {
        id: 2,
        text: 'Industrial control module development',
    },
    {
        id: 3,
        text: 'PCB-based automation solutions',
    },
    {
        id: 4,
        text: 'Sensor and relay interface modules',
    },
     {
        id: 5,
        text: 'Machine control module manufacturing',
    },
     {
        id: 6,
        text: 'Custom electronic module assembly',
    },
    {
        id: 7,
        text: 'Control panel integration support',
    },
    {
        id: 8,
        text: 'Testing and quality inspection',
    },
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: < MdOutlineSettingsSuggest />,
        title: 'Reliable Automation Control',
        text: 'Our automation modules are designed to provide stable and accurate control for industrial machines, equipment, and electronic systems.',
    },
    {
        id: 2,
      
        iconClass: <MdMonitor />,
        title: 'Compact Module Design',
        text: 'The modules are built with a compact and efficient structure, making them easy to install inside control panels, machines, and automation systems.',
    },
      {
        id: 3,
     
        iconClass: < MdVerified/>,
        title: 'High-Quality Electronic Components',
        text: 'We use reliable electronic components to ensure long service life, consistent performance, and reduced maintenance requirements.',
    },
      {
        id: 4,
     
        iconClass: <MdOutlineHub   />,
        title: 'Easy System Integration',
        text: 'Our automation modules are designed for easy integration with control panels, sensors, relays, motors, and other industrial electronic systems.',
    },
      {
        id: 5,
    
        iconClass: < MdPrecisionManufacturing  />,
        title: 'Custom-Built Solutions',
        text: 'We provide customized automation modules based on client requirements, application needs, input/output specifications, and machine operation requirements.',
    },
      {
        id: 6,
     
        iconClass: < MdGpsFixed />,
        title: 'Accurate Signal Processing',
        text: 'The modules support proper signal handling and control functions, helping improve machine accuracy, response time, and operational efficiency.',
    },
   
];

const AutomationmodulesMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Industrial Automation Modules
</h3>
                            <p className="service-details__text-2">
                             At Viprakha Componentix, we manufacture high-quality Automation Modules designed to support smooth, accurate, and efficient industrial automation processes. These modules help control, monitor, and manage machines, equipment, and electronic systems with improved reliability and performance.
                            </p>
                            <p className="service-details__text-2">
                           Our automation modules are suitable for industrial control systems, machine automation, process control, control panels, and customized electronic applications. We focus on quality, precision, durability, and customer-specific requirements to deliver dependable automation solutions.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                              At Viprakha Componentix, we specialize in manufacturing automation modules that meet the requirements of modern industrial electronics and automation systems. Our manufacturing process includes design planning, component selection, PCB assembly, wiring, testing, and final quality inspection.</p>
                            <p className="service-details__text-2">
                              We understand that every automation application is different. That is why we provide customized module solutions based on the customer’s machine design, control logic, operating conditions, and technical requirements.
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

export default AutomationmodulesMain;