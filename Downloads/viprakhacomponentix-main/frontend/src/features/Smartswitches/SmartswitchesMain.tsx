import React from 'react';
import ServiceDetailsSidebar from './smartswitchessidebar';
import { MdOutlineEnergySavingsLeaf , MdOutlineHub,  MdOutlineDashboardCustomize, MdVerified} from "react-icons/md";
import { RiRemoteControlLine } from "react-icons/ri";
import { IoCloudOutline } from "react-icons/io5";
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
        text: 'Smart Electronics Integration',
    },
    {
        id: 2,
        text: 'IoT-Enabled Connectivity Solutions',
    },
    {
        id: 3,
        text: 'Precision Circuit Design & Assembly',
    },
    {
        id: 4,
        text: 'Home & Building Automation Systems',
    },
     {
        id: 5,
        text: 'Advanced Quality Testing',
    },
     {
        id: 6,
        text: 'Customized Smart Switching Solutions',
    },
 
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <RiRemoteControlLine />,
        title: 'Intelligent Device Control',
        text: 'Control lighting, appliances, and electrical systems with ease and efficiency.',
    },
    {
        id: 2,
      
        iconClass: <IoCloudOutline />,
        title: 'Remote Access & Operation',
        text: 'Manage connected devices remotely through smart automation platforms.',
    },
      {
        id: 3,
     
        iconClass: <MdOutlineEnergySavingsLeaf />,
        title: 'Energy-Efficient Performance',
        text: 'Optimize electricity usage and reduce unnecessary power consumption.',
    },
      {
        id: 4,
     
        iconClass: <MdOutlineHub   />,
        title: 'Seamless Connectivity',
        text: 'Integrates smoothly with smart home systems and IoT-enabled devices.',
    },
      {
        id: 5,
    
        iconClass: < MdOutlineDashboardCustomize  />,
        title: 'User-Friendly Design',
        text: 'Simple operation with modern functionality for enhanced convenience.',
    },
      {
        id: 6,
     
        iconClass: <MdVerified />,
        title: 'Safe & Reliable Operation',
        text: 'Built with advanced protection features to ensure long-term safety and performance.',
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

                           

                            <h3 className="service-details__title-1">Intelligent Switching Solutions for Modern Homes and Businesses</h3>
                            <p className="service-details__text-2">
                        Viprakha Componentix Pvt Ltd specializes in the manufacturing of advanced Smart Switches designed to bring convenience, energy efficiency, and intelligent control to modern electrical systems. Our smart switches enable seamless management of lighting, appliances, and connected devices, enhancing both comfort and operational efficiency.
                            </p>
                            <p className="service-details__text-2">
                        Engineered with advanced electronics and smart connectivity features, our solutions support the growing demand for home automation, smart buildings, and intelligent energy management systems.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                        We manufacture high-quality smart switching solutions that combine innovative technology, reliable performance, and user-friendly operation.</p>
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