import React from 'react';
import ServiceDetailsSidebar from './voltagestabilizerssidebar';
import { MdGpsFixed , MdSecurity,  MdConstruction, MdFlashOn} from "react-icons/md";
import { TbGauge } from "react-icons/tb";
import { RiPulseLine } from "react-icons/ri";
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
        text: 'Precision Electronic Control Systems',
    },
    {
        id: 3,
        text: 'Industrial-Grade Component Integration',
    },
    {
        id: 4,
        text: 'Intelligent Protection Mechanisms',
    },
     {
        id: 5,
        text: 'Thermal Management & Cooling Solutions',
    },
     {
        id: 6,
        text: 'Comprehensive Quality Testing',
    },
 
];

const imgBoxData: ImgBoxItem[] = [
    {
        id: 1,
     iconClass: <MdGpsFixed />,
        title: 'Accurate Voltage Stabilization',
        text: 'Maintains a constant output voltage despite fluctuations in the input power supply.',
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
        title: 'Fast Response Time',
        text: 'Rapid correction of voltage variations to ensure uninterrupted equipment operation.',
    },
      {
        id: 6,
     
        iconClass: <RiPulseLine />,
        title: 'Intelligent Monitoring & Control',
        text: 'Advanced monitoring capabilities provide improved system reliability and operational visibility.',
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

                           

                            <h3 className="service-details__title-1">Precision Voltage Regulation Solutions for Industrial Applications</h3>
                            <p className="service-details__text-2">
                     Viprakha Componentix Pvt Ltd manufactures high-performance Industrial Voltage Stabilizers designed to provide consistent voltage regulation and protect critical equipment from voltage fluctuations, surges, sags, and power disturbances. Our stabilizers are engineered to ensure operational continuity, equipment safety, and enhanced productivity in demanding industrial environments.
                            </p>
                            <p className="service-details__text-2">
                      Built with advanced control technologies and robust electrical components, our voltage stabilizers deliver reliable power conditioning solutions for manufacturing plants, automation systems, process industries, and commercial infrastructure.</p>
                            <div className="service-details__img">
                                <img src={serviceDetailsImg1} alt="Advanced Power Supply Unit Manufacturing Solutions" />
                            </div>
                          
                            <h3 className="service-details__title-1">Our Manufacturing Expertise</h3>
                            <p className="service-details__text-2">
                     We specialize in the design and manufacturing of industrial-grade voltage stabilization systems that meet the highest standards of performance, reliability, and safety.</p>
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