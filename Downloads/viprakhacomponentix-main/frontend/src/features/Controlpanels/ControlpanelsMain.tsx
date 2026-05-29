import React from 'react';
import ServiceDetailsSidebar from './controlpanelsidebar';
import { MdDashboardCustomize , MdWorkspacePremium ,  MdElectricalServices , MdTune ,  MdSpeed , MdHandyman  } from "react-icons/md";

import serviceDetailsImg1 from '../../assets/images/services/control.jpg';


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
        text: 'Electrical control panel design',
    },
    {
        id: 2,
        text: 'Panel fabrication and assembly',
    },
    {
        id: 3,
        text: 'Component mounting and wiring',
    },
    {
        id: 4,
        text: 'Motor control panel manufacturing',
    },
     {
        id: 5,
        text: 'Automation control panel solutions',
    },
     {
        id: 6,
        text: 'Power distribution panel solutions',
    },
   
     {
        id: 7,
        text: 'Testing and quality inspection',
    },
    
     {
        id: 8,
        text: 'Customized industrial panel manufacturing',
    },
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <MdDashboardCustomize  />,
        title: 'Robust Panel Design',
        text: 'Our control panels are built with strong and durable enclosures that protect internal electrical components from dust, moisture, heat, and industrial working conditions.',
    },
    {
        id: 2,
      
        iconClass: <MdWorkspacePremium  />,
        title: 'High-Quality Components',
        text: 'We use dependable electrical components such as MCBs, MCCBs, contactors, relays, timers, meters, indicators, switches, and terminal blocks to ensure long-lasting performance.',
    },
      {
        id: 3,
     
        iconClass: < MdElectricalServices  />,
        title: 'Safe and Organized Wiring',
        text: 'Each panel is designed with neat wiring, proper cable routing, ferruling, and terminal marking. This helps in easy maintenance, troubleshooting, and safe operation.',
    },
      {
        id: 4,
     
        iconClass: <MdTune   />,
        title: 'Customized Solutions',
        text: 'We manufacture control panels according to specific industrial needs, including motor control, automation control, power distribution, and machine control applications.',
    },
      {
        id: 5,
    
        iconClass: < MdSpeed  />,
        title: 'Efficient Performance',
        text: 'Our panels are engineered to provide stable control, reduce downtime, and improve the overall efficiency of electrical and automation systems.',
    },
      {
        id: 6,
     
        iconClass: < MdHandyman  />,
        title: 'Easy Installation and Maintenance',
        text: 'The panels are designed for user-friendly installation, operation, inspection, and servicing, helping industries save time and maintenance effort.',
    },
   
];

const ControlpanelsMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Advanced Industrial Control Panel Solutions
</h3>
                            <p className="service-details__text-2">
                              At Viprakha Componentix, we manufacture high-quality Control Panels designed to ensure smooth, safe, and efficient operation of industrial electrical systems. Our control panels are engineered using reliable components and advanced wiring practices to support various industrial applications.
                            </p>
                            <p className="service-details__text-2">
                            Our panels are suitable for controlling motors, machines, automation systems, power distribution, and process equipment. Each panel is designed with a focus on safety, durability, performance, and ease of maintenance.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                      At Viprakha Componentix, we focus on precision, quality, and reliability in every control panel we manufacture. Our manufacturing process includes careful design planning, component selection, panel fabrication, wiring, testing, and final inspection.</p>
                            <p className="service-details__text-2">
                           We understand that every industry has different requirements. That is why our team provides customized control panel solutions based on technical specifications, site conditions, and application needs.
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

export default ControlpanelsMain;