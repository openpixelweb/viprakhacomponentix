import React from 'react';
import ServiceDetailsSidebar from './voltagestabilizerssidebar';
import { MdGpsFixed , MdSecurity,  MdConstruction, MdFlashOn, MdVerified} from "react-icons/md";
import { TbGauge } from "react-icons/tb";
import serviceDetailsImg1 from '../../assets/images/services/voltageztabilizer.jpg';


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
        text: 'Advanced Voltage Regulation Technology',
    },
    {
        id: 2,
        text: 'Precision Electronic Circuit Design',
    },
    {
        id: 3,
        text: 'Intelligent Power Protection Systems',
    },
    {
        id: 4,
        text: 'Industrial & Residential Power Solutions',
    },
     {
        id: 5,
        text: 'Quality Testing & Performance Validation',
    },
     {
        id: 6,
        text: 'Customized Voltage Stabilizer Manufacturing',
    },
 
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <MdGpsFixed />,
        title: 'Accurate Voltage Regulation',
        text: 'Maintains a stable voltage output to ensure smooth and reliable equipment operation.',
    },
    {
        id: 2,
      
        iconClass: <MdSecurity />,
        title: 'Protection Against Voltage Fluctuations',
        text: 'Safeguards sensitive electrical and electronic devices from power surges and voltage drops.',
    },
      {
        id: 3,
     
        iconClass: <TbGauge />,
        title: 'High Efficiency',
        text: 'Optimized design ensures efficient performance with minimal energy loss.',
    },
      {
        id: 4,
     
        iconClass: <MdConstruction />,
        title: 'Durable & Reliable Construction',
        text: 'Built using high-quality components for long-lasting operation in demanding environments.',
    },
      {
        id: 5,
    
        iconClass: < MdFlashOn  />,
        title: 'Fast Response Technology',
        text: 'Quickly responds to voltage variations to protect connected equipment.',
    },
      {
        id: 6,
     
        iconClass: <MdVerified />,
        title: 'Safe & Dependable Operation',
        text: 'Integrated safety features help prevent electrical damage and system failures.',
    },
   
];

const VoltagestabilizersMain: React.FC = () => {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <ServiceDetailsSidebar />
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">

                           

                            <h3 className="service-details__title-1">Reliable Voltage Protection Solutions</h3>
                            <p className="service-details__text-2">
                      Viprakha Componentix Pvt Ltd specializes in the manufacturing of high-quality Voltage Stabilizers designed to protect electrical and electronic equipment from voltage fluctuations, power surges, and unstable power conditions. Our stabilizers ensure a consistent voltage supply, helping improve equipment performance, operational reliability, and product lifespan.
                            </p>
                            <p className="service-details__text-2">
                       Engineered with advanced voltage regulation technology and precision electronic components, our voltage stabilizers provide dependable power protection for industrial, commercial, and residential applications.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                       We manufacture voltage stabilizers using modern production techniques, advanced circuit designs, and strict quality control processes to ensure superior performance and durability.</p>
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

export default VoltagestabilizersMain;