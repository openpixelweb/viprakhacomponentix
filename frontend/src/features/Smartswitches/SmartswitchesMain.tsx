import React from 'react';
import ServiceDetailsSidebar from './smartswitchessidebar';
import { MdVerified} from "react-icons/md";
import { TbGauge, TbActivityHeartbeat, TbHierarchy3 } from "react-icons/tb";
import { GiElectric } from "react-icons/gi";
import { RiRemoteControlLine } from "react-icons/ri";
import serviceDetailsImg1 from '../../assets/images/services/smartswitches.jpg';



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
        text: 'Industrial-Grade Electronic Assembly',
    },
    {
        id: 2,
        text: 'Intelligent Switching Technologies',
    },
    {
        id: 3,
        text: 'Advanced Circuit Design & Integration',
    },
    {
        id: 4,
        text: 'Process Control Compatibility',
    },
     {
        id: 5,
        text: 'Quality Testing & Validation',
    },
     {
        id: 6,
        text: 'Customized Switching Solutions',
    },
 
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <TbGauge />,
        title: 'Intelligent Load Management',
        text: 'Optimizes electrical load distribution and switching operations for enhanced system efficiency.',
    },
    {
        id: 2,
      
        iconClass: <TbActivityHeartbeat />,
        title: 'Real-Time Monitoring Capability',
        text: 'Supports continuous monitoring of switching status and operational performance.',
    },
      {
        id: 3,
     
        iconClass: <RiRemoteControlLine />,
        title: 'Remote Control & Integration',
        text: 'Enables seamless integration with industrial control systems and centralized monitoring platforms.',
    },
      {
        id: 4,
     
        iconClass: <MdVerified   />,
        title: 'High Reliability Performance',
        text: 'Designed for continuous operation in demanding industrial conditions.',
    },
      {
        id: 5,
    
        iconClass: <GiElectric   />,
        title: 'Enhanced Electrical Protection',
        text: 'Provides protection against overloads, electrical faults, and abnormal operating conditions.',
    },
      {
        id: 6,
     
        iconClass: <TbHierarchy3 />,
        title: 'Scalable System Architecture',
        text: 'Suitable for small-scale installations as well as large industrial infrastructures.',
    },
   
];

const SmartswitchesMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Intelligent Switching Solutions for Industrial Control Systems</h3>
                            <p className="service-details__text-2">
                    Viprakha Componentix Pvt Ltd manufactures advanced Industrial Smart Switches designed to support modern industrial operations, process automation, and intelligent electrical control systems. Engineered for reliability, efficiency, and seamless integration, our smart switches enable precise switching, monitoring, and control of industrial equipment and electrical networks.
                            </p>
                            <p className="service-details__text-2">
                   Built with industrial-grade components and advanced electronic technologies, these solutions help improve operational efficiency, system reliability, and energy management across a wide range of industrial applications.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                      We specialize in the design and production of high-performance smart switching solutions that meet the demanding requirements of industrial environments.</p>
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

export default SmartswitchesMain;