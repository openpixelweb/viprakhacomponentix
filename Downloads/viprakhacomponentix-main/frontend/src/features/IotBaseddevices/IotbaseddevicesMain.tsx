import React from 'react';
import ServiceDetailsSidebar from './iotbaseddevicessidebar';
import { MdOutlineHub ,  MdOutlineDataUsage, MdOutlineSettingsSuggest, MdVerified} from "react-icons/md";
import { RiPulseLine, RiRemoteControlLine } from "react-icons/ri";
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
        text: 'IoT Hardware Development',
    },
    {
        id: 2,
        text: 'Embedded System Integration',
    },
    {
        id: 3,
        text: 'Wireless Communication Solutions',
    },
    {
        id: 4,
        text: 'Smart Sensor Connectivity',
    },
     {
        id: 5,
        text: 'Real-Time Data Monitoring Systems',
    },
     {
        id: 6,
        text: 'Quality Testing & Validation',
    },
 
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <MdOutlineHub />,
        title: 'Smart Connectivity',
        text: 'Connects devices and systems for seamless communication and data exchange.',
    },
    {
        id: 2,
      
        iconClass: <RiPulseLine />,
        title: 'Real-Time Monitoring',
        text: 'Provides instant access to operational data for improved visibility and control.',
    },
      {
        id: 3,
     
        iconClass: <RiRemoteControlLine />,
        title: 'Remote Access & Control',
        text: 'Enables users to monitor and manage connected devices from anywhere.',
    },
      {
        id: 4,
     
        iconClass: <MdOutlineDataUsage   />,
        title: 'Intelligent Data Collection',
        text: 'Captures and processes valuable information to support informed decision-making.',
    },
      {
        id: 5,
    
        iconClass: <MdOutlineSettingsSuggest  />,
        title: 'Automation Integration',
        text: 'Works seamlessly with automation systems to enhance efficiency and productivity.',
    },
      {
        id: 6,
     
        iconClass: <MdVerified />,
        title: 'Secure & Reliable Operation',
        text: 'Designed with robust security and stable performance for continuous operation.',
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

                           

                            <h3 className="service-details__title-1">Intelligent Connectivity for a Smarter World</h3>
                            <p className="service-details__text-2">
                         Viprakha Componentix Pvt Ltd specializes in the manufacturing of advanced IoT-Based Devices that enable seamless connectivity, real-time monitoring, and intelligent automation across industrial, commercial, and residential environments. Our IoT solutions are designed to connect devices, collect valuable data, and provide actionable insights for smarter decision-making.
                            </p>
                            <p className="service-details__text-2">
                        By combining innovative electronics, embedded systems, and wireless communication technologies, we develop IoT devices that improve efficiency, productivity, and operational control.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                        We manufacture reliable and scalable IoT solutions that support modern digital transformation initiatives and smart technology applications.</p>
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