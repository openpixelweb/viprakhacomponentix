import React from 'react';
import { Link } from 'react-router';
import { FaPlug, FaBroadcastTower, FaSlidersH, FaMicrochip, FaRobot } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import servicesTwoShape1 from '../../assets/images/shapes/services-two-shape-1.png';
import servicesImg1 from '../../assets/images/services/powersupplyunits.jpg';
import servicesImg2 from '../../assets/images/services/industrialsensors.jpg';
import servicesImg3 from '../../assets/images/services/controlpanels.jpg';
import servicesImg4 from '../../assets/images/services/pcb.jpg';
import servicesImg5 from '../../assets/images/services/automationmodules.jpg';
import TextAnimation from '../../components/elements/TextAnimation';
import SectionWrapper from '../../components/elements/SectionWrapper';

interface ServiceItem {
    id: number;
    image: string;
    iconClass: React.ReactNode;
    title: string;
    to: string;
    hoverText: string;
}

const serviceItems: ServiceItem[] = [
    {
        id: 1,
        image: servicesImg1,
        iconClass: <FaPlug />,
        title: 'Power Supply Units',
        to: '/power-supply-units',
        hoverText: 'Efficient and reliable power solutions for industrial and residential electronic systems.',
    },
    {
        id: 2,
        image: servicesImg2,
        iconClass: <FaBroadcastTower />,
        title: 'Industrial Sensors',
        to: '/industrial-sensors',
        hoverText: 'Precision sensors designed for automation, monitoring, and smart technology applications.',
    },
    {
        id: 3,
        image: servicesImg3,
        iconClass: <FaSlidersH />,
        title: 'Control Panels',
        to: '/control-panels',
        hoverText: 'Advanced control systems for industrial operations and intelligent electrical management.',
    },
    {
        id: 4,
        image: servicesImg4,
        iconClass: <FaMicrochip />,
        title: 'Printed Circuit Boards (PCBs)',
        to: '/printed-circuit-boards',
        hoverText: 'High-performance PCB manufacturing for industrial electronics and smart devices.',
    },
    {
        id: 5,
        image: servicesImg5,
        iconClass: <FaRobot />,
        title: 'Automation Modules',
        to: '/Automation-Modules',
        hoverText: 'Smart automation technologies that improve operational efficiency and system integration.',
    },
];

const Products: React.FC = () => {
    return (
        <SectionWrapper id='services' className="services-two">
            <div className="services-two__bg-color">
                <div className="services-two__shape-1">
                    <img src={servicesTwoShape1} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Our Products
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation>Industrial & Smart Technology Products</TextAnimation>
                    </h3>
                </div>
                <div className="services-two__carousel  ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Autoplay]}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1200: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                    > 
                        {serviceItems.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="item" >
                                    <div className="services-two__single">
                                        <div className="services-two__img-box">
                                            <div className="services-two__img">
                                                <img src={service.image} alt="" />
                                            </div>
                                            <div className="services-two__hover-content">
                                                <p className="services-two__hover-text">{service.hoverText}</p>
                                                <div className="services-two__btn-box">
                                                    <Link to={service.to} className="thm-btn">
                                                        read more
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="services-two__icon">
                                                <span>{service.iconClass}</span>
                                            </div>
                                        </div>
                                        <div className="services-two__content">
                                            <h3 className="services-two__title">
                                                <Link to={service.to}>{service.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Products;