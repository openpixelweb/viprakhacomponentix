import React from 'react';
import { FaCalendarAlt, FaProjectDiagram, FaHandshake, FaSmile } from "react-icons/fa";
import counterOneBg from '../../assets/images/backgrounds/counter-one-bg.jpg';
import CounterUp from '../../components/elements/CounterUp';
import JarallaxSection from '../../components/elements/JarallaxSection';

interface CounterItem {
    id: number;
    iconClass: React.ReactNode;
    count: number;
    suffix: string;
    label: string;
}

const counterItems: CounterItem[] = [
    {
        id: 1,
        iconClass: <FaCalendarAlt />,
        count: 10,
        suffix: '+',
        label: 'Years of Experience',
    },
    {
        id: 2,
        iconClass: <FaProjectDiagram />,
        count: 500,
        suffix: '+',
        label: 'Projects Delivered',
    },
    {
        id: 3,
        iconClass: <FaHandshake />,
        count: 100,
        suffix: '+',
        label: 'Industrial Clients',
    },
    {
        id: 4,
        iconClass: <FaSmile />,
        count: 100,
        suffix: '%',
        label: 'Happy Clients',
    },
];

const CounterOne: React.FC = () => {
    return (
        <JarallaxSection className="counter-one"
            imgSrc={counterOneBg}
            overlayOpacity={0.6}
        >
            <div className="container">
                <ul className="row list-unstyled">
                    {counterItems.map((item) => (
                        <li key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span>{item.iconClass}</span>
                                </div>
                                <div className="counter-one__count-box">
                                    <h3 className="odometer"><CounterUp ending={item?.count} /></h3>
                                    <span>{item.suffix}</span>
                                </div>
                                <p className="counter-one__count-text">{item.label}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </JarallaxSection>
    );
};

export default CounterOne;